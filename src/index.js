import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 5501, () => {
      console.log(`server is running at por ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection error", err);
  });
