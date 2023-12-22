import { Jwt } from "jsonwebtoken";

// Function to generate refresh token
const generateRefreshToken = (user) => {
  return jwt.sign({ userId: user.id }, refreshTokenSecret);
};

export default generateRefreshToken;
