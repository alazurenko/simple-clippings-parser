import { expect } from "@jest/globals";
import { parseFile } from "../index";

const RECORDS_IN_FILE = 2;

describe("Simple Clippings Parser", () => {
  let data;

  beforeEach(async () => {
    data = await parseFile("tests/example.txt");
  });

  test("should parse data from .txt file", () => {
    expect(data).toBeDefined();
  });

  test("should return 2 records from test file", () => {
    expect(data.length).toEqual(RECORDS_IN_FILE);
  });

  test("should return expected valid object", () => {
    let { book, author, quote } = data[0];

    expect(book).toEqual("Test1");
    expect(author).toEqual("Phantom");
    expect(quote).toEqual("Text1");
  });
});
