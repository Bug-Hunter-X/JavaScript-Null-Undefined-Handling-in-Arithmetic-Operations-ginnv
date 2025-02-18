# JavaScript Null/Undefined Handling in Arithmetic Operations

This repository demonstrates a common error in JavaScript where arithmetic operations may encounter unexpected results when null or undefined values are present.  The provided code shows a bug example and then presents a solution to handle these null or undefined cases gracefully.  The focus here is on improving the reliability and robustness of JavaScript code when dealing with potentially missing or invalid numerical data.

## Bug Description
The original code snippet directly performs addition without checking for null or undefined values. This leads to incorrect outputs or runtime errors when one or both operands are null or undefined.  The solution demonstrates how to use strict equality (`===`) comparisons and conditional checks to prevent this unexpected behavior and improve code quality.