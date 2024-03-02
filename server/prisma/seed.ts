import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

(async () => {
  try {
    await createUser();
    await prismaClient.$disconnect();
  } catch (error) {
    console.error(error);
    await prismaClient.$disconnect();
    process.exit(1);
  }
})();

async function createUser() {
  console.log("Start seeding...");

  await prismaClient.user.create({
    data: {
      email: "itayg43@gmail.com",
      firstName: "Itay",
      lastName: "Gur",
    },
  });

  console.log("Seeding finished");
}
