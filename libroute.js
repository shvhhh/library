
import route from "./routes";
import api from "./apis";
const {bookReturn,bookIssue,createBook,createStudent}=api;


route.post("/issue/:id/:student",(req,res)=>{
    bookIssue(req.params.id,req.params.student).then((array)=>{res.send(array)});
});
route.post("/reutrn/:id",(req,res)=>{
    bookReturn(req.params.id).then((array)=>{res.send(array)});
});
route.post("/createstudent",(req,res)=>{
    createStudent(req.body.sname,req.body.username,req.body.password).then((array)=>{res.send(JSON.stringify(array))});
});
route.post("/createbook",(req,res)=>{
    createBook(req.body.title,req.body.author,req.body.number).then((notify)=>{res.send(JSON.stringify(notify))});
});


export default route;