const assert = require("assert");
const greet = require("../greet.js");

assert.strictEqual(greet("World"), "Hello, World!");

console.log("All tests passed.");
