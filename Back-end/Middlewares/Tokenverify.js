const jwt=require('jsonwebtoken')

const protect=async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
    {
        try{
            token= req.headers.authorization.split(" ")[1]
            jwt.verify(token,process.env.key)
            next()
        }
        catch(error)
        {
          return  res.status(401).send("No token")
        }
    }
    if(!token)
    {
       return res.status(401).send("No token ")
    }
}

module.exports=protect