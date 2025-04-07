import { gql } from "graphql-tag";

export const authSchema = gql`
type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  role: Role!
}

enum Role {
  USER
  ADMIN
}

type AuthPayload {
  token: String!
}

type Mutation {
  signup(name: String!, email: String!, password: String!, role: Role!): AuthPayload
  signin(email: String!, password: String!): AuthPayload
}`
