"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
function makeDb() {
    return new client_1.PrismaClient();
}
exports.default = makeDb;
