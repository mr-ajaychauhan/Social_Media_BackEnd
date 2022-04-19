import bodyParser = require('body-parser');
import * as express from 'express';
import { STATUS_CODES } from 'http';
import { getEnvironmentVariable } from './environments/env';
import UserRouter from './Routers/UserRouter';
const mongoose = require("mongoose");

export class Server {

    public app: express.Application = express();

    constructor() {
        this.setConfigratons();
        this.setRoutes();
        this.set404Handler()
        this.handleErrors()
    }


    setConfigratons() {
        this.setMongodb();
        this.configureBodyParser();
    }

    setMongodb() {
        const dburl = getEnvironmentVariable().db_url;

        mongoose.connect(dburl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        }).then(() => {
            console.log('mongodb are connceted');

        }).catch((err: any) => {
            console.log(err);

        });
    }

    configureBodyParser(){
        this.app.use(bodyParser.urlencoded({extended:true}));
    }


    setRoutes() {
        this.app.use('/api/user/',UserRouter);
    }

    set404Handler(){
        this.app.use((req,res) => {
            res.status(404).json({
                message:'Page Not Found',
                status_code:404
            })
        });  
    }
    handleErrors(){
        this.app.use((error,req,res,next) =>{
            const errorStatus =req.errorStatus || 500;
            res.status(errorStatus).json({
                message :error.message || 'Somthing Went Wrong. PLease Try Again',
                status_code :errorStatus
            });
        });
    }
}