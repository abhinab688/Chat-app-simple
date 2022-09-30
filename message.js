const express=require('express');
const fs=require('fs');
const router=express.Router();

router.get('/message',(req,res,next)=>{
    fs.readFile('message.txt',(err,data)=>{
        if(err){
            console.log(err)
            data='no chats exist'
        }
        res.send(`${data}<form action="/message" method="POST" onSubmit="document.getElementById('username').value=localStorage
        .getItem('username')">
        <input type="text" name="message"><input id="username" name="username">
        <button type="submit">Send</button></form>`);  
        
    });
});
    

router.post('/message',(req,res,next)=>{
    fs.writeFile('message.txt',`${req.body.username}:${req.body.message}`,{flag:'a'}, (err)=>{
        err ? console.log(err) : res.redirect('/message');
    });  
    console.log(`${req.body.username} : ${req.body.message}`);
});

router.post('/',(req,res,next)=>{
    res.send(`<h1>${req.body.username} : ${req.body.message}</h1>`)
})
module.exports=router; 