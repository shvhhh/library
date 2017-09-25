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
                    res.sendStatus(403);
                    return;
                }
            }
            
            next();
          });
          
          
       }
    },
    library(req,res,next)
    {
       let tokn = req.headers['auth'];
       if(tokn)
       {
        jwt.verify(tokn, config.secret, function(err, decoded) {
            if(err!=null)
            {if(err.expiredAt)
                {res.send("session expired");
                return;}
                else
                {
                    res.sendStatus(403);
                    return;
                }
            }
            if(decoded.username==config.adminusername)
           { console.log('hello');
            
            next();
        }
            else
            res.sendStatus(401);
          });
          
          
       }
    }
}