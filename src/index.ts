import supabase from "./supabase-config";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import path from "path";

const fs = require('fs');

// __dirname -> directory address where nodejs file is running
const schemaString = fs.readFileSync(path.join(__dirname, './schema.gql'), 'utf-8');
const schema = buildSchema(schemaString);

// @resolvers
const root = {
    getUser: ({id}: any, req: any)=>{
        // fetch the data from database
        if(id == '1'){
            return {
                id: '1',
                email: 'sharad@gmail.com',
                firstname: 'sharad',
                lastname: 'lastname'
            }
        }
    },
    createUser: ({input}: any, req: any)=>{
        // save the data to database
        return {id: 2, ...input}
    }
}

const app = express();

app.get('/', (req, res)=>{
    res.json({
        msg: "server running"
    })
})

// anything comes to /graphql goes to graphqlHTTP({})
// it will handel both get and post user
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

const port = 8080;
app.listen(port, ()=>{
    console.log('listen at port: ',port);
})

