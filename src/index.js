const {ApolloServer, gql}=require("apollo-server")
const fs=require('fs')
const path=require("path")
const {resolvers}=require("./resolvers")
const { MoviesDataSource } = require("./datasource")


const schemaString=fs.readFileSync(path.join(__dirname,"schema.graphql"),"utf8")
const typeDefs=gql(schemaString)

const server=new ApolloServer({
    typeDefs,
    resolvers,
    context:({req})=>{
        const authorization=req.headers.authorization
        return {
            userPassword:authorization
        }
    },
    dataSources:()=>({
        moviesDataSource: new MoviesDataSource()
    })
})

server.listen(2000,()=>{
    console.log("Server has been started on port 2000")
})


