import { local } from "../index.js";

console.log(local.foo);
local.foo = "bar";
console.log(local.foo);
local.foo = "bar-2";
console.log(local.foo);
