const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');

// Create an app that is a Feathers AND Express application
const app = express(feathers());

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST"
    );

    next();
});

app.post('/login',(req, res)=>{res.send('login')})
app.post('/register',(req, res)=>{res.send('register')})
app.post('/passreset',(req, res)=>{res.send('passreset')})



const server = app.listen(3030);
server.on('listening', () => console.log('Feathers application started'));