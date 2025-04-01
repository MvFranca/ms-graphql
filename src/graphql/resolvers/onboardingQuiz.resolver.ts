import { OnboardingQuizService } from "../../services/onboardingQuiz.service";

export const onboardingQuizResolver = {
  Query: {
    questions: async function* () {
      const questions = await OnboardingQuizService.onboardingQuiz();

      for (const question of questions) {
        yield question; 
      }
    },
  },
};
