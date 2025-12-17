"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunk = void 0;
function chunk(array, size) {
    var chunkedArr = [];
    var index = 0;
    while (index < array.length) {
        chunkedArr.push(array.slice(index, size + index));
        index += size;
    }
    return chunkedArr;
}
exports.chunk = chunk;
