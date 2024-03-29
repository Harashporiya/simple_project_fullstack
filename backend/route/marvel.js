const { Router } = require("express")
const router = Router();
const Marvel = require("../model/marvel");

router.post("/add/marvel",async(req,res)=>{
    try{
        const {  Hero_Name, Real_Name, Superpower, First_Appearance,
             Image, Costume_Quirk, Catchphrase, Backstory, Most_Useless_Moment } = req.body;
         
        const MarvelMovies = await Marvel.create({
            Hero_Name, Real_Name, Superpower, First_Appearance,
            Image, Costume_Quirk, Catchphrase, Backstory, Most_Useless_Moment,
        });
        
        return res.status(201).json(MarvelMovies)

    }catch(error){
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get("/marvel/add", async(req,res)=>{
    try{
        const marvel = await Marvel.find();
        return res.status(200).json(marvel);
    }catch(error){
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = router;