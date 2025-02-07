import { test, expect } from "vitest";
import { add } from "./add";

test("Test Add", () => {
  expect(add(2, 2)).toBe(4);
});