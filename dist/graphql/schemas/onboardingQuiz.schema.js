"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizOnboardingSchema = void 0;
const apollo_server_1 = require("apollo-server");
exports.quizOnboardingSchema = (0, apollo_server_1.gql) `

    type ModuleMatterContent {
        id: ID!
        name: String!
        options: [String!]!
        createdAt: String!
        updatedAt: String!
    }
    
    type Query {
        onboardingQuiz: [ModuleMatterContent!]!
    }
    
`;
