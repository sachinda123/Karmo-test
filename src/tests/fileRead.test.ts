import request from "supertest";
import { app } from "../index";

describe("Test end point requested to page-views-count ", () => {
  it("test  500 logs ", async () => {
    const response = await request(app).get("/page-views-count");

    console.log("response", response);
  });
});
