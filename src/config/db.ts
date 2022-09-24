import { createConnection } from "typeorm";
import { Users } from "../Entities/Users";
require('dotenv').config();

export const connectDB = async () => {
  await createConnection({
    type: process.env.DATABASE_TYPE as any,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT as any,
    host: process.env.DATABASE_HOST,
    entities: [Users],
    synchronize: true,
    ssl: false,
  });
};