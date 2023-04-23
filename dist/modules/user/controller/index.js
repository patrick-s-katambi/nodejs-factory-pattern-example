"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const route_handler_1 = __importDefault(require("../route-handler"));
const factory_1 = __importDefault(require("./factory"));
const userController = (0, factory_1.default)(route_handler_1.default);
exports.default = userController;
