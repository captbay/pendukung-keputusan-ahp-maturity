"use client";
import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { EyeFilledIcon } from "@/app/icon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/icon/EyeSlashFilledIcon";
import Link from "next/link";

export default function RegisterForm() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <section className="rounded-lg bg-white p-8">
      <h1 className="text-2xl text-center mb-4">Register Your Account</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          label="Name"
          placeholder="Enter your name"
          variant="bordered"
          className="mb-4"
        />
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          variant="bordered"
          className="mb-4"
        />
        <Input
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
        <Button type="submit" color="primary" className="w-full">
          Register
        </Button>
      </form>
      <p className="text-sm font-light text-center mt-4">
        Have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-primary hover:underline"
        >
          Login
        </Link>
      </p>
    </section>
  );
}
