import { Module } from "@prisma/client";
import { ModuleService } from "../../services/module.service";
import { isAuthenticated } from "./middlewares/isAuthenticated";

export const moduleResolvers = {
  Query: {
    getAllModules: isAuthenticated(
      async (
        parent: any,
        args: any,
        { moduleService }: { moduleService: ModuleService },
        info: any
      ) => {
        return await moduleService.getAllModules();
      }
    ),    
    getSubmodulesByModule: async (
      _: any,
      { moduleId }: { moduleId: string },
      { moduleService }: { moduleService: ModuleService }
    ) => {
      return await moduleService.getSubmodulesByModule(moduleId);
    },
  },
  Module: {
      submodules: async function* (parent: Module, args: any, context: any) {
        const { moduleService } = context;
        const submodules = await moduleService.getSubmodulesByModule(parent.id);
        for (const sub of submodules) {
          yield sub;
          
        }
      }
  },

  Mutation: {
    createModule: async (
      _: any,
      { input }: { input: { name: string; description: string } },
      { moduleService }: { moduleService: ModuleService }
    ) => {
      const { name, description } = input;
      return await moduleService.createModule(name, description);
    },
    createSubmodule: async (
      _: any,
      { input }: any,
      { moduleService }: { moduleService: ModuleService }
    ) => {
      return await moduleService.createSubmodule(input);
    },
    createItem: async (
      _: any,
      { input }: any,
      { moduleService }: { moduleService: ModuleService }
    ) => {
      return await moduleService.createItem(input);
    },
  },
};
