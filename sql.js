var mysql      = require('mysql');
import config from './config';
/*import bookdata from "./bookdata"; 
const { getlibrary, writelibrary ,getbooks, writebooks} = bookdata;
var library=[];
var books=[];
getlibrary((err,data)=>{if(err) throw err;library=data;})
getbooks((err,data)=>{if(err) throw err;books=data;})


var con = mysql.createConnection('mysql://root:12345@192.168.0.244/hemantlibrary?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700');
setTimeout(()=>{
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  for(var i=0;i<books.length;i++)
 { var sql = "INSERT INTO books (type) VALUES ("+books[i].type +")";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}
})},2000)*/

export default mysql.createPool({
  connectionLimit : config.sqlconnectionLimit,
  host            : config.sqlhost,
  user            : config.sqluser,
  password        : config.sqlpassword,
  database        : config.sqldatabase
});


 