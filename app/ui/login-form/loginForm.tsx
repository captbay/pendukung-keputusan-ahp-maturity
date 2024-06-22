"use client";
import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { EyeFilledIcon } from "@/app/icon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/icon/EyeSlashFilledIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter();

  const handleLogin = () => {
    const dummyAdmin = {
      jabatan: "admin",
    }

    const dummyUser = {
      jabatan: "user",
    }

    if(email === "user"){
      Cookies.set("user", JSON.stringify(dummyUser))
      router.push('/dashboard');
    } else if(email === "admin"){
      Cookies.set("user", JSON.stringify(dummyAdmin))
      router.push('/dashboard-admin');
    }
  };

  return (
    <section className="rounded-lg bg-white p-12">
      <h1 className="text-2xl text-center mb-4">Login Your Account</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          variant="bordered"
          className="mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button 
          onPress={() => {handleLogin()}}
          type="submit" 
          color="primary" 
          className="w-full"
        >
          Login
        </Button>
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
