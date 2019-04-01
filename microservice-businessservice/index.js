const http = require('http')
const port = 4001
const service=require('./service')

const requestHandler =async (request, response) => {
    let result='';

    console.log(` body ${request.method}`)

    try{
        result =await service(request,response);

        response.end(result)
    }
    catch(err){
        return console.log('Error ' + err)
    }
  }
  
  const server = http.createServer(requestHandler)
  
  server.listen(port, (err) => {
    if (err) return console.log('something bad happened', err)
  
    console.log(`business-microservice running on ${port}`)
  })

module.exports=requestHandler;

