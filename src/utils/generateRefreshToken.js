import  Jwt  from "jsonwebtoken";

// generate refresh token
const generateRefreshToken = (user) => {
  return jwt.sign(user, process.env.RefreshTokenSecretKey ,{expiresIn:process.env.RefreshTokenExpiryDate});
};

export default generateRefreshToken;
