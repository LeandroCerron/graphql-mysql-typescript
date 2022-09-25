import { GraphQLID, GraphQLString } from "graphql";
import { Users } from "../../Entities/Users";
import { UserType } from "../typeDefs/UserType";
import bcrypt from "bcryptjs";

export const CREATE_USER = {
  // Type returned by the function
  type: UserType,
  // Arguments received in the fuction
  args: { name: {type: GraphQLString}, username: {type: GraphQLString}, password: {type: GraphQLString} },
  // Function to execute in this call
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

export const DELETE_USER = {
  // Type returned by the function
  type: GraphQLString,
  // Arguments received in the fuction
  args: { id: { type: GraphQLID } },
  // Function to execute in this call
  async resolve(_: any, { id }: any){
    try {
      let msg = `User ${id} deleted`;
      const userDeleted = await Users.delete(id);
      if(userDeleted.affected as any === 0) msg = `User ${id} doesn't exists`;
      return msg;
    } catch (error) {
      console.log(error);
    }
  }
};
