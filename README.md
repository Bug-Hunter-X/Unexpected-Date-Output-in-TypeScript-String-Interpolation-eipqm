# Unexpected Date Output in TypeScript String Interpolation

This repository demonstrates a subtle bug in TypeScript related to how Date objects are handled within template literals (string interpolation). The bug is caused by unexpected behavior when directly using Date objects in string interpolation.

## Bug Description

The provided TypeScript code defines a function `greet` which takes a person's name and a Date object as input.  It attempts to construct a greeting string using template literals, embedding the date object directly. The resulting date string may not be in the expected format.

## How to Reproduce

1. Clone the repository.
2. Compile and run the code using a TypeScript compiler (e.g., `tsc bug.ts && node bug.js`).
3. Observe the output. The date format might be different than what's visually intended.

## Solution

The solution demonstrates explicitly converting the date to a desired string format using `toDateString()`  before using it in string interpolation to ensure consistent and expected output.