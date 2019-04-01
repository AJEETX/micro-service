const http = require('http')
const port = 4000
const service=require('./service')

const requestHandler =async (request, response) => {
    let result='';
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

console.log(`server is running on ${port}`)
})

module.exports=requestHandler;
