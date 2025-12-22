import { prismaClient } from "../../prisma/prisma";
import { CreateCategoryInput } from "../dtos/input/category.input";

export class CategoryService {

  async createCategory(data: CreateCategoryInput, authorId: string) {
    return prismaClient.category.create({
      data: {
        title: data.title,
        description: data.description,
        iconName: data.iconName,
        iconColor: data.iconColor,
        authorId: authorId
      }
    });
  }
}