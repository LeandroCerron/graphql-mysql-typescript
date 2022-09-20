import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import {connectDB} from './config/db';

const main = async () => {
    try {
        const app = express();
        await connectDB();

        app.use("/graphql", graphqlHTTP({
            graphiql: true,
            schema
          })
        );
        
        const port = process.env.PORT || 3000;
        console.clear();
        app.listen(port, () => {
          console.log(`Server listening, http://localhost:${port}/graphql`);
        });    
    } catch (error) {
        console.log(error);        
    }
}

main();
