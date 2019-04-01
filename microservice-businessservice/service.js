module.exports=(req,res)=>{

    let result=service();

    console.log(` ${req.method}   ${result}`)

    return result;
}
const service=()=>{

    return ` ${new Date()}`;
}
