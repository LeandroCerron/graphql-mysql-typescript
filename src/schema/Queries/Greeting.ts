import { GraphQLInt, GraphQLString } from "graphql";

export const GREETING = {
  type: GraphQLString!,
  resolve: () => "String",
};