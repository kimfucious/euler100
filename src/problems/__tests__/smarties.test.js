import { fn as fn5 } from "../smarties/p_5_smart";
import { fn as fn11 } from "../smarties/p_11_smart";
import { fn as fn12 } from "../smarties/p_12_smart";

test("should return 232792560", async () => {
  expect.assertions(1);
  const data = await fn5();
  expect(data).toEqual(232792560);
});

test("should return 70600674", async () => {
  expect.assertions(1);
  const data = await fn11();
  expect(data).toEqual(70600674);
});

test("should return 76576500", async () => {
  expect.assertions(1);
  const data = await fn12();
  expect(data).toEqual(76576500);
});
