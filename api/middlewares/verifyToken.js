import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/User.js'


const tokenVerify = (req, res, next) => {
   const authHeader = req.headers.authorization || req.headers.Authorization

   if(!authHeader){
    return res.status(400).json({
        message: "Unauthorized User"
    })
   }

   const token = authHeader.split(" ")[1];
   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, asyncHandler(async(err, decode) => {
      if(err){
        return res.status(400).json({message: "Invalid token"})
      }
      const me = await User.findOne({email: decode.email}).select("-password")

      req.me = me;
      next()
   }))

}

export default tokenVerify;