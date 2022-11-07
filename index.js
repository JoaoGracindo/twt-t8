import express from "express";
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json())

const usuarios = [];
const tweets = [];



app.get("/tweets", (req, res) => {
    const feed = [];

    for(let i = tweets.length - 1; i  >= (tweets.length -10); i--){
        feed.push(tweets[i])
    }


    res.send(feed)
});

app.post("/tweets", (req, res) =>{
    const {username, tweet} = req.body;
    const newTweet = {username, tweet};

    tweets.push(newTweet)

});

app.post("/sign-up", (req, res) =>{
    const {username, avatar} = req.body;
    const newReceita = {username, avatar};

    usuarios.push(newReceita)

});



app.listen(5000);