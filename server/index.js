const path = require('path');
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const app = express();
const { signup, login, getPlayer, logout , deletePlayer} = require("./authController");
const { getFlash, getDecoy, updateScore, updateLuck, getRank, getStats, getDonate, calReset } = require("./gameController");



app.use(json());

//set up session
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
  })
);


app.use( express.static( `${__dirname}/../build` ) );

//set up massive for database connection
massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("Database Connected");
});

//auth endpoints
app.post("/auth/signup", signup);
app.post("/auth/login", login);
app.post("/auth/logout", logout);
app.get("/auth/getplayer", getPlayer);
app.delete('/auth/deleteplayer/:id', deletePlayer)

//game data endpoints
app.put("/game/score", updateScore);
app.put('/game/luck', updateLuck);
app.get("/game/flash", getFlash);
app.get("/game/decoy", getDecoy);
app.get("/game/rank", getRank);
app.get("/game/stats", getStats);
app.get('/game/donaterank', getDonate);
app.put("/game/calReset", calReset);

//server port
app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`Listening on port ${process.env.EXPRESS_PORT}`);
});

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});