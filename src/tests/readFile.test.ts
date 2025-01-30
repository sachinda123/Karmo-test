import { readFile } from "../common/functions";
import path from "path";

describe(" ReadFile function test", () => {
  test("Check file reder skip empty lines", async () => {
    try {
      const filePath = path.join(process.cwd(), "src", "./tests/sample/input1.txt");
      const { list1, list2 } = await readFile(filePath);
      expect(list1.length).toBe(4);
    } catch (error) {
      console.log("error", error);
    }
  });
  test("Check file reder array devide", async () => {
    try {
      const filePath = path.join(process.cwd(), "src", "./tests/sample/input1.txt");
      const { list1, list2 } = await readFile(filePath);
      expect(list1).toEqual([10, 20, 50, 50]);
      expect(list2).toEqual([20, 30, 40, 60]);
    } catch (error) {
      console.log("error", error);
    }
  });
  test("Check file reder 20000 inputs", async () => {
    try {
      const filePath = path.join(process.cwd(), "src", "./tests/sample/input20000.txt");
      const { list1, list2 } = await readFile(filePath);
      expect(list1.length).toEqual(20000);
      expect(list2.length).toEqual(20000);
    } catch (error) {
      console.log("error", error);
    }
  });
});
