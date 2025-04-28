import { gql } from "graphql-tag";

export const moduleSchema = gql`

  directive @stream on FIELD
  directive @stream on FIELD_DEFINITION
  directive @stream on INLINE_FRAGMENT

  directive @defer on FIELD
  directive @defer on FIELD_DEFINITION
  directive @defer on INLINE_FRAGMENT

  type Module {
    id: ID!
    name: String!
    submodules: [Submodule!]! @stream @defer
    createdAt: String!
    updatedAt: String!
  }

  type Submodule  {
    id: ID!
    title: String!
    description: String!
    order: Int!           
    isReview: Boolean!
    items: [Item!]!  @stream @defer
    module: Module!
  }

  type Item {
    id: ID!
    type: String!
    difficulty: String!
    questionQty: Int!
    points: Int!
  }

  type UserModule {
    id: ID!
    userId: ID!
    submoduleId: ID!
    status: String!
    score: Int!
    createdAt: String!
  }

  input CreateModuleInput {
    name: String!
    description: String!
  }

  input CreateSubmoduleInput {
    moduleId: ID!
    title: String!
    description: String!
    order: Int!
    isReview: Boolean
  }

  input CreateItemInput {
    submoduleId: ID!
    type: String!
    difficulty: String!
    questionQty: Int!
    points: Int!
  }

  type Query {
    getAllModules: [Module!]!
    getSubmodulesByModule(moduleId: ID!): [Submodule!]!
    getAllSubmodulesStreamed: [Submodule!]! @stream
  }

  type Mutation {
    createModule(input: CreateModuleInput!): Module!
    createSubmodule(input: CreateSubmoduleInput!): Submodule!
    createItem(input: CreateItemInput!): Item!
  }
`;
