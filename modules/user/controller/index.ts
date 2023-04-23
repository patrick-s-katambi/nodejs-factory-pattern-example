import userRouteHandler from "../route-handler";
import makeUserController from "./factory";

const userController = makeUserController(userRouteHandler);
export default userController;
