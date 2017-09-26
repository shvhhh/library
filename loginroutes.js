import express from 'express';
const route=express.Router();
import api from "./apis";
const {libraryLogin,studentLogin} = api;
route.post('/:type/:name/:pass',(req,res)=>{
    if(req.params.type=='library')
    {   //console.log(req.body);
        libraryLogin(req.params.name,req.params.pass).then((object)=>{res.status(200).send(JSON.stringify(object))})
    }
    else
    {   //console.log(req.body);
        studentLogin(req.params.name,req.params.pass).then((object)=>{res.status(200).send(JSON.stringify(object))})
    }
});
route.post((req,res)=>res.status(803).send("insufficent arguments to procced"));
export default route;