import { Router } from "express";
import { UserController } from "../controllers/UserController";
import {body}from 'express-validator'
import { UserValidator } from "../validators/UserValidator";
import { GlobalMiddleware } from "../middlewares/GlobalMIddleware";

class UserRouter {
    public router : Router;

    constructor(){
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
        
    }
    getRoutes(){
        
    }

    postRoutes(){
        this.router.post('/signUp',UserValidator.signUp(),GlobalMiddleware.checkError,UserController.signUp);

    }

    patchRoutes(){
        this.router.patch('/verify',UserValidator.verifyUser(),GlobalMiddleware.checkError,UserController.verify);

    }

    deleteRoutes(){

    }
}

export default new UserRouter().router;