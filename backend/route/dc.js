const { Router } = require("express")
const router = Router();
const Dc = require("../model/dc");


router.post("/add/dc",async(req,res)=>{
    try{
        const {  Hero_Name, Real_Name, Superpower, First_Appearance,
             Image, Costume_Quirk, Catchphrase, Backstory, Most_Useless_Moment } = req.body;
         
        const DcMovies = await Dc.create({
            Hero_Name, Real_Name, Superpower, First_Appearance,
            Image, Costume_Quirk, Catchphrase, Backstory, Most_Useless_Moment,
        });
        
        return res.status(201).json(DcMovies)

    }catch(error){
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get("/dc/add", async(req,res)=>{
    try{
        const dcMovies = await Dc.find();
        return res.status(200).json(dcMovies);
    }catch(error){
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = router;