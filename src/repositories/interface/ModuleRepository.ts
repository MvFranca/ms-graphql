import { Module, Submodule, Item } from "@prisma/client"

export interface ModuleRepository {
  getAllModules(): Promise<Module[]>;
  getSubmodulesByModule(moduleId: string): Promise<Submodule[]>;
  createModule(name: string, description: string): Promise<Module>;
  createSubmodule(
    moduleId: string,
    title: string,
    description: string,
    order: number,
    isReview?: boolean
  ): Promise<Submodule>;
  createItem(
    submoduleId: string,
    type: string,
    difficulty: string,
    questionQty: number,
    points: number
  ): Promise<Item>;
}
