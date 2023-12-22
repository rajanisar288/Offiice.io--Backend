import { Jwt } from "jsonwebtoken";

// Middleware to generate new access token using refresh token
const refreshToken = (req, res, next) => {
    const refreshToken = req.body.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
  
    jwt.verify(refreshToken, refreshTokenSecret, (err, user) => {
      if (err) return res.sendStatus(403);
      const accessToken = generateAccessToken({ id: user.userId });
      res.json({ accessToken });
    });
  };

  export default refreshToken