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
function divideByPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (b != 0) {
            resolve(a / b);
        }
        else {
            reject("can not divide ZERO");
        }
    });
}
function sumAndDeivide(a, b, c) {
    return __awaiter(this, void 0, void 0, function* () {
        const sumAB = a + b;
        const answer = yield divideByPromise(sumAB, c);
        return answer;
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const sumAndDeivideAnswer = yield sumAndDeivide(2, 4, 2);
        console.log("sumAndDeivideAnswer:", sumAndDeivideAnswer);
        yield sumAndDeivide(2, 4, 0);
    });
}
main();
