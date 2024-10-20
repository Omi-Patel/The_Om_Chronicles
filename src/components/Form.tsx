import React, { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [Message, setMessage] = React.useState("");

  const userName = useWatch({
    control,
    name: "from_name",
    defaultValue: "",
  });

  useEffect(() => {
    setValue("subject", `${userName} sent a message from Portfolio`);
  }, [userName, setValue]);

  const onSubmit = async (data: any, e?: { target: { reset: () => void; }; }) => {
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
    <div className="w-full max-w-md mx-auto">
      {!isSubmitSuccessful && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

          <div>
            <input
              type="text"
              placeholder="Name"
              autoComplete="false"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-500"
              {...register("from_name", {
                required: "Name is required",
                maxLength: 80,
              })}
            />
            {errors.from_name && (
              <div className="text-red-600 text-sm">
                <small>{errors.from_name.message as string}</small>
              </div>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              autoComplete="false"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-500"
              {...register("email", {
                required: "Enter your email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && (
              <div className="text-red-600 text-sm">
                <small>{errors.email.message as string}</small>
              </div>
            )}
          </div>

          <div>
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-500"
              {...register("message", { required: "Enter your Message" })}
            />
            {errors.message && (
              <div className="text-red-600 text-sm">
                <small>{errors.message.message as string}</small>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-teal-500 rounded focus:outline-none focus:bg-teal-600"
          >
            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}

      {isSubmitSuccessful && isSuccess && (
        <div className="p-4 text-center border rounded-md border-green-500 text-green-500">
          <svg
            width="50"
            height="50"
            className="mx-auto"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>
          <h3 className="text-xl mt-3">Success</h3>
          <p>{Message}</p>
          <button
            className="mt-4 text-teal-500 focus:outline-none"
            onClick={() => reset()}
          >
            Go Back
          </button>
        </div>
      )}

      {isSubmitSuccessful && !isSuccess && (
        <div className="p-4 text-center border rounded-md border-red-500 text-red-500">
          <svg
            width="50"
            height="50"
            className="mx-auto"
            viewBox="0 0 97 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.3349C19.554 11.0015 24.6985 7.56401 30.3604 5.2188C36.0222 2.87358 42.0906 1.6665 48.2189 1.6665C60.5956 1.6665 72.4655 6.58316 81.2172 15.3349C89.9689 24.0866 94.8855 35.9565 94.8855 48.3333C94.8855 60.71 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5956 95 48.2189 95Z"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>
          <h3 className="text-xl mt-3">Error</h3>
          <p>{Message}</p>
          <button
            className="mt-4 text-teal-500 focus:outline-none"
            onClick={() => reset()}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
