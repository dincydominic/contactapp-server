//import json-server
const jsonServer=require('json-server')

//create json server application
const server=jsonServer.create()

//setup route for db.json
const router=jsonServer.router("db.json")

//return a middle wearw
const middleware=jsonServer.defaults()

//setup port number for server app
const port=process.env.PORT || 3000

//USE roiter and middlewear in server 
server.use(middleware)
server.use(router)

//to listen the server
server.listen(port,()=>{
    console.log(`contact server app started at port${port}`);
})