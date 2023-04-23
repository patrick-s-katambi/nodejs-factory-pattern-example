import { PrismaClient } from "@prisma/client";

export default function makeDb() {
  return new PrismaClient();
}
