import { problems } from "../index";

test("should return 233168", async () => {
  expect.assertions(1);
  const data = await problems[0].fn();
  await expect(data).toEqual(233168);
});
test("should return 4613732", async () => {
  expect.assertions(1);
  const data = await problems[1].fn();
  expect(data).toEqual(4613732);
});
test("should return 6857", async () => {
  expect.assertions(1);
  const data = await problems[2].fn();
  expect(data).toEqual(6857);
});
test("should return 906609", async () => {
  expect.assertions(1);
  const data = await problems[3].fn();
  expect(data).toEqual(906609);
});
test("should return 232792560", async () => {
  expect.assertions(1);
  const data = await problems[4].fn();
  expect(data).toEqual(232792560);
});
test("should return 25164150", async () => {
  expect.assertions(1);
  const data = await problems[5].fn();
  expect(data).toEqual(25164150);
});
test("should return 104743", async () => {
  expect.assertions(1);
  const data = await problems[6].fn();
  expect(data).toEqual(104743);
});
test("should return 23514624000", async () => {
  expect.assertions(1);
  const data = await problems[7].fn();
  expect(data).toEqual(23514624000);
});
test("should return 31875000", async () => {
  expect.assertions(1);
  const data = await problems[8].fn();
  expect(data).toEqual(31875000);
});
test("should return 142913828922", async () => {
  expect.assertions(1);
  const data = await problems[9].fn();
  expect(data).toEqual(142913828922);
});
test("should return 70600674", async () => {
  expect.assertions(1);
  const data = await problems[10].fn();
  expect(data).toEqual(70600674);
});
test("should return 76576500", async () => {
  expect.assertions(1);
  const data = await problems[11].fn();
  expect(data).toEqual(76576500);
});
test("should return 5537376230", async () => {
  expect.assertions(1);
  const data = await problems[12].fn();
  expect(data).toEqual(5537376230);
});
