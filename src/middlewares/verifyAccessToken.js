import Jwt  from "jsonwebtoken";
import _userSchema from "./../models/user.model.js"


// Verify request if is it authorize!!
const authenticateToken = (req, res, next) => {
    const accessToken = req.header('Authorization') || req.cookie('accessToken');
    if (!accessToken) return res.status(401).json({status:false,message:'Unauthorized request'});
  
    jwt.verify(accessToken, process.env.AccessTokenSecretKey, async (err, user) => {
      if (err) return res.sendStatus(403);
      const validUser = await _userSchema.findById(user._id)
      if(!validUser) return res.status(401).json({status:false, message:'User is not valid'})
      req.user = validUser;
      next();
    });
  };

  export default authenticateToken