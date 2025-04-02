import { OnboardingQuizImpl } from "../repositories/impl/OnboardinQuizImpl";
import { UserRepositoryImpl } from "../repositories/impl/UserRepositoryImpl";
import { OnboardingQuizRepository } from "../repositories/interface/OnboardingQuizRepository";
import { UserRepository } from "../repositories/interface/UserRepository";
import { OnboardingQuizService } from "../services/onboardingQuiz.service";
import { UserService } from "../services/user.service";

const userRepository: UserRepository = new UserRepositoryImpl();
const userService = new UserService(userRepository);

const onboardingQuizRepository: OnboardingQuizRepository = new OnboardingQuizImpl();
const onboardingQuizService = new OnboardingQuizService(onboardingQuizRepository);


export const services  = {
    userService,
    onboardingQuizService
};
