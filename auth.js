import apis from "./apis";
import jwt from "jsonwebtoken";
import config from "./config";

export default {
    student(req,res,next)
    {
       let tokn = req.headers['auth'];
       if(tokn)
       {
        jwt.verify(tokn, config.secret, function(err, decoded) {
            console.log(err);
            if(err!=null)
            {if(err.expiredAt)
                {res.send("session expired");
                return;}
                else
                {
                    res.status(403).send("invalid login");
                    return;
                }
            }
            
            next();
          });
          
          
       }
       else
       {
        res.status(200).send(JSON.stringify("please login first"));
       }
    },
    library(req,res,next)
    {
       let tokn = req.headers['auth'];
       if(tokn!='')
       {
        jwt.verify(tokn, config.secret, function(err, decoded) {
            if(err!=null)
            {if(err.expiredAt)
                {res.send(JSON.stringify("session expired"));
                return;}
                else
                {
                    res.status(403).send(JSON.stringify("invalid login"));
                    return;
                }
            }
            if(decoded.username==config.adminusername)
           { //console.log('hello');
            
            next();
            }
            else
            res.status(401).send(JSON.stringify("unauthrised user"));
          });
          
          
       }
       else
       {
        res.status(200).send(JSON.stringify("please login first"));
       }
    }
}