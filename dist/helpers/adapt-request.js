"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function adaptRequest({ req }) {
    return Object.freeze({
        path: req.path,
        method: req.method,
        pathParams: req.params,
        queryParams: req.query,
        body: req.body,
    });
}
exports.default = adaptRequest;
