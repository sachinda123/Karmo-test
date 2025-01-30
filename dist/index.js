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
const express_1 = __importDefault(require("express"));
const functions_1 = require("./common/functions");
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { list1, list2 } = yield (0, functions_1.readFile)("./input.txt");
        const sumOfDifferences = list1.reduce((sum, num, index) => sum + Math.abs(num - list2[index]), 0);
        res.status(200).json({ sumOfDifferences });
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}));
app.listen(port, () => {
    console.log(`Server is Fire at https://localhost:${port}`);
});
