import  Jwt  from "jsonwebtoken";

// generate access token
const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.AccessTokenSecretKey, { expiresIn: process.env.AccessTokenExpiryDate });
};

export default generateAccessToken;
