const express=require('express');
const fs=require('fs');
const bodyParser=require('body-parser');

const app=express();

const loginRoutes=require('./Routes/login');

const messageRoutes=require('./Routes/message');

app.use(bodyParser.urlencoded({extended: false}));

app.use(loginRoutes);

app.use(messageRoutes);

app.use((req,res,next)=>{
    res.send('<h1>thank you</h1>')
});

app.use('/message',(req,res,next)=>{
    fs.writeFile('username.txt',`${req.body.username}:${req.body.mesage}`)
})



app.listen(3000);