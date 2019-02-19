require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const app = express();
const { signup, login, getPlayer, logout } = require("./authController");
const { getClash, updateScore } = require("./gameController");

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
// app.delete('/aut/deleteplayer', deletePlayer)

//game data endpoints
app.get("/game/clash", getClash);
app.put("/game/score", updateScore);

//server port
app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`Listening on port ${process.env.EXPRESS_PORT}`);
});
