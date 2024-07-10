"use server";

import prisma from "./prisma";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import { applyFormulaAhp } from "./formula";
import { criteriaData } from "@/app/utils/criteriaData";
import { title } from "process";

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

type AhpFormValue = {
  section_one: number[];
  section_two: number[];
  section_three: number[];
  section_four: number[];
  section_five: number[];
};

type UserAhpForm = {
  value: AhpFormValue;
  users: {
    name: string;
    email: string;
    jabatan: string | null;
  };
};

type User = {
  name: string;
  email: string;
  jabatan: string | null;
};

type Category = {
  id: string;
  key: string;
  value: string;
  createdAt: Date;
  updatedAt: Date;
};

type UserMaturity = {
  id: string;
  user_id: string;
  question_maturity_id: string;
  answer: boolean;
  evidence: any;
  is_acc: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type QuestionMaturity = {
  id: string;
  category_id: string;
  code: string;
  level: number;
  question: string;
  createdAt: Date;
  updatedAt: Date;
  category: Category;
  usersMaturity: UserMaturity;
};

type Question = {
  id: string;
  kode: string;
  question: string;
  ya: boolean;
  tidak: boolean;
  evidence: string | null;
};

type Detail = {
  level: number;
  recommend: string;
  question: Question[];
};

type QuestionPerSection = {
  title: string;
  category_id: string;
  detail: Detail[];
};

type RecommendMaturity = {
  id: string;
  category_id: string;
  level: number;
  recommend: string;
  createdAt: Date;
  updatedAt: Date;
};

export async function submitAhp(
  id: string,
  prevState: StateAhp,
  formData: FormData
) {
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
      success: false,
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

    await applyFormulaAhp();

    return {
      success: true,
      message: "Successfully submitted.",
    };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return {
          success: false,
          message: e.message,
        };
      }
      return {
        success: false,
        message: e.message,
      };
    }
  }
}

export async function getAhpData() {
  try {
    const data = await prisma.ahpResult.findMany({
      include: {
        category: true,
      },
      orderBy: {
        value: "desc",
      },
    });

    if (!data) {
      return {
        success: false,
        message: "Data not found",
      };
    }

    return {
      success: true,
      data: data,
      message: "Data found",
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

export async function getAllUser() {
  try {
    const data = await prisma.user.findMany({});

    if (!data) {
      return {
        success: false,
        message: "There is no user registered",
      };
    }

    return {
      success: true,
      data: data,
      message: "Data found",
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

export async function getAllUserFormAhp() {
  try {
    const data: UserAhpForm[] = (await prisma.usersAhpForm.findMany({
      select: {
        value: true,
        users: {
          select: {
            name: true,
            email: true,
            jabatan: true,
          },
        },
      },
    })) as unknown as UserAhpForm[];

    if (!data) {
      return {
        success: false,
        message: "There is no data found",
      };
    }

    // merge all of the value
    const combinedData = data.map((item) => [
      ...item.value.section_one,
      ...item.value.section_two,
      ...item.value.section_three,
      ...item.value.section_four,
      ...item.value.section_five,
    ]);

    // transposed the responden value
    const transposedData = combinedData[0].map((_, colIndex) =>
      combinedData.map((row) => row[colIndex])
    );
    const users = data.map((item) => item.users);

    // adding kriteria into users data to be used in the table header
    users.unshift({ name: "Kriteria", email: "", jabatan: "" });
    users.push({ name: "Kriteria", email: "", jabatan: "" });

    // flatten the array of criteria
    const flattenedCriteria = criteriaData.flat();

    // mapped the data that will fit on table
    const tableData = transposedData.map((row, index) => {
      const tableRow: { [key: string]: string } = {};
      const criteriaPair = flattenedCriteria[index];
      tableRow["kriteria1"] = criteriaPair.left;
      row.forEach((value, respondenIndex) => {
        tableRow[`responden${respondenIndex + 1}`] = value.toString();
      });
      tableRow["kriteria2"] = criteriaPair.right;
      return tableRow;
    });

    const result = {
      users: users,
      tableData: tableData,
    };

    return {
      success: true,
      data: result,
      message: "Data found",
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

export async function getPerUserFormAhp(id: string) {
  try {
    const data: UserAhpForm = (await prisma.usersAhpForm.findFirst({
      select: {
        value: true,
        users: {
          select: {
            name: true,
            email: true,
            jabatan: true,
          },
        },
      },
      where: {
        user_id: {
          equals: id,
        },
      },
    })) as unknown as UserAhpForm;

    if (!data) {
      return {
        success: false,
        message: "There is no data found",
      };
    }

    const combinedData = [
      ...data.value.section_one,
      ...data.value.section_two,
      ...data.value.section_three,
      ...data.value.section_four,
      ...data.value.section_five,
    ];

    // transpose the combinedData to be used in the table

    const user = [data.users];
    user.unshift({ name: "Kriteria", email: "", jabatan: "" });
    user.push({ name: "Kriteria", email: "", jabatan: "" });

    const flattenedCriteria = criteriaData.flat();

    const tableData = combinedData.map((row, index) => {
      const tableRow: { [key: string]: string } = {};
      const criteriaPair = flattenedCriteria[index];
      tableRow["kriteria1"] = criteriaPair.left;
      tableRow[`responden`] = row.toString();
      tableRow["kriteria2"] = criteriaPair.right;
      return tableRow;
    });

    const result = {
      users: user,
      tableData: tableData,
    };

    return {
      success: true,
      data: result,
      message: "Data found",
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

export async function resetAhpData() {
  try {
    await prisma.usersAhpForm.deleteMany({});
    await prisma.ahpResult.deleteMany({});

    return {
      success: true,
      message: "Successfully reset AHP data.",
    };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return {
          success: false,
          message: e.message,
        };
      }
      return {
        success: false,
        message: e.message,
      };
    }
  }
}

export async function getQuestionMaturity(idUser: string) {
  try {
    const data: QuestionMaturity[] = (await prisma.questionMaturity.findMany({
      include: {
        category: true,
        usersMaturity: true,
      },
    })) as unknown as QuestionMaturity[];

    if (!data) {
      return {
        success: false,
        message: "There is no data found",
      };
    }

    const sections: QuestionPerSection[] = [
      { title: "Plan Risk Management", category_id: "", detail: [] },
      { title: "Identify Risks", category_id: "", detail: [] },
      {
        title: "Perform Qualitative Risk Analysis",
        category_id: "",
        detail: [],
      },
      {
        title: "Perform Quantitative Risk Analysis",
        category_id: "",
        detail: [],
      },
      { title: "Plan Risk Responses", category_id: "", detail: [] },
      { title: "Implement Risk Responses", category_id: "", detail: [] },
      { title: "Monitor Risks", category_id: "", detail: [] },
    ];

    const sectionMap: { [key: string]: QuestionPerSection } = {
      plan_risk_management: sections[0],
      identify_risks: sections[1],
      perform_qualitative_risk_analysis: sections[2],
      perform_quantitative_risk_analysis: sections[3],
      plan_risk_responses: sections[4],
      implement_risk_responses: sections[5],
      monitor_risks: sections[6],
    };

    data.forEach((item) => {
      const section = sectionMap[item.category.key];
      if (section) {
        section.category_id = item.category_id;

        const detailIndex = section.detail.findIndex(
          (detail) => detail.level === item.level
        );

        if (detailIndex === -1) {
          section.detail.push({
            level: item.level,
            recommend: "",
            question: [
              {
                id: item.id,
                kode: item.code,
                question: item.question,
                ya:
                  item.usersMaturity != null
                    ? item.usersMaturity.answer
                      ? true
                      : false
                    : false,
                tidak:
                  item.usersMaturity != null
                    ? item.usersMaturity.answer
                      ? false
                      : true
                    : false,
                evidence:
                  item.usersMaturity != null
                    ? item.usersMaturity.evidence
                    : null,
              },
            ],
          });
        } else {
          section.detail[detailIndex].question.push({
            id: item.id,
            kode: item.code,
            question: item.question,
            ya:
              item.usersMaturity != null
                ? item.usersMaturity.answer
                  ? true
                  : false
                : false,
            tidak:
              item.usersMaturity != null
                ? item.usersMaturity.answer
                  ? false
                  : true
                : false,
            evidence:
              item.usersMaturity != null ? item.usersMaturity.evidence : null,
          });
        }
      }
    });

    await Promise.all(
      sections.map(async (section) => {
        await Promise.all(
          section.detail.map(async (detail) => {
            const allItems = data.filter(
              (item) =>
                item.category_id === section.category_id &&
                item.level === detail.level
            );
            const allAnsweredAndEvidence = allItems.every((item) =>
              item.usersMaturity
                ? item.usersMaturity.answer &&
                  item.usersMaturity.evidence !== null
                : false
            );
            const anyUnansweredOrNoEvidence = allItems.some((item) =>
              item.usersMaturity
                ? !item.usersMaturity.answer ||
                  item.usersMaturity.evidence === null
                : true
            );
            if (anyUnansweredOrNoEvidence) {
              detail.recommend = "Belum ada";
            } else if (allAnsweredAndEvidence) {
              const result = await getRecommendMaturity(
                detail.level,
                section.category_id
              );
              detail.recommend = result != undefined ? result : "Belum ada";
            } else {
              detail.recommend = ""; // Or any other default value you prefer
            }
          })
        );
      })
    );

    return {
      success: true,
      data: sections,
      message: "Data found",
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

async function getRecommendMaturity(level: number, category_id: string) {
  try {
    const data = (await prisma.recommendMaturity.findFirst({
      where: {
        level: level,
        category_id: category_id,
      },
    })) as unknown as RecommendMaturity;

    return data.recommend;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        console.log(e.message);
      }
      console.log(e.message);
    }
  }
}
