# Reviewing JavaScript concepts

## Table of contents

- [Reviewing JavaScript concepts](#reviewing-javascript-concepts)
  - [Table of contents](#table-of-contents)
  - [Module Introduction](#module-introduction)
  - [Understanding "let" and "const"](#understanding-let-and-const)
  - [Arrow Functions](#arrow-functions)

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

<!-- 13. Arrow Functions -->

## Arrow Functions

These are truly functions except they're written differently. Syntax:

```javascript
const function = () => {
  //body
}
```

The **parenthesis** could be omitted when using only **one argument**:

```javascript
const multiply = (number) => {
  return number * 2;
};

console.log(multiply(4)); //8
```

And the **_body-and-return_** part could be simplified (see example) if only a **return** was made there:

```javascript
const multiply = (number) => number * 2;

console.log(multiply(4.5)); //9
```

See an issue when using _arrow functions_ in this React repository's [issue](https://github.com/facebook/react/issues/10810). This is an advanced topic, but it should be noted:

- _the new experimental class method arrow function syntax (which is technically different from ES6 arrow functions) shouldn't be used for React's lifecycle hook_

<!-- 14. Exports and Imports -->

We usually export (by `export` keyword) and import (by `import`) `javascript` files into each other. We can import by name or by default, if any **default export** is defined.

- **default export** allows importing defining a new name:
  ```javascript
  import person from "./person.js";
  import prs from "./person.js";
  ```
- **named exports** deman _alias_ for new-naming properties from the export object, or expect a curly-braced reference to it (them):
  ```javascript
  import { smth } from "./utility.js";
  import { smth as Smth } from "./utility.js";
  import * as bundled from "./utility.js";
  ```

These examples were taken from the course presentation. In them, `person`, `prs` `Smth` and `bundled` are **chosen names** after the importing. `smth` is an example for **defined-by-export named**.
