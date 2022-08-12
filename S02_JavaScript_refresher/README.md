# Reviewing JavaScript concepts

## Table of contents

- [Reviewing JavaScript concepts](#reviewing-javascript-concepts)
  - [Table of contents](#table-of-contents)
  - [Module Introduction](#module-introduction)
  - [Understanding "let" and "const"](#understanding-let-and-const)
  - [Arrow Functions](#arrow-functions)
  - [Understanding Classes](#understanding-classes)
  - [Classes, Properties and Methods](#classes-properties-and-methods)
  - [The Spread & Rest Operator](#the-spread--rest-operator)
  - [Destructuring](#destructuring)
  - [Reference and Primitive Types Refresher](#reference-and-primitive-types-refresher)
  - [Refreshing Array Functions](#refreshing-array-functions)

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

<!-- 15. Understanding Classes -->

## Understanding Classes

Metaphorically classes are **blueprints** for _javascript_ objects, defining generic _behaviours_ (_methods_) and _attributes_ for instantiated objects.

- **_Extending_** another class (**inheritance**) requires the `super` constructor.

  There is a need to add `super()` to the constructor of the **derived class** (specific one) in order to provide it the **"broader" class'** (general one) methods and attributes. Someone writes:

  > _When you extend a class, calling super within the subclass constructor **calls the the constructor of the parent class** to make sure it gets initialized and then can be **referenced in the subclass**._

  This is related to **prototypes**. _Obs.: Using the ES6 constructor is rarely required_.

- **_Private attributes or methods_** (not used here).

  JavaScript, as opposed to other OOP languages, doesn't know `private` keyword (and _private variables_, for example).

<!-- 16. Classes, Properties and Methods -->

## Classes, Properties and Methods

More **modern syntax** to spare constructor-usage and other things from next-generation JavaScript -- the examples below are from a class named `Person`:

- ES6 (using **constructor**)

  ```javascript
    constructor () {
      this.name = 'John'
    }

    showName(){
      console.log(this.name);
    }
  ```

- ES7 (no **constructor** defined -- `super()` isn't called either)

  ```javascript
  name = "John"; //no constructor anymore

  showName = () => {
    //arrow function is employed, instead
    console.log(this.name); //the keyword 'this' is kept
  };
  ```

And as no constructor is need, as mentioned, no `super()` method should be called. **Note**: if the new code won't work, try changing the compiler to `ES6/babel` (may change).

**Properties** are like "variables attached to classes/objects. **Methods**, similarly, are like "functions attached to them.

> a **method** should be thought as a **property** which stores a function \[an arrow one\] as a value.

One question may arise: "Are arrow functions as methods bad practice?". The simple answer:

> _You need to understand the context of `this` in a situation. You are correct in saying that creating a method with an arrow function in an object will cause it's `this` keyword to point to the Window object. However, we're talking about `this` within the context of classes which are essentially constructor functions. Thus, the context of an arrow function's `this` keyword is the class._ \[Answer by Gerald\]

In arrow functions `this` is always **binded to outer scope of function**. In **React** they will always be **binded to class** where they were CREATED. This is example with pure js class:

<!-- 17.  -->

## The Spread & Rest Operator

Basically they, written as `...` (three dots), can be defined as follows:

- **Spread operator**: used to split up array elements OR object properties;
- **Rest operator**: used to merge a list of function arguments into an array

So the **spread operator** may be used to make a shallow copy from an object or array (take its elements up and use it elsewhere):

```javascript
let oldArray = [1, 2, 3];
let newArray = [...oldArray, 4, 5];
console.log(newArray); // [1, 2, 3, 4, 5]

const person = {
  name: "John";
}

const newPerson = {
  ...person,
  age: 29
}

console.log(newPerson); // [object Object] { name: "John", age: 29 }
```

And the **rest operator** (also known as **ellipsis** in other languages) allows you to write variadic functions, i.e. the function accepts a **variable amount of parameters**.

<!-- 18. Destructuring -->

## Destructuring

Easily extract array elements or object properties and store them in variables.

- **Array**
- **Object**

This means a new **variable/constant name** can be defined, extracting only a portion of the _array_ or _object_. One question arose: _"could the developer use this without `let` or `var`, for example?"_ The recommendation:

> _Theoretically it could work without `const` in many cases. But use `const`, unless you're going to overwrite the whole array (below)._

They were **not used too often**, but they can be present sometimes.

<!-- 19. Reference and Primitive Types Refresher -->

## Reference and Primitive Types Refresher

**Object** and **arrays** are **_reference types_**, meaning their **variable**/**constant** store a `pointer` to the a real object. That means changing a newly **constant** _object_ which refereces another would change the original object.

**_Primitive types_**, on the other hand, are core units. Creating a new **variable** from them would create a new one; and they are simple in structure, namely, _**not composed** of "things"_.

- **_primitive_**: `strings`, `numbers`
- **_reference_**: `objects`, `arrays`

<!-- 20. Refreshing Array Functions -->

## Refreshing Array Functions

A long-stading feature of JavaScript is `map()`, a built-in **_array method_** which takes a function (in this case, an **array function**) and applies it to each one of its elements. For an _array_, it returns a **new _array_** (whose values can be equal, though). This inner function takes an argument such as:

```javascript
const doubleNumbers = [1, 2, 3].map((num) => num * 2); // [2, 4, 6]
```

Other related **array helper tools**, a group of methods: `every()`, `filter()`, `find()`, `findIndex()`, `for of loop`, `map()`, `reduce()` and `some()`.

Similar to `map()`, `forEach()` does not return an **array of values**, and the former can return HTML content.
