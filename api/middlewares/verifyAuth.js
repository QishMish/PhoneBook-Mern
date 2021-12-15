const jwt = require('jsonwebtoken');


const verifyAuth = (req,res,next)=>{
    const accesToken = req.cookies.jwt;
    if(accesToken){
       
        jwt.verify(accesToken, process.env.SECRET_KEY, (err, decodedToken) => {
            if (err) {
              console.log(err.message);
            } else {
             
              req.user = decodedToken;
              next();
              
            }
        });
    } else {
        return res.status(401).json('you are not authenticated user')
      }
}
module.exports = { verifyAuth};