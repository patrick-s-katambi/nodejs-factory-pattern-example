"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adapt_response_1 = __importDefault(require("../../../helpers/adapt-response"));
function makeUserRouteHandler({ database }) {
    return function handler(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (httpRequest.method) {
                case "GET":
                    return getUsers(httpRequest, database);
                case "POST":
                    return addUser(httpRequest, database);
                default:
                    return (0, adapt_response_1.default)({ data: {}, headers: {}, message: "", statusCode: 200 });
            }
        });
    };
    function getUsers(httpRequest, database) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database.user.findMany();
            return (0, adapt_response_1.default)({
                data: users,
                headers: { "Content-Type": "application/json" },
                message: "success",
                statusCode: 200,
            });
        });
    }
    function addUser(httpRequest, database) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestBody = httpRequest.body;
            const { email, username } = requestBody;
            const user = yield database.user.create({ data: { email, username } });
            return (0, adapt_response_1.default)({
                data: user,
                headers: { "Content-Type": "application/json" },
                message: "user created successfully",
                statusCode: 201,
            });
        });
    }
}
exports.default = makeUserRouteHandler;
