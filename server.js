
import config from './config';
import express from 'express';
import stroute from './routes';
import loginroute from './loginroutes';
import libroute from './libroute';
import auth from './auth';
import multer  from 'multer';
const upload = multer();
const {student,library}=auth;
const app = express();
console.log('hello');



app.use("/login",loginroute);
app.use("/student",student,stroute);
app.use("/library",library,libroute);
app.use(function(req, res, next){
	res.status(404);
	let erro="you have reached some where you shouldn't be";
	res.send(JSON.stringify(erro));
  });
var server = app.listen(config.httpport, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)

})


