"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_1 = __importDefault(require("../src/Calculator"));
describe('calculate', function () {
    it('add', function () {
        let result = Calculator_1.default.Sum(5, 2);
        expect(result).toBe(7);
    });
    it('substract', function () {
        let result = Calculator_1.default.Difference(5, 2);
        expect(result).toBe(3);
    });
    it('multiply', function () {
        let res = Calculator_1.default.Multiply(2, 3);
        expect(res).toBe(6);
    });
});
