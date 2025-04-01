import { onboardingQuizResolver } from './onboardingQuiz.resolver';
import { userResolvers } from './user.resolver';

export const resolvers = [userResolvers, onboardingQuizResolver];
