import { ModuleRepository } from "../repositories/interface/ModuleRepository";

export class ModuleService {
  constructor(private readonly moduleRepository: ModuleRepository) {}

  getAllModules() {
    return this.moduleRepository.getAllModules();
  }

  getSubmodulesByModule(moduleId: string) {
    return this.moduleRepository.getSubmodulesByModule(moduleId);
  }

  createModule(name: string, description: string) {
    return this.moduleRepository.createModule(name, description);
  }

  createSubmodule(input: {
    moduleId: string;
    title: string;
    description: string;
    order: number;
    isReview?: boolean;
  }) {
    return this.moduleRepository.createSubmodule(
      input.moduleId,
      input.title,
      input.description,
      input.order,
      input.isReview ?? false
    );
  }

  createItem(input: {
    submoduleId: string;
    type: string;
    difficulty: string;
    questionQty: number;
    points: number;
  }) {
    return this.moduleRepository.createItem(
      input.submoduleId,
      input.type,
      input.difficulty,
      input.questionQty,
      input.points
    );
  }
}
