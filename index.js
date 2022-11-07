import express from "express";
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json())

const users = [];
let avatar;
const tweets = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    }
];



app.get("/tweets", (req, res) => {
    const feed = [];

    for(let i = tweets.length - 1; i  >= (tweets.length -10); i--){
        if(i < 0){
            break
        }
        feed.push(tweets[i])
    }


    res.send(feed)
});

app.post("/tweets", (req, res) =>{
    const newTweet = req.body;
    res.send(newTweet)

    tweets.push({...newTweet, avatar})
    console.log(tweets)

});

app.post("/sign-up", (req, res) =>{
    const newUser = req.body;
    avatar = newUser.avatar;
    res.send(newUser)

    users.push(newUser)

});



app.listen(5000);