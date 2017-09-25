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
            if(err.expiredAt)
            {
                res.send("session expired");
                return;
            }
            if(err)
            {
                res.sendStatus(403);
                return;
            }
            next(req,res,next);
          });
          
          
       }
    },
    library(req,res,next)
    {
       let tokn = req.headers['auth'];
       if(tokn)
       {
        jwt.verify(tokn, config.secret, function(err, decoded) {
            if(err.expiredAt)
            {
                res.send("session expired");
                return;
            }
            if(err)
            {
                res.sendStatus(403);
                return;
            }
            if(decoded==config.adminusername)
            next(req,res,next);
            else
            res.sendStatus(401);
          });
          
          
       }
    }
}