# 1. Advanced concepts: side effects, reducers and context API

## 1.1. Table of contents

- [1. Advanced concepts: side effects, reducers and context API](#1-advanced-concepts-side-effects-reducers-and-context-api)
  - [1.1. Table of contents](#11-table-of-contents)
  - [1.2. Introduction to Side Effects](#12-introduction-to-side-effects)
  - [1.3. Handling Side Effects](#13-handling-side-effects)

## 1.2. Introduction to Side Effects

So far every concept lead the project to handling and presenting proper UI (and reacting to the user input). But then there is the _Effect_ (or **_Side Effect_**), which is basically everything else.

-   React deals with **bringing 'pieces' to the screen**,
-   but these other tasks don't: **sending HTTP requests**, **storing data**, etc. aren't directly related to the UI

_Side Effects_ work **outside of normal component evaluation**. For example, it would not make sense to send a HTTP request every time a rerender is done.

## 1.3. Handling Side Effects

Side Effects are used in React with `useEffect`, which takes two arguments:

-   `() => {}`: a function that is triggered only **if the dependencies changed**, after every component evaluation
-   `[ dependencies ]`: dependencies of this effect, their changes are conditions for running the side-effect code

**_Storing data in browser_**. For a project with logging status, for example, an option is to use `localStore.setItem` (independant of React) or _cookies_. The function receives two string arguments, a **key-value pair** (identifier and its value, e.g., `"1"`).

To give data a **persistance** even after a page reload or something similar, a Side Effect is necessary to **check the local storage** for the wanted local pair. For example, with `localStore.getItem()` .
the browser yields the value, but it could not execute for every rendering, but only if the dependencies change.

**_Rule to have dependencies_**. Usually, use **what you have in the side-effect function** (every constant, method, if changed, and so on) as a dependency. For example, `enteredPassword` state. This guarantees it executes only if a change is made to this state in the **last component rerender cycle**.

-   This tipically is done with _props_ or states whose changes would trigger something (e.g., show a popup or give permission to a button click).
-   User-entered data can also be indentified as Side Effects, not only dealing with HTTP request or storing data.
-   So, use Side Effect whenever an action is supposed to run in **reponse to some other action**.
