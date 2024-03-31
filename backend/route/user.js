const Router = require("express");
const router = Router();
const User = require("../model/user");
const jwt = require("jsonwebtoken");

const secretKey = "wertyuiolkjhgfdszxcvbnm";

router.post("/signup", async(req,res)=>{

    const { username,
    email,
    password } = req.body;

    try{
        const user = await User.create({
            username,
            email,
            password,
        })
        const token = jwt.sign({user:user._id}, secretKey,{expiresIn:"5d"})
        return res.status(200).json({token, user, message:"Signup successfull"})

    }catch(error){
        console.error("Error", error);
        return res.json({message:`Error while creating account ${error}` })
    }

})

router.post("/login", async(req,res)=>{
    const {email,password} = req.body;

    try{
        const user = await User.findOne({ email, password });
        const token = jwt.sign({userId:user._id},secretKey,{expiresIn:"5d"})
        return res.status(200).json({token,user, message:"Login successfull"})

        
    }catch(error){
        console.error("Error", error);
        return res.json({message:`${error}`})
    }
})

module.exports = router;