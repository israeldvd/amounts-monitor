# 1. Debugging React Apps

## 1.1. Table of contents

- [1. Debugging React Apps](#1-debugging-react-apps)
  - [1.1. Table of contents](#11-table-of-contents)
  - [1.2. Module Introduction](#12-module-introduction)
  - [1.3. Understanding React Error Messages and Analyzing Code](#13-understanding-react-error-messages-and-analyzing-code)
  - [1.4. Working with Breakpoints](#14-working-with-breakpoints)
  - [1.5. Using the React DevTools](#15-using-the-react-devtools)

<!-- 83. Module Introduction -->

## 1.2. Module Introduction

Debugging React apps is all about **finding** and **fixing errors**, because they are always present. Some topics such as the following might help a developer to a full extent:

-   Understanding **error messages**
-   **Debug and analyze** React apps
-   Use the **React DevTools** (in the browser)

<!-- 84. Understanding React Error Messages &
85. Analyzing Code Flow & Warnings -->

## 1.3. Understanding React Error Messages and Analyzing Code

Usually reading the **error message** is enough to understand what is going on. Here are other things that may happen

-   IDE will detect at least some errors too
-   Error message outputs a **line number** and/or **code snippet** which the error points to

Here are some examples that may appear while executing the app:

-   _Adjacent JSX elements must be wrapped in an enclosing tag_: this can be solved by using only one root element per return statement, as the message suggests.
-   Wrong variable/constant or function references (typos) (output: _name is not defined_)

What about logical errors? When they are present in the code, they can set off a **Warning**, happening, for example, when there are many component children with the same key. But those also points out the problematic line and file.

As it can be seen, sometimes it is important to look out for pieces of code which may be related to a problem. But that is not all. **Working with breakpoints** (see next section) is another approach to find errors, particularly when they are hard to find.

<!-- 86. Working with Breakpoints -->

## 1.4. Working with Breakpoints

**Breakpoints** are very valuable to analyze and find erros in programs. They provide step-by-step function calls (in a _stack_) or a to inspect variables/constants current value; for example, a variable may have gotten the wrong value. There two simple alternatives to **debug** by them:

-   **navigating to the files** in the Sources tab, adding a break point in the line (click on its number)
-   add the `debugger` statement

<!-- 87. Using the React DevTools -->

## 1.5. Using the React DevTools

React Developer Tools is an extension available in Chrome-based browsers for analyzing and debugging React applications, including the DOM and the UI. After adding it, two options are available:

-   **Profiler**: this is commented on later
-   **Components**: this highlight the current component tree and informations (key, _props_, "rendered by", hooks)

At the bottom, the **components that rendered** the selected one are organized according to its tree, the topmost being the one that directly rendered.
