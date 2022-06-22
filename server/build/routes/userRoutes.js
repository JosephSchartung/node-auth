import { Router } from "express";
export class UserRouter {
    name;
    router;
    mainRoute;
    routeController;
    constructor(routeController) {
        this.name = "User";
        this.router = Router();
        this.mainRoute = "/api/users";
        this.routeController = routeController;
    }
    defineRoutes() {
        /*
            @route: POST /api/users/register
            @desc: route to register user.
            @access: public
        */
        this.router.post("/register", this.routeController.registerUserController);
        /*
            @route: POST /api/users/login
            @desc: login user and return jwt token.
            @access: public
        */
        this.router.post("/login", this.routeController.loginUserController);
    }
}
const router = Router();
export default router;
