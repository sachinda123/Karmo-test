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
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = void 0;
const fs_1 = require("fs");
const readFile = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const inputData = (0, fs_1.readFileSync)(path, "utf-8");
    const list1 = [];
    const list2 = [];
    inputData.split("\n").forEach((line) => {
        if (!line.trim())
            return;
        const [a, b] = line.split(/\s+/).map(Number);
        list1.push(a);
        list2.push(b);
    });
    list1.sort((a, b) => a - b);
    list2.sort((a, b) => a - b);
    return {
        list1,
        list2,
    };
});
exports.readFile = readFile;
