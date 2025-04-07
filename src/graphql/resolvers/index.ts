import { onboardingQuizResolver } from './onboardingQuiz.resolver';
import { userResolvers } from './user.resolver';
import { authResolvers } from './auth.resolver';

export const resolvers = [userResolvers, onboardingQuizResolver, authResolvers];