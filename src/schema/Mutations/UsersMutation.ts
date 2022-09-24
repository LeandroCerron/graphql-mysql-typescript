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
      const userExists = await Users.find({
        where: {username}
      });
      if(userExists.length > 0) return {id: null, name: null, username: `Username already exists!`};

      const encryptedPassword = await bcrypt.hash(password, 10);

      const newUser = await Users.insert({
        name,
        username,
        password: encryptedPassword,
      });

      return {id: newUser.identifiers[0].id, ...args};
    } catch (error) {
      console.log(error);
    }
  }
};
