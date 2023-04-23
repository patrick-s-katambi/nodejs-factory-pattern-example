"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adapt_request_1 = __importDefault(require("../../../helpers/adapt-request"));
function makeUserController(handler) {
    return function userController(request, response) {
        const httpRequest = (0, adapt_request_1.default)({ req: request });
        handler(httpRequest)
            .then(({ headers, statusCode, data }) => response.set(headers).status(statusCode).send(data))
            .catch((e) => response.status(500).end());
    };
}
exports.default = makeUserController;
