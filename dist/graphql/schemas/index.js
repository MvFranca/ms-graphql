"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const onboardingQuiz_schema_1 = require("./onboardingQuiz.schema");
const user_schema_1 = require("./user.schema");
exports.typeDefs = [user_schema_1.userSchema, onboardingQuiz_schema_1.quizOnboardingSchema];
