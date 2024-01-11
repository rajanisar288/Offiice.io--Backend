import jwt from "jsonwebtoken";

const generateRefreshToken = async (user) => {
  try {
    const refreshToken = await jwt.sign(user, process.env.RefreshTokenSecretKey, {
      expiresIn: process.env.RefreshTokenExpiryDate
    });

    return refreshToken;
  } catch (error) {
    throw new Error(error);
  }
};

export default generateRefreshToken;
