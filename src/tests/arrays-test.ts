import assert from "assert";
import { arrayNumGenerator, arrayStrGenerator } from "../lib/arrays.js";

const arrayNumResult = arrayNumGenerator(1, 10, 10);

assert.strictEqual(arrayNumResult.length, 10);
assert.ok(arrayNumResult.every((item) => item >= -10 && item <= 10));

const arrayStrResultOne = arrayStrGenerator(100, 1);
assert.strictEqual(arrayStrResultOne.length, 100);
assert.ok(arrayStrResultOne.every((item) => item.length === 1));

const arrayStrResultFive = arrayStrGenerator(100, 5);
assert.strictEqual(arrayStrResultFive.length, 100);
assert.ok(arrayStrResultFive.every((item) => item.length === 5));

console.log("All array tests passed!");
