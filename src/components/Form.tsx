import React, { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, XCircle, Loader2 } from "lucide-react";

const inputClasses =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

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
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        Send a message
      </p>

      {!isSubmitSuccessful && (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
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

          <div className="space-y-2">
            <input
              type="text"
              placeholder="Your name"
              autoComplete="false"
              className={inputClasses}
              {...register("from_name", {
                required: "Name is required",
                maxLength: 80,
              })}
            />
            {errors.from_name && (
              <p className="text-sm text-destructive">
                {errors.from_name.message as string}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <input
              type="email"
              placeholder="Your email"
              autoComplete="false"
              className={inputClasses}
              {...register("email", {
                required: "Enter your email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-destructive">
                {errors.email.message as string}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <textarea
              rows={5}
              placeholder="Your message"
              className={`${inputClasses} resize-none`}
              {...register("message", { required: "Enter your Message" })}
            />
            {errors.message && (
              <p className="text-sm text-destructive">
                {errors.message.message as string}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <div className="flex items-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </div>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      )}

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-6 space-y-4 py-8 text-center">
          <div className="flex justify-center">
            <CheckCircle className="h-12 w-12 text-emerald-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Message sent!</h3>
            <p className="mt-2 text-muted-foreground">{Message}</p>
          </div>
          <Button variant="outline" onClick={() => reset()} className="mt-4">
            Send Another Message
          </Button>
        </div>
      )}

      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-6 space-y-4 py-8 text-center">
          <div className="flex justify-center">
            <XCircle className="h-12 w-12 text-destructive" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-destructive">Error</h3>
            <p className="mt-2 text-muted-foreground">{Message}</p>
          </div>
          <Button variant="outline" onClick={() => reset()} className="mt-4">
            Try Again
          </Button>
        </div>
      )}
    </div>
  );
}
