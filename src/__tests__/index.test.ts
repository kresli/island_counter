import { countIslands } from "../countIslands";

test("single row", () => {
  expect(
    countIslands([
      [1, 0],
      [1, 1],
    ])
  ).toEqual(1);
  expect(
    countIslands([
      [1, 0],
      [0, 1],
    ])
  ).toEqual(2);
  expect(
    countIslands([
      [1, 0, 1],
      [0, 0, 1],
      [0, 1, 1],
    ])
  ).toEqual(2);
});
test("2", () => {
  expect(
    countIslands([
      [1, 0, 1],
      [0, 0, 0],
      [0, 1, 1],
    ])
  ).toEqual(3);
  expect(
    countIslands([
      [1, 0, 1],
      [1, 1, 0],
      [0, 0, 1],
    ])
  ).toEqual(3);
});
export {};
