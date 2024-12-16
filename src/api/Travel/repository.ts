import { PrismaClient } from "@prisma/client";
import type { User } from "@/api/user/userModel";

const prisma = new PrismaClient();

export class UserRepository {
  // Retrieves all users from the database
  async findAllAsync(): Promise<User[]> {
    return prisma.user.findMany();  // Fetches all users
  }

  // Retrieves a user by ID, including their parent and children if any
  async findByIdAsync(id: number): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
      include: { 
        parent: true,  // Include parent user
        children: true // Include children users
      }
    });
  }

  // Retrieves users who have a parent (could be modified for different use cases)
  async findByParentId(parentId: number): Promise<User[]> {
    return prisma.user.findMany({
      where: { parentId },
    });
  }
}
