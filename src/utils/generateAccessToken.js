import { Jwt } from "jsonwebtoken";

// Function to generate access token
const generateAccessToken = (user) => {
  return jwt.sign({ userId: user.id }, accessTokenSecret, { expiresIn: "30m" });
};

export default generateAccessToken;
