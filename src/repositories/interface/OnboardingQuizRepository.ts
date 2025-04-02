import { ModuleMatterContent } from "../../types/onboardingQuiz.types";

export interface OnboardingQuizRepository {
    getQuestions(): Promise<ModuleMatterContent[]>;
}