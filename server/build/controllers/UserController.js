import loginUserController from "./loginUserController";
import registerUserController from "./registerUserController";
class UserController {
    type;
    registerUserController;
    loginUserController;
    constructor() {
        this.type = "User";
        this.registerUserController = registerUserController;
        this.loginUserController = loginUserController;
    }
}
export default UserController;
