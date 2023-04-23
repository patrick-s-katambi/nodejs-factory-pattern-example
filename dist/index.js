"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_factory_1 = __importDefault(require("./app.factory"));
const server = (0, app_factory_1.default)();
const PORT = Number(process.env.PORT || 8080);
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
