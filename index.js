import express from "express";
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json())

const users = [];
let avatar;
const tweets = [

];



app.get("/tweets", (req, res) => {
    const feed = [];

    for(let i = tweets.length - 1; i  >= (tweets.length -10); i--){
        if(i < 0){
            break
        }
        feed.push({...tweets[i], avatar})
    }


    res.send(feed)
});

app.post("/tweets", (req, res) =>{
    const newTweet = req.body;
    res.send("OK")

    tweets.push(newTweet)


});

app.post("/sign-up", (req, res) =>{
    const newUser = req.body;
    avatar = newUser.avatar;
    res.send("OK")

    users.push(newUser)

});



app.listen(5000);