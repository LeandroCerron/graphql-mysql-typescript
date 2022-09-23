import { GraphQLString } from "graphql";
import { Users } from "../../Entities/Users";
import { UserType } from "../typeDefs/UserType";
import bcrypt from "bcryptjs";

export const CREATE_USER = {
  type: UserType,
  args: {
    name: {type: GraphQLString},
    username: {type: GraphQLString},
    password: {type: GraphQLString},
  },
  async resolve(parent: any, args: any){
    try {
      const {name, username, password} = args;
      
      const encryptedPassword = await bcrypt.hash(password, 10);
      
      const result = await Users.insert({
        name,
        username,
        password: encryptedPassword,
      });
      
      return {id: result.identifiers[0].id, ...args};
    } catch (error) {
      console.log(error);
    }
  }
};
