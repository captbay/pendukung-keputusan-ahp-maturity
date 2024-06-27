"use server";

import prisma from "./prisma";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import { applyFormulaAhp } from "./formula";

export type StateAhp = {
  errors?: {
    section_one?: string[];
    section_two?: string[];
    section_three?: string[];
    section_four?: string[];
    section_five?: string[];
  };
  message?: string | null;
};

// ahp
const FormAhpSchema = z.object({
  section_one: z.array(z.any()).nonempty(),
  section_two: z.array(z.any()).nonempty(),
  section_three: z.array(z.any()).nonempty(),
  section_four: z.array(z.any()).nonempty(),
  section_five: z.array(z.any()).nonempty(),
});

export async function submitAhp(
  id: string,
  prevState: StateAhp,
  formData: FormData
) {
  // const validatedFields = FormAhpSchema.safeParse({
  //   section_one: formData.get("section_one"),
  //   section_two: formData.get("section_two"),
  //   section_three: formData.get("section_three"),
  //   section_four: formData.get("section_four"),
  //   section_five: formData.get("section_five"),
  // });

  const parsedData = {
    section_one: JSON.parse(formData.get("section_one") as string),
    section_two: JSON.parse(formData.get("section_two") as string),
    section_three: JSON.parse(formData.get("section_three") as string),
    section_four: JSON.parse(formData.get("section_four") as string),
    section_five: JSON.parse(formData.get("section_five") as string),
  };

  const validatedFields = FormAhpSchema.safeParse(parsedData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Something went wrong.",
    };
  }

  try {
    const data = await prisma.usersAhpForm.findFirst({
      where: {
        user_id: {
          equals: id,
        },
      },
    });

    if (data) {
      await prisma.usersAhpForm.update({
        where: {
          id: data.id,
        },
        data: {
          value: {
            section_one: validatedFields.data.section_one,
            section_two: validatedFields.data.section_two,
            section_three: validatedFields.data.section_three,
            section_four: validatedFields.data.section_four,
            section_five: validatedFields.data.section_five,
          },
        },
      });
    } else {
      await prisma.usersAhpForm.create({
        data: {
          user_id: id,
          value: {
            section_one: validatedFields.data.section_one,
            section_two: validatedFields.data.section_two,
            section_three: validatedFields.data.section_three,
            section_four: validatedFields.data.section_four,
            section_five: validatedFields.data.section_five,
          },
        },
      });
    }

    applyFormulaAhp();

    return {
      message: "Successfully submitted.",
    };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return {
          message: e.message,
        };
      }
      return {
        message: e.message,
      };
    }
  }
}

export async function getAhpData() {
  const data = await prisma.ahpResult.findMany({
    include: {
      category: true
    }
  });

  if(!data){
    return {
      success: false,
      message: "Data not found",
    }
  }

  return {
    success: true,
    data: data,
    message: "Data found",
  };
}

export async function getAllUser() {
  const data = await prisma.user.findMany({});

  if(!data){
    return {
      success: false,
      message: "There is no user registered",
    }
  }

  return {
    success: true,
    data: data,
    message: "Data found",
  };
}