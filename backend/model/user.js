const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
    username:{
        type:String,
        requird:true,
    },
    email:{
        type:String,
        requird:true,
        unique:true,
    },
    password:{
        type:String,
        requird:true,
    },
})

const User = model("User", UserSchema)

module.exports = User;