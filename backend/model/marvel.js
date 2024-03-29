const {Schema, model} = require("mongoose")

const marvelSchema = new Schema({
    Hero_Name:{
        type:String,
        required:true,
    },
    Real_Name:{
        type:String,
        required:true,
    },
    Superpower:{
        type:String,
        required:true,
    },
    First_Appearance:{
        type:String,
        required:false,
    },
    Image:{
        type:String,
        required:false,
    },
    Costume_Quirk:{
        type:String,
        required:false,
    },
    Catchphrase:{
        type:String,
        required:false,
    },
    Backstory:{
        type:String,
        required:false,
    },
    Most_Useless_Moment:{
        type:String,
        required:false,
    }
})

const Marvel = model("Marvel", marvelSchema)

module.exports = Marvel;