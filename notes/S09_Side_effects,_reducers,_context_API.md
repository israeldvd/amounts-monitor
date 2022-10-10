# 1. Advanced concepts: side effects, reducers and context API

## 1.1. Table of contents

- [1. Advanced concepts: side effects, reducers and context API](#1-advanced-concepts-side-effects-reducers-and-context-api)
  - [1.1. Table of contents](#11-table-of-contents)
  - [1.2. Introduction to Side Effects](#12-introduction-to-side-effects)
  - [1.3. Handling Side Effects](#13-handling-side-effects)
  - [1.4. useEffect summary](#14-useeffect-summary)
  - [1.5. Introducing useReducer & Reducers In General](#15-introducing-usereducer--reducers-in-general)

## 1.2. Introduction to Side Effects

So far every concept lead the project to handling and presenting proper UI (and reacting to the user input). But then there is the _Effect_ (or **_Side Effect_**), which is basically everything else.

-   React deals with **bringing 'pieces' to the screen**,
-   but these other tasks don't: **sending HTTP requests**, **storing data**, etc. aren't directly related to the UI

_Side Effects_ work **outside of normal component evaluation**. For example, it would not make sense to send a HTTP request every time a rerender is done.

## 1.3. Handling Side Effects

Side Effects are used in React with `useEffect`, which takes two arguments:

-   `() => {}`: this is the **_effect_**, a function that is triggered only **if the dependencies have changed**, after every component evaluation
-   `[ dependencies ]`: dependencies of this effect, their changes are conditions for running the side-effect code

**_Storing data in browser_**. For a project with logging status, for example, an option is to use `localStore.setItem` (independant of React) or _cookies_. The function receives two string arguments, a **key-value pair** (identifier and its value, e.g., `"1"`).

To give data a **persistance** even after a page reload or something similar, a Side Effect is necessary to **check the local storage** for the wanted local pair. For example, with `localStore.getItem()`,
the browser yields the value, but it could not execute for every rendering, but only if the dependencies change.

**_Rule to have dependencies_**. Usually, use **what you have in the side-effect function** (every constant, method, if changed, and so on) as a dependency. For example, `enteredPassword` state. This guarantees it executes only if a change is made to this state in the **last component rerender cycle**.

-   This tipically is done with _props_ or states whose changes would trigger something (e.g., show a popup or give permission to a button click).
-   User-entered data can also be indentified as Side Effects, not only dealing with HTTP request or storing data.
-   So, use Side Effect whenever an action is supposed to run in **reponse to some other action**.

> _Add all "things" you use in your effect function if those "things" could change because your component (or some parent component) re-rendered_

**_Using the useEffect Cleanup Function_**. The cleanup function executes before **every Side Effect execution** and before **every unmounting** (removal of the component). This serves many purposes, such as _clearing timeouts_ whenever an event occurs (an user may still be typing in a form). An example snippet for that scenario:

```javascript
useEffect(() => {
    const timeoutId = setTimeout(() => {
        // check form validity (e.g., state-update)
        // after every 500ms AND a pause on typing (see input states below)
    }, 500);

    // cleanup function (its name is negligible)
    return () => {
        clearTimeout(timeoutId);
    };
}, [enteredInput1, enteredInput2]); //inputs as dependencies
```

From the previous example, what must be kept in mind, yet, is that the **effect** (the all-encompassing anonymous function) **executes for any change** in the dependecies (the input states), meaning cleanups are made as from the second render and every time an input is changed.

## 1.4. useEffect summary

As pointed out previously, every **effect** not relying on dependecies (not even `[]`) runs for **every render cycle** (for example, change in state), including the first time the **component is mounted**. Out of curiosity, you could simply check that using `console.log`.

Using `[]` as dependecy, an effect runs only the first time the component is mounted and redered. Adding some **dependency** (such as those of the list `[someInput, anotherOne]`) implies effect running after changes in it, not only in the case mentioned before now.

**Cleanup functions** execute before every **unmounting** of the component it is created on; conversely, it is triggered before every effect execution, except the first time (when the component is mounted and rendered).

-   Refer to the definition of "effect" and examples in [this][useeffect] section.

-   They are defined with the `return` statement inside `useEffect`'s _EffectCallback_.

-   When `[]` is set as _DependecyList_, it runs at the unmounting time.

> _Clean up function runs **after** the new render but \*\*\_before_\*\* the 'new' effects are applied.\_

## 1.5. Introducing useReducer & Reducers In General

For more complex state management, a solution is to use `useReducer`. Usually avoid it for simple scenarios.

-   For example, use it when there are **multiple related states**, **multiple ways of changing this state** etc.
-   Simply is a replacement for `useState()`, but requires a more **complex setup**

Sometimes, when coding, one may need to **update some state** (e.g., a _form_ state) **based on other two or more states** (e.g., some of it _inputs_). But setting a new state, while relying on previous states, is supposed to assume a _function form_ (with a callback), but it wouldn't be possible.

Or even when two **states are closely related**, the case similar when storing an input data and its validity. Those are problems for which `useReducer` is a qualified idea.

**_A word of caution_**. Avoid updating a state from another one, given the reason that this state might be out-of-date. See that, in this example-case, employing `setInputIsValid((prevState) => {})` (_function form_) wouldn't work for the reason this `prevState` is **not** associated with the other state (for example, `enteredInputData`), even though they are related. `useReducer()` is a good choice.

The [docs](#https://reactjs.org/docs/hooks-reference.html#usereducer) read:

> _`useReducer` is usually preferable to `useState` when you have complex state logic that involves multiple sub-values. It also lets you optimize performance for components that trigger deep updates because you can pass `dispatch` down instead of callbacks._

**_Implementing the `useReducer`_**. The following snippet of code is a help to understand it.

```javascript
const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
```

-   **Returned array** (exactly two values)

    1.  `state`: the state snapshot
    2.  `distachFn`: function to dispatch a new action

-   **Arguments**

    1.  `reducerFn`: triggered automatically once an action is dispatched and gets that and should return the new updated state:

        -   `(prevState, action) => newState`
        -   similar to the function form from `useState`

    1.  `initialState`: the initial state
    1.  `initFn`: functin to set the initial state programmatically

The `reducerFn` can be defined outside the component definition if it doesn't need to interact with anything of the component function.

**_Some tips_**:

-   **Be consitent when calling dispatches**: defining initial state and updating them is supposed to use the same design structure; for example, an object with two values gives **consistency** to its usage: `{value: "", validity: true}`
-   **Follow conventions**: it is not wrong to _dispatch a new action_ passing numbers or strings as parameters, but it is usually common to send an **object** similar to this example (note the capital case): `{type: "USER_INPUT", val: target.value}`
-   **Consider using reducers if**: more "power" is needed, there are related pieces of state and/or more complex state updates

##

[useeffect]: #13-handling-side-effects
