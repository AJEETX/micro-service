const httpservice=require('./httpservice')

module.exports=async (req,res)=>{

    let data='';

    if(req.method=='GET'){

        data=  await httpservice.httpGet('http://localhost:4001')

    }else{
        
        console.log(req.url)
        data= await httpservice.httpPost('localhost',{data:'testdata'})

    }

    return data;

}
