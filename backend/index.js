const express = require("express");
const {connectMongoDb} = require("./connect")
const PORT = 5000;
const marvel_data = require('./marvel_movie_json_Data')
const dc_data = require('./dc_movie_json_data.json')
const app = express();
const cors = require('cors');
const dcrouter = require("./route/dc")
const marvelrouter = require("./route/marvel")

app.use(cors());

connectMongoDb('mongodb://127.0.0.1:27017/project')
.then(()=>console.log("Mongodb Connected"))




app.get("/api/dc", (req, res)=>{
    return res.json(dc_data)
})

app.get("/api/marvel", (req,res)=>{
    return res.json(marvel_data)
})

app.use(express.json())

app.use("/movies",dcrouter);
app.use("/movies", marvelrouter)

app.listen(PORT,()=>console.log(`Server Started at PORT: ${PORT}`))