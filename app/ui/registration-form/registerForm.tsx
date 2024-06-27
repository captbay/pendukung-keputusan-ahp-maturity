"use client";
import React, { useEffect, useState } from "react";
import { Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "@/app/icon/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/icon/EyeSlashFilledIcon";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { register } from "@/lib/authentication";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(new Set(["Select your jabatan"]));
  const { pending } = useFormStatus();
  const router = useRouter();

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [errorMessage, dispatch] = useFormState(register, undefined);

  useEffect(() => {
    if(errorMessage?.message.includes('Successfully registered. Please login.')){
      router.replace("/login");
    }
  }, [errorMessage]);

  return (
    <section className="rounded-lg bg-white p-12">
      <h1 className="text-2xl text-center mb-4">Register Your Account</h1>
      <form action={dispatch}>
        <Input
          id="name"
          name="name"
          type="text"
          label="Name"
          placeholder="Enter your name"
          variant="bordered"
          // className="mb-4"
        />
        <div
          className="flex items-end space-x-1 mb-4"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">
                {errorMessage.errors?.name}
              </p>
            </>
          )}
        </div>
        <Input
          id="jabatan"
          name="jabatan"
          type="text"
          label="Jabatan"
          placeholder="Enter your jabatan"
          variant="bordered"
          // className="mb-4"
        />
        <div
          className="flex items-end space-x-1 mb-4"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">
                {/* {errorMessage.errors?.jabatan} */}
              </p>
            </>
          )}
        </div>
        {/* <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="capitalize px-4 py-2 w-[260px] mb-[20px] rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              {selectedValue}
            </Button>
          </DropdownTrigger>
          <DropdownMenu 
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={(keys) => setSelectedKeys(new Set(Array.from(keys as Set<string>)))}
          >
            <DropdownItem key="office_boy">Office Boy</DropdownItem>
            <DropdownItem key="karyawan">Karyawan</DropdownItem>
            <DropdownItem key="supervisor">Supervisor</DropdownItem>
            <DropdownItem key="manager">Manager</DropdownItem>
            <DropdownItem key="director">Director</DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          variant="bordered"
          // className="mb-4"
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
          // className="mb-4"
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
        >
          Register
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
