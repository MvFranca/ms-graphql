import { prisma } from "../../database/prisma";
import { ModuleMatterContent } from "../../types/onboardingQuiz.types";
import { OnboardingQuizRepository } from "../interface/OnboardingQuizRepository";

export class OnboardingQuizImpl implements OnboardingQuizRepository {

    async getQuestions(): Promise<ModuleMatterContent[]> {
        return prisma.moduleMatterContent.findMany();
    }

}