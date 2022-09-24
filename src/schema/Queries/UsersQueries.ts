import { GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { Users } from "../../Entities/Users";
import { UserType } from "../typeDefs/UserType";

export const GET_USERS = {
  type: new GraphQLList(UserType),
  resolve: async () => {
    return await Users.find();
  },
};

export const GET_USER = {
  type: new GraphQLList(UserType),
  args: {
      id: {type: GraphQLID}, 
      name: {type: GraphQLString},
      username: {type: GraphQLString}
  },
  async resolve(_: any, args: any) {
      const { id, name, username } = args;
      return await Users.find({
          where: [
              { id },
              { name },
              { username }
          ]
      });
  }
}
