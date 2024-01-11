import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        default:'admin'
    },
    profession:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
        min:[15],
        max:[500]
    },
    profile_image:{
        type:String,
        default:'https://static.vecteezy.com/system/resources/previews/009/734/564/non_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg'
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        city:String,
        country:String,
        zipCode:Number,
        street:String

    },
    office:{
        companyName:String,
        companyWebsite:String,
        totalEmployees:{
            type:Number,
            default:0
        },
        companyFoundedIn:{
            type: Date,
            default:Date.now()
        }
    },
    refreshToken:{
        type:String,
        default:null
    }
},{ timestamps: true } )

const _userSchema = new mongoose.model("userSchema", userSchema , 'user_schema')
export default _userSchema