import bookdata from "./bookdata";

const {getlibrary, writebooks}=bookdata;
var array=[];
var j=0;
getlibrary((err,data)=>{
    for(var i=0;i<data.length;i++)
    {
        while(data[i].number)
        {   
            var obj={id:j,type:i,date:null,student:null};
            array.push(obj);
            j++;
            data[i].number--;
        }
    }
    writebooks(array);
});

