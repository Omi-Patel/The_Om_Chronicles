import React, { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, XCircle, Loader2 } from "lucide-react";

const labelClasses =
  "block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground";

const inputClasses = (hasError: boolean) =>
  `mt-2 w-full rounded-lg border bg-background px-4 py-2.5 text-sm transition-colors placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 ${
    hasError
      ? "border-destructive/60 focus:border-destructive focus:ring-destructive/20"
      : "border-input focus:border-primary focus:ring-primary/20"
  }`;

export default function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormData>({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [Message, setMessage] = React.useState("");

  const userName = useWatch({
    control,
    name: "from_name",
    defaultValue: "",
  });

  interface FormData {
    from_name: string;
    email: string;
    message: string;
    access_key: string;
    subject: string;
    botcheck: boolean;
  }

  useEffect(() => {
    setValue("subject", `${userName} sent a message from Portfolio`);
  }, [userName, setValue]);

  const onSubmit = async (data: FormData, e?: React.BaseSyntheticEvent) => {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        const json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          if (e) {
            e.target.reset();
          }
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      {!isSubmitSuccessful && (
        <>
          <h3 className="text-lg font-semibold tracking-tight">
            Send a message
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Tell me a little about your project or just say hi.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-5">
            <input
              type="hidden"
              value="ce6d1708-9f8b-4922-9d84-e829101e2664"
              {...register("access_key")}
            />
            <input type="hidden" {...register("subject")} />
            <input
              type="hidden"
              value={userName || ""}
              {...register("from_name")}
            />
            <input
              type="checkbox"
              id=""
              className="hidden"
              {...register("botcheck")}
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={labelClasses}>
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="John Doe"
                  autoComplete="name"
                  aria-invalid={!!errors.from_name}
                  className={inputClasses(!!errors.from_name)}
                  {...register("from_name", {
                    required: "Name is required",
                    maxLength: 80,
                  })}
                />
                {errors.from_name && (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.from_name.message as string}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className={labelClasses}>
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="john@example.com"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  className={inputClasses(!!errors.email)}
                  {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.email.message as string}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className={labelClasses}>
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="What would you like to build?"
                aria-invalid={!!errors.message}
                className={`${inputClasses(!!errors.message)} resize-none`}
                {...register("message", { required: "Enter your Message" })}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-destructive">
                  {errors.message.message as string}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </>
      )}

      {isSubmitSuccessful && isSuccess && (
        <div className="flex flex-col items-center py-12 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
            <CheckCircle className="h-8 w-8 text-emerald-500" />
          </div>
          <h3 className="mt-5 text-lg font-semibold tracking-tight">
            Message sent!
          </h3>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            {Message || "Thanks for reaching out — I'll get back to you soon."}
          </p>
          <Button
            variant="outline"
            onClick={() => reset()}
            className="mt-6"
          >
            Send another message
          </Button>
        </div>
      )}

      {isSubmitSuccessful && !isSuccess && (
        <div className="flex flex-col items-center py-12 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
            <XCircle className="h-8 w-8 text-destructive" />
          </div>
          <h3 className="mt-5 text-lg font-semibold tracking-tight">
            Something went wrong
          </h3>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            {Message}
          </p>
          <Button
            variant="outline"
            onClick={() => reset()}
            className="mt-6"
          >
            Try again
          </Button>
        </div>
      )}
    </div>
  );
}
