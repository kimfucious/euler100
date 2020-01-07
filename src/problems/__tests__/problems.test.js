import { problems } from "../index";
console.log(problems[0].fn());

test("should return 233168", () => {
  expect(problems[0].fn()).toEqual(233168);
});
test("should return 4613732", () => {
  expect(problems[1].fn()).toEqual(4613732);
});
test("should return 6857", () => {
  expect(problems[2].fn()).toEqual(6857);
});
test("should return 906609", () => {
  expect(problems[3].fn()).toEqual(906609);
});
test("should return 232792560", () => {
  expect(problems[4].fn()).toEqual(232792560);
});
test("should return 25164150", () => {
  expect(problems[5].fn()).toEqual(25164150);
});
