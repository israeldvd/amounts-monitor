# Testing React Apps

## Table of contents

- [Testing React Apps](#testing-react-apps)
  - [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [On testing](#on-testing)
  - [Start React tests](#start-react-tests)
  - [React Testing Library](#react-testing-library)

## Introduction

According to the [official docs](#https://reactjs.org/docs/testing.html), there are two categories with which React components can be tested:

> _**Rendering component trees** in a simplified test environment and asserting on their output._
>
> _**Running a complete app** in a realistic browser environment (also known as “end-to-end” tests)._

And two tools are recommended:

-   Jest
-   React Testing Library

For now, here are some simple notes on doing it. Feel free not only to **contribute** to this project, but also to the tests.

## On testing

Having a priority for testing is a **necessary** condition for saving up time and resources. For example, you could test high-valuable or leaky _features_. Yet, testing
usually comes in three parts:

-   **Unit tests**: checking how atomic parts behaves
-   **Integration tests**: certifies that these smalls parts are well-related
-   **End-to-end tests**: ranges from front-end to back-end, taking into account user interaction

## Start React tests

To make a fresh start, this structure is used here:

```javascript
it("on inital render,"), () => {
    const description = "Some text";

    testRender(
        <AmountItem description={description} cost="100" date={new Date()} />
    );

    expect(expect(screen.getByRole("heading").textContent).toBe(description);)
}
```

As it can be seen, **assertions** are made by `expect` followed by one of many checkup alternatives, usually methods that starts with `to` (`toBe`, `toBeDisabled`, `toBeFalsy` and so on).

## React Testing Library

This library contains useful imports for **rendering** and **parsing** or **debugging** components. Some examples are listed:

-   `render`: method to render a component
-   `screen`
    -   `debug()`: presents HTML snapshot
    -   `getByRole(role, options)`: check a role such as `button`, filtered according to the definitions (or properties) of `options`

`getByRole()` throws an **_error_** if not role is found but also lists available roles. Note that details on them are found in their community docs.
