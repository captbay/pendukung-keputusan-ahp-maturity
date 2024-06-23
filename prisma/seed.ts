import prisma from "../lib/prisma";
import bcrypt from "bcrypt";

async function main() {
  // Create Users
  const users = await prisma.user.createMany({
    data: [
      {
        email: "admin@mail.com",
        password: await bcrypt.hash("password", 10),
        name: "Admin",
        jabatan: "Admin",
      },
      {
        email: "user_one@mail.com",
        password: await bcrypt.hash("password", 10),
        name: "User One",
      },
      {
        email: "user_two@mail.com",
        password: await bcrypt.hash("password", 10),
        name: "User Two",
      },
      {
        email: "user_three@mail.com",
        password: await bcrypt.hash("password", 10),
        name: "User Three",
      },
    ],
  });

  // Create Categories
  const category = await prisma.category.createMany({
    data: [
      {
        key: "plan_risk_management",
        value: "Plan Risk Management",
      },
      {
        key: "identify-risks",
        value: "Identify Risks",
      },
      {
        key: "perform_qualitative_risk_analysis",
        value: "Perform Qualitative Risk Analysis",
      },
      {
        key: "perform_quantitative_risk_analysis",
        value: "Perform Quantitative Risk Analysis",
      },
      {
        key: "plan_risk_responses",
        value: "Plan Risk Responses",
      },
      {
        key: "implement_risk_responses",
        value: "Implement Risk Responses",
      },
      {
        key: "monitor_risks",
        value: "Monitor Risks",
      },
    ],
  });

  //   get the ID
  const [user1, user2, user3, user4] = await prisma.user.findMany();
  const [
    category1,
    category2,
    category3,
    category4,
    category5,
    category6,
    category7,
  ] = await prisma.category.findMany();

  //   Create users-ahp-result
  const usersAhpForm = await prisma.usersAhpForm.createMany({
    data: [
      {
        user_id: user2.id,
        value: {
          section_one: [0.5, 2.0, 1.0, 4.0, 1.0, 1.0],
          section_two: [
            0.5, 2, 2, 1, 1, 1, 3, 1, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 1, 4, 4, 1,
            0.5, 3, 1,
          ],
          section_three: [
            4, 0.333333333, 0.333333333, 3, 0.5, 2, 0.333333333, 0.5, 1, 0.5, 1,
            3, 3, 0.5, 3, 2, 0.5, 1, 0.5, 2, 3,
          ],
          section_four: [
            3, 0.5, 0.5, 1, 0.5, 1, 0.5, 0.5, 2, 1, 1, 0.5, 2, 1, 1, 3, 0.5, 1,
            2, 1, 3,
          ],
          section_five: [
            2, 3, 3, 2, 2, 3, 0.5, 0.5, 1, 1, 1, 2, 1, 2, 1, 3, 3, 2, 0.5, 1, 2,
          ],
        },
      },
      {
        user_id: user3.id,
        value: {
          section_one: [0.5, 1, 1, 3, 3, 2],
          section_two: [
            0.5, 2, 2, 3, 3, 4, 5, 5, 3, 3, 3, 1, 1, 1, 1, 4, 3, 0.5, 1, 1, 1,
          ],
          section_three: [
            0.5, 2, 2, 1, 2, 3, 2, 2, 1, 2, 1, 2, 1, 1, 0.5, 2, 0.5, 1, 1, 2, 2,
          ],
          section_four: [
            0.5, 3, 3, 1, 1, 0.5, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 2, 2, 0.5, 0.5,
            0.5,
          ],
          section_five: [
            0.5, 1, 0.333333333, 0.5, 1, 0.5, 1, 1, 1, 0.5, 0.5, 2, 1, 0.5, 1,
            2, 2, 1, 1, 1, 1,
          ],
        },
      },
      {
        user_id: user4.id,
        value: {
          section_one: [3, 3, 3, 2, 3, 2],
          section_two: [
            3, 4, 4, 3, 3, 4, 3, 3, 4, 4, 4, 3, 4, 3, 4, 3, 3, 3, 3, 4, 4,
          ],
          section_three: [
            3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 3, 3, 3, 4, 4, 4, 3,
          ],
          section_four: [
            3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3,
          ],
          section_five: [
            2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3,
          ],
        },
      },
    ],
  });

  //   Create users-ahp-result
  const ahpResult = await prisma.ahpResult.createMany({
    data: [
      {
        category_id: category1.id,
        value: 0.2056,
      },
      {
        category_id: category2.id,
        value: 0.188,
      },
      {
        category_id: category3.id,
        value: 0.1544,
      },
      {
        category_id: category4.id,
        value: 0.1462,
      },
      {
        category_id: category5.id,
        value: 0.1075,
      },
      {
        category_id: category6.id,
        value: 0.1148,
      },
      {
        category_id: category7.id,
        value: 0.0835,
      },
    ],
  });

  console.log({ users, category, usersAhpForm, ahpResult });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
