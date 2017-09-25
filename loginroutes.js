import express from 'express';
const route=express.Router();
import api from "./apis";
const {libraryLogin,studentLogin} = api;
route.post('/:type/:name/:pass',(req,res)=>{
    if(req.params.type=='library')
    {   //console.log(req.body);
        libraryLogin(req.params.name,req.params.pass).then((object)=>{res.send(JSON.stringify(object))})
    }
    else
    {   //console.log(req.body);
        studentLogin(req.params.name,req.params.pass).then((object)=>{res.send(JSON.stringify(object))})
    }
})
export default route;