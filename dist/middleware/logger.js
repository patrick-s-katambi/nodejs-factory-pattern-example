"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adapt_request_1 = __importDefault(require("../helpers/adapt-request"));
const console_log_colors_1 = require("console-log-colors");
function loggerMiddleware(req, res, next) {
    const PORT = process.env.PORT;
    const httpRequest = (0, adapt_request_1.default)({ req });
    const method = httpRequest.method.toUpperCase();
    const path = httpRequest.path;
    const fullPathUrl = `http://localhost:${PORT}/${path}`;
    console.log(`${console_log_colors_1.color.yellow.bgBlueBright.bold.underline(method)} ${(0, console_log_colors_1.yellow)(fullPathUrl)}`);
    next();
}
exports.default = loggerMiddleware;
