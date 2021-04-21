import { getAboveIndex, getBelowIndex, getLeftIndex, getRightIndex } from "..";

test("getAboveValue", () => {
  expect(getAboveIndex(2, 3)).toBe(1);
});
test("get AboveValue returns same value if its very top element", () => {
  expect(getAboveIndex(2, 1)).toBe(null);
});
test("getBelowIndex", () => {
  expect(getBelowIndex(2, 1)).toBe(3);
});
test("getBelowIndex returns same value if there is no bottom element", () => {
  expect(getBelowIndex(2, 2)).toBe(null);
});
test("getRightValue", () => {
  expect(getRightIndex(2, 0)).toBe(1);
  expect(getRightIndex(3, 1)).toBe(2);
});
test("getRightValue returns same if is last", () => {
  expect(getRightIndex(2, 1)).toBe(null);
  expect(getRightIndex(2, 3)).toBe(null);
});
test("getLeftValue returns same if is first", () => {
  expect(getLeftIndex(2, 0)).toBe(null);
  expect(getLeftIndex(2, 2)).toBe(null);
});
