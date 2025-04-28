import { prisma } from "../../database/prisma";
import { ModuleRepository } from "../interface/ModuleRepository";
import { Module, Submodule, Item } from "@prisma/client";

export class ModuleRepositoryImpl implements ModuleRepository {
  async getAllModules(): Promise<Module[]> {
    return prisma.module.findMany({ include: { submodules: false } });
  }

  async getSubmodulesByModule(moduleId: string): Promise<Submodule[]> {
    return prisma.submodule.findMany({
      where: { moduleId },
      include: { items: true },
    });
  }

  async createModule(name: string, description: string): Promise<Module> {
    return prisma.module.create({
      data: { name, description },
    });
  }

  async createSubmodule(
    moduleId: string,
    title: string,
    description: string,
    order: number,
    isReview: boolean = false
  ): Promise<Submodule> {
    return prisma.submodule.create({
      data: {
        moduleId,
        title,
        description,
        order,
        isReview,
      },
    });
  }

  async createItem(
    submoduleId: string,
    type: string,
    difficulty: string,
    questionQty: number,
    points: number
  ): Promise<Item> {
    return prisma.item.create({
      data: {
        submoduleId,
        type,
        difficulty,
        questionQty,
        points,
      },
    });
  }
}
