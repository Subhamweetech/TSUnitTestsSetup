"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strict_1 = __importDefault(require("node:assert/strict"));
const Calculator_1 = __importDefault(require("../src/Calculator"));
describe("calculate", function () {
    it("add", function () {
        let result = Calculator_1.default.Sum(5, 2);
        strict_1.default.equal(result, 7);
    });
    it("substract", function () {
        let result = Calculator_1.default.Difference(5, 2);
        strict_1.default.equal(result, 3);
    });
});
