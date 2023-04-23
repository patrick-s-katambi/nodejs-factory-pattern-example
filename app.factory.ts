import express from "express";
import bodyParser from "body-parser";
import userController from "./modules/user/controller";
import loggerMiddleware from "./middleware/logger";

export default function makeApp() {
    const app = express();

    // middlewares
    app.use(bodyParser.json());
    app.use(loggerMiddleware);

    // routes
    app.all("/users", userController);

    return app;
}
