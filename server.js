//import api from "./apis.js";
import config from './config';
import express from 'express';
import stroute from './routes';
import loginroute from './loginroutes';
import libroute from './libroute';
import auth from './auth';
const {student,library}=auth;
const app = express();
console.log('hello');
//import fs from "fs";
//var { booksByAuth, bookById, allBooks, bookReturn, bookIssue} = api;
//app.set('view engine', 'ejs');
app.use("/login",loginroute);
console.log('hello');
app.use("/student",student,stroute);
console.log('hello');
app.use("/library",library,libroute);
console.log('hello');
var server = app.listen(config.httpport, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)

})


