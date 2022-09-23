import { createConnection } from "typeorm";
import { Users } from "../Entities/Users";

export const connectDB = async () => {
  await createConnection({
    type: "postgres",
    username: "username",
    password: "password",
    database: "database",
    port: 1234,
    host: "localhost",
    entities: [Users],
    synchronize: false,
    ssl: false,
  });
};