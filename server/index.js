require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const session =  require('express-session');
const massive = require('massive')
const { signup, login, getUser } = require('./authController')

//socket imports
const http = require('http');
const socketIO = require('socket.io');

const app = express();

//socket constants
const server = http.createServer(app);
const io = socketIO(server)

app.use(json())

//set up socket listeners
io.on('connection', socket =>{
    console.log('A user connected')
    
    socket.on('disconnect' , ()=>{
        console.log('a user disconeccted')
    })
})


//set up session
app.use(
    session({
        secret: process.env.SECRET,
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000*60*60*24*14
        }
    })
);

//set up massive for database connection
massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db);
    console.log('Database Connected')
});


//endpoints
app.post('/auth/signup', signup);
app.post('/auth/login', login);
app.get('/auth/getUser', getUser);

//server port
server.listen(process.env.EXPRESS_PORT, ()=>{
    console.log(`Listening on port ${process.env.EXPRESS_PORT}`)
});