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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../common/functions");
const path_1 = __importDefault(require("path"));
describe(" ReadFile function test", () => {
    test("Check file reder skip empty lines", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const filePath = path_1.default.join(process.cwd(), "src", "./tests/sample/input1.txt");
            const { list1, list2 } = yield (0, functions_1.readFile)(filePath);
            expect(list1.length).toBe(4);
        }
        catch (error) {
            console.log("error", error);
        }
    }));
    test("Check file reder array devide", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const filePath = path_1.default.join(process.cwd(), "src", "./tests/sample/input1.txt");
            const { list1, list2 } = yield (0, functions_1.readFile)(filePath);
            expect(list1).toEqual([10, 20, 50, 50]);
            expect(list2).toEqual([20, 30, 40, 60]);
        }
        catch (error) {
            console.log("error", error);
        }
    }));
    test("Check file reder 20000 inputs", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const filePath = path_1.default.join(process.cwd(), "src", "./tests/sample/input20000.txt");
            const { list1, list2 } = yield (0, functions_1.readFile)(filePath);
            expect(list1.length).toEqual(20000);
            expect(list2.length).toEqual(20000);
        }
        catch (error) {
            console.log("error", error);
        }
    }));
});
