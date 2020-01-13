const express= require('express');
const bodyParser= require('body-parser');
const {graphqlExpress, graphiqlExpress}= require('graphql-server-express');

const PORT=3000;
const endPoint='/pizza_api'
let server=express();
const schema={}
//no es necesario ;

server.use(endPoint,bodyParser.json(),graphqlExpress({

    schema
}));

server.use('/graphiql',graphiqlExpress({
    endpointURL:endPoint,
}));

server.listen(PORT,() => {
   // console.log("Server Ejecutando");
    console.log('GraphQL API listen in http://localhost:'+ PORT + endPoint);
    console.log('GrapihQL API listen in http://localhost:'+ PORT +'/graphiql');
   

});


console.log("OK!!")