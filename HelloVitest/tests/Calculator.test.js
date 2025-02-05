"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const Calculator_1 = __importDefault(require("../src/Calculator"));
(0, vitest_1.describe)("calculate", function () {
    (0, vitest_1.it)("add", function () {
        let result = Calculator_1.default.Sum(5, 2);
        (0, vitest_1.expect)(result).toBe(7);
    });
    (0, vitest_1.it)("substract", function () {
        let result = Calculator_1.default.Difference(5, 2);
        (0, vitest_1.expect)(result).toBe(3);
    });
});
//# sourceMappingURL=Calculator.test.js.map