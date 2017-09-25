import fs from 'fs';
export default {
getlibrary:(cb) => {
 return fs.readFile("./library", 'utf8', (err, data) => {
            if (err) cb(err,null);
				cb(null,JSON.parse(data));         
            });
            
},
writelibrary: (array)=>{
 fs.writeFile ("./library", JSON.stringify(array), function(err) {
                if (err) throw err;
                console.log('complete');
})
},
getbooks:(cb) => {
    return fs.readFile("./books", 'utf8', (err, data) => {
               if (err) cb(err,null);
                   cb(null,JSON.parse(data));         
               });
               
   },
   writebooks: (array)=>{
    fs.writeFile ("./books", JSON.stringify(array), function(err) {
                   if (err) throw err;
                   console.log('complete');
   })
   }
};

