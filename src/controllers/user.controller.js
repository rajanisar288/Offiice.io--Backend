import _userSchema from "./../models/user.model/js"

const registerUser = async (req, res)=>{
    try {
        const {firstName ,lastName ,email,password,userType,role,profession,desc,gender,address:{},office:{}} = req.body
    } catch (error) {
        return res
        .status(501)
        .json({status:false,message:'error', error})
    }
}

export {
    registerUser
}