declare let require: any;
require("dotenv").config();
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import { connectDB } from "./config/db";

const main = async () => {
  try {
    const port = process.env.API_PORT || 3000;
    const app = express();
    await connectDB();

    app.use( "/graphql", graphqlHTTP({
        graphiql: true,
        schema,
      })
    );

    app.use((err: any, req: any, res: any, next: any) => {
      const { statusCode, message } = err;
      res.status(statusCode).json({
        status: "error",
        statusCode,
        message,
      });
    });

    console.clear();
    app.listen(port, () => {
      console.log(`Server listening, http://localhost:${port}/graphql`);
    });

  } catch (error) {
    console.log(error);
  }
};

main();
