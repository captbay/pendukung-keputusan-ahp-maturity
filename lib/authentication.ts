"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import prisma from "./prisma";
import { z } from "zod";
import bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

// login
const FormLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function login(prevState: State | undefined, formData: FormData) {
  const validatedFields = FormLoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Something went wrong.",
      success: false,
    };
  }

  try {
    const result = await signIn("credentials", formData);
    if(result){
      return {
        message: "Successfully logged in.",
        success: true,
      };
    }
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CallbackRouteError":
          return {
            success: false,
            message: "Invalid credentials.",
          };
        default:
          return {
            success: false,
            message: "Something went wrong.",
          };
      }
    }
    throw error;
  }
}

// logout
export async function logout() {
  try {
    await signOut();
  } catch (error) {
    throw error;
  }
}

// register
const FormRegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(1),
  jabatan: z.string().min(1),
});

export async function register(prevState: State | undefined, formData: FormData) {
  const validatedFields = FormRegisterSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    name: formData.get("name"),
    jabatan: formData.get("jabatan"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Something went wrong.",
      success: false,
    };
  }

  const { email, password, name, jabatan } = validatedFields.data;

  try {
    await prisma.user.create({
      data: {
        email,
        password: await bcrypt.hash(password, 10),
        name,
        jabatan,
      },
    });

    return {
      message: "Successfully registered. Please login.",
      success: true,
    };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return {
          message: e.message,
          success: false,
        };
      }
      return {
        message: e.message,
        success: false,
      };
    }
  }
}
