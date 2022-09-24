import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_USERS, GET_USER } from "./Queries/UsersQueries";
import { CREATE_USER } from "./Mutations/UsersMutation";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getUsers: GET_USERS,
    getUser: GET_USER
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
