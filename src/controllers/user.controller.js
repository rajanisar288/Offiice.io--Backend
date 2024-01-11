import _userSchema from "../models/user.model.js";
import { hashPassword, comparePassword } from "../utils/passwordChecker.js";
import generateRefreshToken from "../utils/generateRefreshToken.js";

//User Register logic
const registerUser = async (req, res) => {
  try {
    const user = await _userSchema.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(401)
        .json({ message: "user is already exit", status: false });
    } else {
      try {
        const { url } = req.cloudinary;
        const {
          firstName,
          lastName,
          email,
          password,
          role,
          profession,
          desc,
          gender,
          city,
          country,
          zipCode,
          street,
          companyName,
          companyWebsite,
          totalEmployees,
          companyFoundedIn,
        } = req.body;
        if (
          email == undefined ||
          ("" && firstName == undefined) ||
          ("" && password == undefined) ||
          ""
        )
          return res
            .status(401)
            .json({ message: "Fields are required", status: false });
        const generatedHashPassword = await hashPassword(password);
        const createNewUser = await new _userSchema({
          firstName,
          lastName,
          email,
          password: generatedHashPassword,
          role,
          profession,
          desc,
          profile_image: url,
          gender,
          address: {
            city,
            country,
            zipCode,
            street,
          },
          office: {
            companyName,
            companyWebsite,
            totalEmployees,
            companyFoundedIn,
          },
        });
        await createNewUser.save();
        const result = await _userSchema
          .findOne({ email: req.body.email })
          .select("-password");

        const refreshToken = await generateRefreshToken({ result });

        const updatedUser = await _userSchema.findOneAndUpdate(
          { email: email },
          { $set: { refreshToken: refreshToken } },
          { new: true }
        );
        return res.status(201).json({
          status: true,
          message: "Account created successfully",
          result: updatedUser,
          // refreshToken:refreshToken
        });
      } catch (error) {
        return res.status(501).json({
          message: "server or mongodb error",
          error: error,
        });
      }
    }
  } catch (error) {
    res.status(501).json({ status: false, error: error });
  }
};


//User Login logic 

export { registerUser };
