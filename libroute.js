
import route from "./routes";
import api from "./apis";
const {bookReturn,bookIssue,createBook,createStudent}=api;


route.post("/issue/:id/:student",(req,res)=>{
    bookIssue(req.params.id,req.params.student).then((array)=>{res.send(array)});
});
route.post("/reutrn/:id",(req,res)=>{
    bookReturn(req.params.id).then((array)=>{res.send(array)});
});
route.post("/createstudent/:sname/:username/:pass",(req,res)=>{
    console.log('hello');
    createStudent(req.params.sname,req.params.username,req.params.pass).then((result)=>{
    
    
        res.send(JSON.stringify(result))});
});
route.post("/createbook/:title/:author/:number",(req,res)=>{
    createBook(req.params.title,req.params.author,req.params.number).then((notify)=>{res.send(JSON.stringify(notify))});
});


export default route;