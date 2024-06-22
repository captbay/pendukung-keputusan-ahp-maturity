"use client";
import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { EyeFilledIcon } from "@/app/icon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/icon/EyeSlashFilledIcon";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { login } from "@/lib/authentication";

export default function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const { pending } = useFormStatus();
  const [errorMessage, dispatch] = useFormState(login, undefined);

  return (
    <section className="rounded-lg bg-white p-12">
      <h1 className="text-2xl text-center mb-4">Login Your Account</h1>
      <form action={dispatch}>
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          variant="bordered"
          className="mb-4"
        />
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
          className="mb-4"
        />
        <Button
          type="submit"
          color="primary"
          className="w-full"
          aria-disabled={pending}
        >
          Login
        </Button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
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
    </section>
  );
}
