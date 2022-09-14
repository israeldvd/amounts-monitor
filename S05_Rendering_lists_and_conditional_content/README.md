# 1. Rendering Lists and Conditional Content

## 1.1. Table of contents

- [1. Rendering Lists and Conditional Content](#1-rendering-lists-and-conditional-content)
  - [1.1. Table of contents](#11-table-of-contents)
  - [1.2. Module Introduction](#12-module-introduction)
  - [1.3. Rendering Lists of Data](#13-rendering-lists-of-data)
  - [1.4. Using Stateful Lists](#14-using-stateful-lists)
  - [1.5. Understanding "Keys"](#15-understanding-keys)
  - [1.6. Outputting Conditional Content](#16-outputting-conditional-content)
    - [1.6.1. Using the ternary operator](#161-using-the-ternary-operator)
    - [1.6.2. Using outsider conditions](#162-using-outsider-conditions)

<!-- 63. Module Introduction -->

## 1.2. Module Introduction

Now the project is supposed to **work with really dynamic output**, providing views based on **defined conditions**. It would also be improved to receive **lists of contents**; however, all components from this project already built in this feature.

<!-- 64. Rendering Lists of Data -->

## 1.3. Rendering Lists of Data

As done before, **list-mapping** (using `map`) is an important tool to get an array of JSX elements, based on another list – in this case, a list of "amounts" (priced expenses). Then, **rendering multiple elements** becomes way more dynamic.

Telling React to **render a list of items** is going to render all of them side by side automatically.

-   _Conclusion_: with that resource, the elements created by means of list mapping are **rendered according to it**, thus, any change to the "original" (generator) list **reflects back** to the components list.

-   _Obs_.: ignore any _warning_ if it is the first time required to use a **key** – basically all children have their own.

<!-- 65. Using Stateful Lists -->

## 1.4. Using Stateful Lists

Adding new item (to insert in the items list) isn't effective without states – thus **stateful lists** emerge. For rendering the to-be-dynamic list [of components], **use state** for the data — even dummy ones —, particularly placing it outside the App's declaration – e.g., `const DUMMY = [...]`.

One thing to **remember**: to update a state based off an old snapshot, use the function form. This would be done to update the list (by the method provided by the `useState`, as seen before).

<!-- 66. Understanding "Keys" -->

## 1.5. Understanding "Keys"

React, when working with lists, behaves different than expected without **_keys_**, with which there are more performance improvements and less bugs. In fact, adding a new item list without them would get the app to update everything (e.g., `divs`) in every re-rendering to match the old configuration where needed.

Using the **indexes** of an array as the keys, as the React team points out in their docs, is a [discouraged practice](#https://reactjs.org/docs/lists-and-keys.html#keys), for the reason that this list might change anytime.

However, it's a "last resort" — in this case, `map` provides the index as the **second argument to the callback function**. Refer to the example provided by them:

```javascript
const todoItems = todos.map((todo, index) => (
    // Only do this if items have no stable IDs
    <li key={index}>{todo.text}</li>
));
``;
```

Summing up, **without the keys** there wouldn't be an efficient manner to update components list without cycling through the whole list, producing **performance issues**.

<!-- 67. Outputting Conditional Content -->

## 1.6. Outputting Conditional Content

**Rendering contents conditionally** is another concept treated by this project. This is different than any other seen before, such as [components list](#13-rendering-lists-of-data), and can be illustrated by showing a message if no item is present given a certain filter.

To do that, some alternatives may aid the project along the way:

-   inside curly braces, simply insert the **ternary operator** with the conditions – if-else clauses aren't allowed;

-   use outside-of-the-component **if-else clauses** (see below); or
-   use **another component** (even with [conditional return statements](#17-adding-conditional-return-statements))

### 1.6.1. Using the ternary operator

From Javascript you could borrow a syntax trick to split the **ternary operator into an easier-to-read code** – because the language is going to return the second statement if **the first is false**, shown by the pseudo-code example:

-   `{condition_true && paragraph}` followed by
-   `{condition_false && other_element}`.

In which both `condition` clauses must be mutually exclusive if one wants to render just one thing — either `paragraph` or `other_element`.

### 1.6.2. Using outsider conditions

A second alternative to the rendering of some view conditionally by ternary operator is **storing a default element in a variable "outside" the return statement**, then check the condition there (using if-else) and change/keep the value to it accordingly.

For instance, components may be rendered if the list isn't lacking anything. In the `return` context, it would suffice to insert a curly-braces "call" of the constant/var.

This second approach, being **optional**, depends on the amount of operations, conditions and so on, but it's probably more readable.
