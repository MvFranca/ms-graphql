"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const onboardingQuiz_resolver_1 = require("./onboardingQuiz.resolver");
const user_resolver_1 = require("./user.resolver");
exports.resolvers = [user_resolver_1.userResolvers, onboardingQuiz_resolver_1.onboardingQuizResolver];
