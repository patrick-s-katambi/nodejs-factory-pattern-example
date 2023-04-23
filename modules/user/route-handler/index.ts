import database from "../../../db";
import makeUserRouteHandler from "./factory";

const userRouteHandler = makeUserRouteHandler({ database });
export type TuserRouteHandler = typeof userRouteHandler;
export default userRouteHandler;
