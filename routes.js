import express from 'express';
const route=express.Router();
import api from "./apis";
const {createStudent,booksByAuth,bookById,bookByType,allBooks,bookReturn,bookIssue,studentLogin,libraryLogin}=api;

route.get("/",(req,res)=>{res.send(JSON.stringify(library))})
route.get("/author/:name",(req,res)=>{
    booksByAuth(req.params.name).then((array)=>{res.send(JSON.stringify(array))}); 
});
route.get("/id/:id",(req,res)=>{
    bookById(req.params.id).then((array)=>{res.send(JSON.stringify(array))});
});
route.get("/booktype/:type",(req,res)=>{
    bookByType(books,req.params.type).then((array)=>{res.send(JSON.stringify(array))});
});




export default route;