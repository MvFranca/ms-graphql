import { OnboardingQuizRepository } from "../repositories/interface/OnboardingQuizRepository";

export class OnboardingQuizService {

  private onboardingQuiz: OnboardingQuizRepository;

  constructor(onboardingQuiz: OnboardingQuizRepository) {
    this.onboardingQuiz = onboardingQuiz;
  }

  async getQuestions() {
    return this.onboardingQuiz.getQuestions();
  }
}
