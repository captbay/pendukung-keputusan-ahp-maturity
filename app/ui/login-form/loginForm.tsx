"use client";
import React, { useEffect, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { EyeFilledIcon } from "@/app/icon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/icon/EyeSlashFilledIcon";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { login } from "@/lib/authentication";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import LoadingScreen from "@/app/components/loading-screen/loadingScreen";

export default function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isLoading, setIsLoading] = useState(false);

  const { pending } = useFormStatus();
  const [errorMessage, dispatch] = useFormState(login, undefined);
  const router = useRouter();

  useEffect(() => {
    router.replace("/login");
  }, []);

  useEffect(() => {
    if(errorMessage){
      setIsLoading(false);
    }
  }, [errorMessage]);

  return (
    <section className="rounded-lg bg-white p-12">
      <h1 className="text-2xl text-center mb-4">Login Your Account</h1>
      <form action={dispatch}>
        <Input
          id="email"
          name="email"
          type="text"
          label="Email"
          placeholder="Enter your email"
          variant="bordered"
        />
        <div
          className="flex items-end space-x-1 mb-4"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">
                {errorMessage.errors?.email}
              </p>
            </>
          )}
        </div>
        <Input
          id="password"
          name="password"
          label="Password"
          variant="bordered"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
        <div
          className="flex items-end space-x-1 mb-4"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">
                {errorMessage.errors?.password}
              </p>
            </>
          )}
        </div>
        <Button
          type="submit"
          color="primary"
          className="w-full"
          aria-disabled={pending}
          onClick={() => setIsLoading(true)}
        >
          Login
        </Button>
        {errorMessage?.message && (
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <p className="text-sm text-red-500">{errorMessage?.message}</p>
              </>
            )}
          </div>
        )}
      </form>
      <p className="text-sm font-light text-center mt-4">
        Don&apos;t have an account?{" "}
        <Link
          href="/registration"
          className="font-medium text-primary hover:underline"
        >
          Register here
        </Link>
      </p>
      <Toaster 
        expand={true} 
        richColors 
        position="top-center"
      />
      <LoadingScreen 
        isLoading={isLoading}
        text="Loading..."
      />
    </section>
  );
}
