import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GREETING } from "./Queries/GreetingQuery";
import { CREATE_USER } from "./Mutations/UsersMutation";
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    greeting: GREETING
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    creteUser: CREATE_USER
  }
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
