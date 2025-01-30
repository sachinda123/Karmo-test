import request from "supertest";
import { app } from "../index";

describe("Test end point requested  ", () => {
  it("test actual file ", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body.sumOfDifferences).toBe(2086478);
  });
  it("test with small file diffrance 40 ", async () => {
    process.env.INPUT_FILE = "./src/tests/sample/input1.txt";
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body.sumOfDifferences).toBe(40);
  });
});
