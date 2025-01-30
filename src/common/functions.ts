import { readFileSync } from "fs";

export const readFile = async (path: string) => {
  const inputData = readFileSync(path, "utf-8");
  const list1: number[] = [];
  const list2: number[] = [];

  inputData.split("\n").forEach((line) => {
    if (!line.trim()) return;
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
};
