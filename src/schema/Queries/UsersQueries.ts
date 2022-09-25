import { GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { Users } from "../../Entities/Users";
import { UserType } from "../typeDefs/UserType";

export const GET_USERS = {
  // Type returned by the function
  type: new GraphQLList(UserType),
  // Function to execute in this call
  resolve: async () => {
    try {
      return await Users.find();
    } catch (error) {
      console.log(error);
    }
  },
};

export const GET_USER = {
  // Type returned by the function
  type: new GraphQLList(UserType),
  // Arguments received in the fuction
  args: {
      id: {type: GraphQLID}, 
      name: {type: GraphQLString},
      username: {type: GraphQLString}
  },
  // Function to execute in this call
  async resolve(_: any, args: any) {
    try {
      const { id, name, username } = args;
      return await Users.find({
          where: [
              { id },
              { name },
              { username }
          ]
      });
    } catch (error) {
      console.log(error);
    }
  }
}
