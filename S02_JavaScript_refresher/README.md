# Reviewing JavaScript concepts

## Table of contents

- [Reviewing JavaScript concepts](#reviewing-javascript-concepts)
  - [Table of contents](#table-of-contents)
  - [Module Introduction](#module-introduction)
  - [Understanding "let" and "const"](#understanding-let-and-const)

<!-- Module Introduction -->

## Module Introduction

This module/section is **optional**. The refresher includes the following concepts:

- let/const
- arrow functions
- exports and imports
- classes, properties and methods
- spread & rest operator
- destructuring
- reference and primitive types
- array functions

Following this track, there is a simple **wrap up**, **summary** and more to array functions.

<!-- 12. Understanding "let" and "const" -->

## Understanding "let" and "const"

Two ways of creating "variables":

- `let` (new `var`): variable values
- `const`: constant values

`Let` is a more modern way of defining a `var`.

- When initializing a variable using the term `var`, the variable is declared on a global scale:

  ```javascript
  // i is defined globally even though it should
  // be defined in the scope of this loop
  for (var i = 0; i < 100; i++) {
    console.log(i);
  }

  console.log(i); // works!
  ```

- However, when using `let`, it is declared on a local scale:

  ```javascript
  // i is defined locally in the scope of this
  // code block
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }

  console.log(i); // doesn't work!
  ```

This [MDN article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#description) dives deeply into `let` and also explains how it differs from `var`:

> The other difference between `var` and `let` is that the latter is initialized to a value only when a parser evaluates it.
