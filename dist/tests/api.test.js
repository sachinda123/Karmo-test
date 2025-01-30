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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../index");
describe("Test end point requested  ", () => {
    it("test actual file ", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.app).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.body.sumOfDifferences).toBe(2086478);
    }));
    it("test with small file diffrance 40 ", () => __awaiter(void 0, void 0, void 0, function* () {
        process.env.INPUT_FILE = "./src/tests/sample/input1.txt";
        const response = yield (0, supertest_1.default)(index_1.app).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.body.sumOfDifferences).toBe(40);
    }));
});
