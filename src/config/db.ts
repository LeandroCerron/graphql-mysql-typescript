import { createConnection } from "typeorm";
import { Users } from "../Entities/Users";

export const connectDB = async () => {
  await createConnection({
    type: "postgres",
    username: "root",
    password: "123456",
    database: "test",
    port: 5432,
    host: "localhost",
    entities: [Users],
    synchronize: true,
    ssl: false,
  });
};
