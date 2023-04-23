"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const controller_1 = __importDefault(require("./modules/user/controller"));
const logger_1 = __importDefault(require("./middleware/logger"));
function makeApp() {
    const app = (0, express_1.default)();
    // middlewares
    app.use(body_parser_1.default.json());
    app.use(logger_1.default);
    // routes
    app.get("/users", controller_1.default);
    return app;
}
exports.default = makeApp;
