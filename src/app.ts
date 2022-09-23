require('dotenv').config();
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import {connectDB} from './config/db';
import { format } from "path";

const main = async () => {
    try {
        const app = express();
        await connectDB();

        app.use("/graphql", graphqlHTTP({
            graphiql: true,
            schema
          })
        );
        
        const port = process.env.API_PORT || 3000;
        console.clear();
        app.listen(port, () => {
          console.log(`Server listening, http://localhost:${port}/graphql`);
          console.log(process.env.DATABASE_TYPE,
            process.env.DATABASE_USERNAME,
            process.env.DATABASE_PASSWORD,
            process.env.DATABASE_NAME,
            process.env.DATABASE_PROT,
            process.env.DATABASE_HOST);
        });    
    } catch (error) {
        console.log(error);        
    }
}

main();
