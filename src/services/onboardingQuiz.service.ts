import { prisma } from "../database/prisma";

export class OnboardingQuizService {
  static async onboardingQuiz() {
    return prisma.moduleMatterContent.findMany();
  }
}
