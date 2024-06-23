"use server";

import { valueFromAhp } from "./definitions";
import prisma from "./prisma";
import { Prisma } from "@prisma/client";

export async function applyFormulaAhp() {
  try {
    const data = await prisma.usersAhpForm.findMany({
      select: {
        value: true,
      },
    });

    if (data) {
      const formValue: valueFromAhp[] = JSON.parse(JSON.stringify(data.values));
      // const formValue: valueFromAhp[] = data.map((item) => item.value);
      console.log(formValue);

      const temp_section_one_1: Array<number> = [];
      const temp_section_one_2: Array<number> = [];
      const temp_section_one_3: Array<number> = [];
      const temp_section_one_4: Array<number> = [];
      const temp_section_one_5: Array<number> = [];
      const temp_section_one_6: Array<number> = [];

      const temp_section_two_1: Array<number> = [];
      const temp_section_two_2: Array<number> = [];
      const temp_section_two_3: Array<number> = [];
      const temp_section_two_4: Array<number> = [];
      const temp_section_two_5: Array<number> = [];
      const temp_section_two_6: Array<number> = [];
      const temp_section_two_7: Array<number> = [];
      const temp_section_two_8: Array<number> = [];
      const temp_section_two_9: Array<number> = [];
      const temp_section_two_10: Array<number> = [];
      const temp_section_two_11: Array<number> = [];
      const temp_section_two_12: Array<number> = [];
      const temp_section_two_13: Array<number> = [];
      const temp_section_two_14: Array<number> = [];
      const temp_section_two_15: Array<number> = [];
      const temp_section_two_16: Array<number> = [];
      const temp_section_two_17: Array<number> = [];
      const temp_section_two_18: Array<number> = [];
      const temp_section_two_19: Array<number> = [];
      const temp_section_two_20: Array<number> = [];
      const temp_section_two_21: Array<number> = [];

      const temp_section_three_1: Array<number> = [];
      const temp_section_three_2: Array<number> = [];
      const temp_section_three_3: Array<number> = [];
      const temp_section_three_4: Array<number> = [];
      const temp_section_three_5: Array<number> = [];
      const temp_section_three_6: Array<number> = [];
      const temp_section_three_7: Array<number> = [];
      const temp_section_three_8: Array<number> = [];
      const temp_section_three_9: Array<number> = [];
      const temp_section_three_10: Array<number> = [];
      const temp_section_three_11: Array<number> = [];
      const temp_section_three_12: Array<number> = [];
      const temp_section_three_13: Array<number> = [];
      const temp_section_three_14: Array<number> = [];
      const temp_section_three_15: Array<number> = [];
      const temp_section_three_16: Array<number> = [];
      const temp_section_three_17: Array<number> = [];
      const temp_section_three_18: Array<number> = [];
      const temp_section_three_19: Array<number> = [];
      const temp_section_three_20: Array<number> = [];
      const temp_section_three_21: Array<number> = [];

      const temp_section_four_1: Array<number> = [];
      const temp_section_four_2: Array<number> = [];
      const temp_section_four_3: Array<number> = [];
      const temp_section_four_4: Array<number> = [];
      const temp_section_four_5: Array<number> = [];
      const temp_section_four_6: Array<number> = [];
      const temp_section_four_7: Array<number> = [];
      const temp_section_four_8: Array<number> = [];
      const temp_section_four_9: Array<number> = [];
      const temp_section_four_10: Array<number> = [];
      const temp_section_four_11: Array<number> = [];
      const temp_section_four_12: Array<number> = [];
      const temp_section_four_13: Array<number> = [];
      const temp_section_four_14: Array<number> = [];
      const temp_section_four_15: Array<number> = [];
      const temp_section_four_16: Array<number> = [];
      const temp_section_four_17: Array<number> = [];
      const temp_section_four_18: Array<number> = [];
      const temp_section_four_19: Array<number> = [];
      const temp_section_four_20: Array<number> = [];
      const temp_section_four_21: Array<number> = [];

      const temp_section_five_1: Array<number> = [];
      const temp_section_five_2: Array<number> = [];
      const temp_section_five_3: Array<number> = [];
      const temp_section_five_4: Array<number> = [];
      const temp_section_five_5: Array<number> = [];
      const temp_section_five_6: Array<number> = [];
      const temp_section_five_7: Array<number> = [];
      const temp_section_five_8: Array<number> = [];
      const temp_section_five_9: Array<number> = [];
      const temp_section_five_10: Array<number> = [];
      const temp_section_five_11: Array<number> = [];
      const temp_section_five_12: Array<number> = [];
      const temp_section_five_13: Array<number> = [];
      const temp_section_five_14: Array<number> = [];
      const temp_section_five_15: Array<number> = [];
      const temp_section_five_16: Array<number> = [];
      const temp_section_five_17: Array<number> = [];
      const temp_section_five_18: Array<number> = [];
      const temp_section_five_19: Array<number> = [];
      const temp_section_five_20: Array<number> = [];
      const temp_section_five_21: Array<number> = [];

      const section_one_bobot: Array<number> = [];
      const section_two_bobot: Array<number> = [];
      const section_three_bobot: Array<number> = [];
      const section_four_bobot: Array<number> = [];
      const section_five_bobot: Array<number> = [];

      formValue.forEach((value) => {
        temp_section_one_1.push(value.section_one[0]);
        temp_section_one_2.push(value.section_one[1]);
        temp_section_one_3.push(value.section_one[2]);
        temp_section_one_4.push(value.section_one[3]);
        temp_section_one_5.push(value.section_one[4]);
        temp_section_one_6.push(value.section_one[5]);

        temp_section_two_1.push(value.section_two[0]);
        temp_section_two_2.push(value.section_two[1]);
        temp_section_two_3.push(value.section_two[2]);
        temp_section_two_4.push(value.section_two[3]);
        temp_section_two_5.push(value.section_two[4]);
        temp_section_two_6.push(value.section_two[5]);
        temp_section_two_7.push(value.section_two[6]);
        temp_section_two_8.push(value.section_two[7]);
        temp_section_two_9.push(value.section_two[8]);
        temp_section_two_10.push(value.section_two[9]);
        temp_section_two_11.push(value.section_two[10]);
        temp_section_two_12.push(value.section_two[11]);
        temp_section_two_13.push(value.section_two[12]);
        temp_section_two_14.push(value.section_two[13]);
        temp_section_two_15.push(value.section_two[14]);
        temp_section_two_16.push(value.section_two[15]);
        temp_section_two_17.push(value.section_two[16]);
        temp_section_two_18.push(value.section_two[17]);
        temp_section_two_19.push(value.section_two[18]);
        temp_section_two_20.push(value.section_two[19]);
        temp_section_two_21.push(value.section_two[20]);

        temp_section_three_1.push(value.section_three[0]);
        temp_section_three_2.push(value.section_three[1]);
        temp_section_three_3.push(value.section_three[2]);
        temp_section_three_4.push(value.section_three[3]);
        temp_section_three_5.push(value.section_three[4]);
        temp_section_three_6.push(value.section_three[5]);
        temp_section_three_7.push(value.section_three[6]);
        temp_section_three_8.push(value.section_three[7]);
        temp_section_three_9.push(value.section_three[8]);
        temp_section_three_10.push(value.section_three[9]);
        temp_section_three_11.push(value.section_three[10]);
        temp_section_three_12.push(value.section_three[11]);
        temp_section_three_13.push(value.section_three[12]);
        temp_section_three_14.push(value.section_three[13]);
        temp_section_three_15.push(value.section_three[14]);
        temp_section_three_16.push(value.section_three[15]);
        temp_section_three_17.push(value.section_three[16]);
        temp_section_three_18.push(value.section_three[17]);
        temp_section_three_19.push(value.section_three[18]);
        temp_section_three_20.push(value.section_three[19]);
        temp_section_three_21.push(value.section_three[20]);

        temp_section_four_1.push(value.section_four[0]);
        temp_section_four_2.push(value.section_four[1]);
        temp_section_four_3.push(value.section_four[2]);
        temp_section_four_4.push(value.section_four[3]);
        temp_section_four_5.push(value.section_four[4]);
        temp_section_four_6.push(value.section_four[5]);
        temp_section_four_7.push(value.section_four[6]);
        temp_section_four_8.push(value.section_four[7]);
        temp_section_four_9.push(value.section_four[8]);
        temp_section_four_10.push(value.section_four[9]);
        temp_section_four_11.push(value.section_four[10]);
        temp_section_four_12.push(value.section_four[11]);
        temp_section_four_13.push(value.section_four[12]);
        temp_section_four_14.push(value.section_four[13]);
        temp_section_four_15.push(value.section_four[14]);
        temp_section_four_16.push(value.section_four[15]);
        temp_section_four_17.push(value.section_four[16]);
        temp_section_four_18.push(value.section_four[17]);
        temp_section_four_19.push(value.section_four[18]);
        temp_section_four_20.push(value.section_four[19]);
        temp_section_four_21.push(value.section_four[20]);

        temp_section_five_1.push(value.section_five[0]);
        temp_section_five_2.push(value.section_five[1]);
        temp_section_five_3.push(value.section_five[2]);
        temp_section_five_4.push(value.section_five[3]);
        temp_section_five_5.push(value.section_five[4]);
        temp_section_five_6.push(value.section_five[5]);
        temp_section_five_7.push(value.section_five[6]);
        temp_section_five_8.push(value.section_five[7]);
        temp_section_five_9.push(value.section_five[8]);
        temp_section_five_10.push(value.section_five[9]);
        temp_section_five_11.push(value.section_five[10]);
        temp_section_five_12.push(value.section_five[11]);
        temp_section_five_13.push(value.section_five[12]);
        temp_section_five_14.push(value.section_five[13]);
        temp_section_five_15.push(value.section_five[14]);
        temp_section_five_16.push(value.section_five[15]);
        temp_section_five_17.push(value.section_five[16]);
        temp_section_five_18.push(value.section_five[17]);
        temp_section_five_19.push(value.section_five[18]);
        temp_section_five_20.push(value.section_five[19]);
        temp_section_five_21.push(value.section_five[20]);
      });

      section_one_bobot.push(geometricMean(temp_section_one_1));
      section_one_bobot.push(geometricMean(temp_section_one_2));
      section_one_bobot.push(geometricMean(temp_section_one_3));
      section_one_bobot.push(geometricMean(temp_section_one_4));
      section_one_bobot.push(geometricMean(temp_section_one_5));
      section_one_bobot.push(geometricMean(temp_section_one_6));

      section_two_bobot.push(geometricMean(temp_section_two_1));
      section_two_bobot.push(geometricMean(temp_section_two_2));
      section_two_bobot.push(geometricMean(temp_section_two_3));
      section_two_bobot.push(geometricMean(temp_section_two_4));
      section_two_bobot.push(geometricMean(temp_section_two_5));
      section_two_bobot.push(geometricMean(temp_section_two_6));
      section_two_bobot.push(geometricMean(temp_section_two_7));
      section_two_bobot.push(geometricMean(temp_section_two_8));
      section_two_bobot.push(geometricMean(temp_section_two_9));
      section_two_bobot.push(geometricMean(temp_section_two_10));
      section_two_bobot.push(geometricMean(temp_section_two_11));
      section_two_bobot.push(geometricMean(temp_section_two_12));
      section_two_bobot.push(geometricMean(temp_section_two_13));
      section_two_bobot.push(geometricMean(temp_section_two_14));
      section_two_bobot.push(geometricMean(temp_section_two_15));
      section_two_bobot.push(geometricMean(temp_section_two_16));
      section_two_bobot.push(geometricMean(temp_section_two_17));
      section_two_bobot.push(geometricMean(temp_section_two_18));
      section_two_bobot.push(geometricMean(temp_section_two_19));
      section_two_bobot.push(geometricMean(temp_section_two_20));
      section_two_bobot.push(geometricMean(temp_section_two_21));

      section_three_bobot.push(geometricMean(temp_section_three_1));
      section_three_bobot.push(geometricMean(temp_section_three_2));
      section_three_bobot.push(geometricMean(temp_section_three_3));
      section_three_bobot.push(geometricMean(temp_section_three_4));
      section_three_bobot.push(geometricMean(temp_section_three_5));
      section_three_bobot.push(geometricMean(temp_section_three_6));
      section_three_bobot.push(geometricMean(temp_section_three_7));
      section_three_bobot.push(geometricMean(temp_section_three_8));
      section_three_bobot.push(geometricMean(temp_section_three_9));
      section_three_bobot.push(geometricMean(temp_section_three_10));
      section_three_bobot.push(geometricMean(temp_section_three_11));
      section_three_bobot.push(geometricMean(temp_section_three_12));
      section_three_bobot.push(geometricMean(temp_section_three_13));
      section_three_bobot.push(geometricMean(temp_section_three_14));
      section_three_bobot.push(geometricMean(temp_section_three_15));
      section_three_bobot.push(geometricMean(temp_section_three_16));
      section_three_bobot.push(geometricMean(temp_section_three_17));
      section_three_bobot.push(geometricMean(temp_section_three_18));
      section_three_bobot.push(geometricMean(temp_section_three_19));
      section_three_bobot.push(geometricMean(temp_section_three_20));
      section_three_bobot.push(geometricMean(temp_section_three_21));

      section_four_bobot.push(geometricMean(temp_section_four_1));
      section_four_bobot.push(geometricMean(temp_section_four_2));
      section_four_bobot.push(geometricMean(temp_section_four_3));
      section_four_bobot.push(geometricMean(temp_section_four_4));
      section_four_bobot.push(geometricMean(temp_section_four_5));
      section_four_bobot.push(geometricMean(temp_section_four_6));
      section_four_bobot.push(geometricMean(temp_section_four_7));
      section_four_bobot.push(geometricMean(temp_section_four_8));
      section_four_bobot.push(geometricMean(temp_section_four_9));
      section_four_bobot.push(geometricMean(temp_section_four_10));
      section_four_bobot.push(geometricMean(temp_section_four_11));
      section_four_bobot.push(geometricMean(temp_section_four_12));
      section_four_bobot.push(geometricMean(temp_section_four_13));
      section_four_bobot.push(geometricMean(temp_section_four_14));
      section_four_bobot.push(geometricMean(temp_section_four_15));
      section_four_bobot.push(geometricMean(temp_section_four_16));
      section_four_bobot.push(geometricMean(temp_section_four_17));
      section_four_bobot.push(geometricMean(temp_section_four_18));
      section_four_bobot.push(geometricMean(temp_section_four_19));
      section_four_bobot.push(geometricMean(temp_section_four_20));
      section_four_bobot.push(geometricMean(temp_section_four_21));

      section_five_bobot.push(geometricMean(temp_section_five_1));
      section_five_bobot.push(geometricMean(temp_section_five_2));
      section_five_bobot.push(geometricMean(temp_section_five_3));
      section_five_bobot.push(geometricMean(temp_section_five_4));
      section_five_bobot.push(geometricMean(temp_section_five_5));
      section_five_bobot.push(geometricMean(temp_section_five_6));
      section_five_bobot.push(geometricMean(temp_section_five_7));
      section_five_bobot.push(geometricMean(temp_section_five_8));
      section_five_bobot.push(geometricMean(temp_section_five_9));
      section_five_bobot.push(geometricMean(temp_section_five_10));
      section_five_bobot.push(geometricMean(temp_section_five_11));
      section_five_bobot.push(geometricMean(temp_section_five_12));
      section_five_bobot.push(geometricMean(temp_section_five_13));
      section_five_bobot.push(geometricMean(temp_section_five_14));
      section_five_bobot.push(geometricMean(temp_section_five_15));
      section_five_bobot.push(geometricMean(temp_section_five_16));
      section_five_bobot.push(geometricMean(temp_section_five_17));
      section_five_bobot.push(geometricMean(temp_section_five_18));
      section_five_bobot.push(geometricMean(temp_section_five_19));
      section_five_bobot.push(geometricMean(temp_section_five_20));
      section_five_bobot.push(geometricMean(temp_section_five_21));

      const matrix_one = createPairwiseComparisonMatrixSectionOne(
        section_one_bobot,
        4
      );
      const matrix_two = createPairwiseComparisonMatrix(section_two_bobot, 7);
      const matrix_three = createPairwiseComparisonMatrix(
        section_three_bobot,
        7
      );
      const matrix_four = createPairwiseComparisonMatrix(section_four_bobot, 7);
      const matrix_five = createPairwiseComparisonMatrix(section_five_bobot, 7);

      // print all section bobot
      console.log("section_one_bobot", section_one_bobot);
      printMatrix(matrix_one, "section_one_bobot");
      console.log("section_two_bobot", section_two_bobot);
      printMatrix(matrix_two, "section_two_bobot");
      console.log("section_three_bobot", section_three_bobot);
      printMatrix(matrix_three, "section_three_bobot");
      console.log("section_four_bobot", section_four_bobot);
      printMatrix(matrix_four, "section_four_bobot");
      console.log("section_five_bobot", section_five_bobot);
      printMatrix(matrix_five, "section_five_bobot");
    } else {
      throw new Error("No data found for user.");
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        throw new Error(e.message);
      }
      throw new Error(e.message);
    }
  }
}

/**
 * Function to calculate the geometric mean of an array of numbers.
 * @param numbers - Array of numbers.
 * @returns Geometric mean of the numbers, rounded to two decimal places.
 */
function geometricMean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Array must contain at least one number.");
  }

  // Ensure all numbers are non-negative
  for (const number of numbers) {
    if (number < 0) {
      throw new Error("Geometric mean is not defined for negative numbers.");
    }
  }

  // Calculate the product of all numbers
  const product = numbers.reduce((acc, num) => acc * num, 1);

  // Calculate the n-th root of the product
  const n = numbers.length;
  const geomean = Math.pow(product, 1 / n);

  // Round to two decimal places
  const roundedGeomean = Math.round(geomean * 100) / 100;

  return roundedGeomean;
}

function createPairwiseComparisonMatrixSectionOne(
  section: number[],
  length: number
): number[][] {
  const matrix: number[][] = [];
  for (let i = 0; i < length; i++) {
    const row: number[] = [];
    for (let j = 0; j < length; j++) {
      if (i == j) {
        row.push(1);
      } else if (i - j > 0) {
        if (j == 0) {
          row.push(1 / section[i - 1]);
        } else if (j == 1 || j == 2) {
          row.push(1 / section[i + j]);
        } else {
          row.push(1 / section[i]);
        }
      } else {
        if (i == 0) {
          row.push(section[j - 1]);
        } else if (i == 1 || i == 2) {
          row.push(section[i + j]);
        } else {
          row.push(section[j]);
        }
      }
    }
    matrix.push(row);
  }
  return matrix;
}

function createPairwiseComparisonMatrix(
  section: number[],
  length: number
): number[][] {
  const matrix: number[][] = [];
  for (let i = 0; i < length; i++) {
    const row: number[] = [];
    for (let j = 0; j < length; j++) {
      if (i == j) {
        row.push(1);
      } else if (i - j > 0) {
        if (j == 0) {
          row.push(1 / section[i - 1]);
        } else if (j == 1) {
          row.push(1 / section[i + j + 3]);
        } else if (j == 2) {
          row.push(1 / section[i + j + 6]);
        } else if (j == 3) {
          row.push(1 / section[i + j + 8]);
        } else if (j == 4) {
          row.push(1 / section[i + j + 9]);
        } else if (j == 5) {
          row.push(1 / section[i + j + 9]);
        } else {
          row.push(section[i]);
        }
      } else {
        if (i == 0) {
          row.push(section[j - 1]);
        } else if (i == 1) {
          row.push(section[i + j + 3]);
        } else if (i == 2) {
          row.push(section[i + j + 6]);
        } else if (i == 3) {
          row.push(section[i + j + 8]);
        } else if (i == 4) {
          row.push(section[i + j + 9]);
        } else if (i == 5) {
          row.push(section[i + j + 9]);
        } else {
          row.push(section[j]);
        }
      }
    }
    matrix.push(row);
  }
  return matrix;
}

function printMatrix(matrix: number[][], sectionName: string) {
  console.log(`Pairwise comparison matrix for ${sectionName}:`);
  matrix.forEach((row) => {
    console.log(row.map((value) => Math.round(value * 100) / 100).join("\t"));
  });
  console.log("\n");
}
