function foo(a, b) {
  // Check for null or undefined values using strict equality
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Or throw an error, depending on desired behavior
  }
  return a + b; // Perform addition only if both operands are valid numbers
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(2, null)); // Output: 0
console.log(foo(2, 3)); // Output: 5
console.log(foo(undefined, 5)); // Output: 0
console.log(foo(2, undefined)); // Output: 0