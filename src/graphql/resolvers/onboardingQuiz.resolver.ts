import { OnboardingQuizService } from "../../services/onboardingQuiz.service";
import { isAuthenticated } from "./middlewares/isAuthenticated";

export const onboardingQuizResolver = {
  Query: {
    questions: isAuthenticated(async function* (_: any, __: any, { onboardingQuizService }: { onboardingQuizService: OnboardingQuizService }) {
      const questions = await onboardingQuizService.getQuestions();

      for (const question of questions) {
        yield question;
      }
    }),
  },
};
