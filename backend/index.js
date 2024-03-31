const express = require("express");
const { connectMongoDb } = require("./connect")
const PORT = 5000;
const marvel_data = require('./marvel_movie_json_Data')
const dc_data = require('./dc_movie_json_data.json')
const app = express();
const cors = require('cors');
const dcrouter = require("./route/dc")
const marvelrouter = require("./route/marvel")
const User = require("./route/user");
const userData = require("./model/user");
const jwt = require("jsonwebtoken");

const secretKey = "wertyuiolkjhgfdszxcvbnm";

app.use(cors());

connectMongoDb('mongodb://127.0.0.1:27017/project')
    .then(() => console.log("Mongodb Connected"))




app.get("/api/dc", (req, res) => {
    return res.json(dc_data)
})

app.get("/api/marvel", (req, res) => {
    return res.json(marvel_data)
})

app.use(express.json())

app.use("/movies", dcrouter);
app.use("/movies", marvelrouter)
app.use("/user", User);


app.get("/user/data", async (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: "Unautorized" });
    }
    try {
        const decoded = jwt.verify(token, secretKey);
        const { email, username } = await userData.findOne({ _id: decoded.userId });
        //console.log(username);
        res.json({ email: email, username: username })
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" })
    }
})

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`))