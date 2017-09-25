import express from 'express';
const route=express.Router();
import api from "./apis";
const {libraryLogin,studentLogin} = api;
route.post('/:type',(req,res)=>{
    if(req.params.type=='library')
    {
        libraryLogin(req.body.username,req.body.password).than((object)=>{res.send(JSON.stringify(object))})
    }
    else
    {
        studentLogin(req.body.username,req.body.password).than((object)=>{res.send(JSON.stringify(object))})
    }
})
export default route;