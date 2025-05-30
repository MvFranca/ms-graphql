import { ModuleRepositoryImpl } from "../repositories/impl/ModuleRepositoryImpl";
import { OnboardingQuizImpl } from "../repositories/impl/OnboardinQuizImpl";
import { UserRepositoryImpl } from "../repositories/impl/UserRepositoryImpl";
import { ModuleRepository } from "../repositories/interface/ModuleRepository";
import { OnboardingQuizRepository } from "../repositories/interface/OnboardingQuizRepository";
import { UserRepository } from "../repositories/interface/UserRepository";
import { AuthService } from "../services/auth.service";
import { ModuleService } from "../services/module.service";
import { OnboardingQuizService } from "../services/onboardingQuiz.service";
import { UserService } from "../services/user.service";

const userRepository: UserRepository = new UserRepositoryImpl();
const userService = new UserService(userRepository);

const authService = new AuthService(userRepository);

const onboardingQuizRepository: OnboardingQuizRepository = new OnboardingQuizImpl();
const onboardingQuizService = new OnboardingQuizService(onboardingQuizRepository);

const moduleRepository: ModuleRepository = new ModuleRepositoryImpl();
const moduleService = new ModuleService(moduleRepository);

export const services  = {
    userService,
    onboardingQuizService,
    authService,
    moduleService 
};
