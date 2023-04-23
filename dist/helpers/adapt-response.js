"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function adaptResponse(props) {
    return Object.assign(Object.assign({}, props), { data: props.data });
}
exports.default = adaptResponse;
