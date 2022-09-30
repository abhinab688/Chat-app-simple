const express=require('express');

const router=express.Router();

router.get('/login',(req,res,next)=>{
    res.send(`<form action="/username" method="POST" onSubmit="localStorage.setItem('username',
    document.getElementById('username').value)"><input id="username" type="text" name="username">
    <button type="submit">Login</button></form>`);    
});

router.post('/username',(req,res,next)=>{
    res.redirect('/message')
});

module.exports=router; 