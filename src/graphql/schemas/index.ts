import { quizOnboardingSchema } from './onboardingQuiz.schema';
import { userSchema } from './user.schema';
import { authSchema } from './auth.schema';
import { moduleSchema } from './module.schema';


export const typeDefs = [userSchema, quizOnboardingSchema, authSchema, moduleSchema];
