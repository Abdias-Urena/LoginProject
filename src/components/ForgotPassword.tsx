"use client";
import Image from "next/image";
import { Toaster, toast } from "sonner";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <>
      <Toaster closeButton richColors position="bottom-center" />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-40 w-40"
            src="/bus1.gif"
            alt="Logistica y Transporte"
            width={100}
            height={100}
          />
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Forgot your password?
          </h2>
          <p className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Please enter the email you user to sign in
          </p>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div className="grid grid-flow-row sm:grid-flow-col gap-3">
              <div className="sm:col-span-4 justify-center">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Your Email
                </label>
                <div className="mt-2">
                  <input
                    id="firstname"
                    name="firstname"
                    type="firstname"
                    autoComplete="firstname"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 bg-primary text-sm font-semibold leading-6 text-light shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  toast.success("Success to send, please check your email");
                  setTimeout(() => {
                    window.location.href = "/ResetPass";
                  }, 1500);
                }}
              >
                Request Password Reset
              </button>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              <Link
                href="/"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Back to Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
