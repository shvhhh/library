//import api from "./apis.js";
import config from './config';
import express from 'express';
import stroute from './routes';
import loginroute from './loginroutes';
import libroute from './libroutes';
import auth from './auth'
const app = express();
//import fs from "fs";
//var { booksByAuth, bookById, allBooks, bookReturn, bookIssue} = api;
//app.set('view engine', 'ejs');
app.use("/login",loginroute);
app.use("/student",auth.student,stroute);
app.use("/library",auth.library,libroute);
var server = app.listen(config.httpport, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)

})


