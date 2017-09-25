
var readline = require('readline');
export default function(cb){
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter User Name Email Password and Age respectivly sparated by spaces:", function(answer) {
  // TODO: Log the answer in a database
 answer = answer.replace(/  +/g, ' ');
 var data=answer.split(" ");
var obj={uname:data[0],
		email:data[1],
		password:data[2],
		age:parseInt(data[3])
		};
cb(obj);
  rl.close();
});
}