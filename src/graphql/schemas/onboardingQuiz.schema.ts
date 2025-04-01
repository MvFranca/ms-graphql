import { gql } from "graphql-tag";

export const quizOnboardingSchema = gql`
  directive @defer on FIELD_DEFINITION
  directive @defer on FIELD
  directive @defer on FRAGMENT_SPREAD


  type ModuleMatterContent {
    id: ID!
    name: String!
    options: [String!]!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    questions: [ModuleMatterContent!]! @defer
  }
`;
