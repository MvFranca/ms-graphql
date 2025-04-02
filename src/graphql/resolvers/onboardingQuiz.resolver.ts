import { OnboardingQuizService } from "../../services/onboardingQuiz.service";

export const onboardingQuizResolver = {
  Query: {
    questions: async function* (_: any, __: any, { onboardingQuizService }: { onboardingQuizService: OnboardingQuizService }) {
      const questions = await onboardingQuizService.getQuestions();

      for (const question of questions) {
        yield question; 
      }
    },
  },
};
