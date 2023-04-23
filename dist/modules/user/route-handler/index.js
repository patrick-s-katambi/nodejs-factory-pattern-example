"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../../db"));
const factory_1 = __importDefault(require("./factory"));
const userRouteHandler = (0, factory_1.default)({ database: db_1.default });
exports.default = userRouteHandler;
