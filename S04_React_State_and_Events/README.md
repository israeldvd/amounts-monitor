# 1. React State and working with Events

## 1.1. Table of contents

- [1. React State and working with Events](#1-react-state-and-working-with-events)
  - [1.1. Table of contents](#11-table-of-contents)
  - [1.2. Module Introduction](#12-module-introduction)
  - [1.3. Listening to Events Working with Event Handlers](#13-listening-to-events-working-with-event-handlers)
  - [1.4. How Component Functions Are Executed](#14-how-component-functions-are-executed)
  - [1.5. Working with "State"](#15-working-with-state)
  - [1.6. A Closer Look at the "useState" Hook](#16-a-closer-look-at-the-usestate-hook)
    - [1.6.1. Using _const_](#161-using-const)
    - [1.6.2. Instances and `useState`](#162-instances-and-usestate)
  - [1.7. State can be updated in many ways!](#17-state-can-be-updated-in-many-ways)
  - [1.8. Adding Form Inputs](#18-adding-form-inputs)
  - [1.9. Listening to User Input](#19-listening-to-user-input)

<!-- 46. Module Introduction -->

## 1.2. Module Introduction

Making apps interactive and reactive is the main goal of the projects with React. Remember that here the developer declare **desired target** states and **React takes care** of reaching that state. Some topics covered ahead:

-   Handling events
-   Updating UI and working with "_state_"
-   A closer look at components and _state_

<!-- 47. Listening to Events & Working with Event Handlers -->

## 1.3. Listening to Events Working with Event Handlers

Getting stared with events: click. E.g., changing the item title by a click. For that, instead of add `eventListener`, a "special prop" to an element, starting it with "on": `onClick=VALUE`. Then that adds an event listener to this element.

All these events handlers (such as `onClick`) usually are supposed **to receive a function**, executed when the event occurs. Actually, they'd better receive a **pointer to a function**, if this is defined before; that is, unless one wants to run it _immediately_. Some events are limited to certain elements, so to listen to an event should be accompanied by checking **DOM specifications** out.

Related to **naming conventions**, usually functions are named ending with **"Handler"**: `clickHandler()`. Even though this is a preference, it is a _predictable_ protocol to name an _attached-to-a-listener function_.

<!-- 48. How Component Functions Are Executed -->

## 1.4. How Component Functions Are Executed

Changing what shows up on the screen: e.g., defining a **variable**, changing it every time the _handler_ is called. But there is a catch. **Nothing happens** after a click handler, even though it is getting triggered.

React does not work like this. One **key thing**: a component is just a regular function, returning JSX; and someone has to call it, or call every component React encounters -- **a series of functions calls**. And React never repeats those steps, but there is a way to re-evaluate a component: **_state_**.

<!-- 49. Working with "State" -->

## 1.5. Working with "State"

Changing some variable does not change a component. And even if it would be the case, in this project (using a variable `title`), the title would reload its initial contents (received via `props.title`).

Importing from the react library: `useState`. Call it (a **_React hook_**) inside the component, generally.

-   Receives a **value** (e.g., inital _title_).
-   Assigning a **new value** by its returned function.

Actually it returns an _array_: the current state value (e.g., `title`) and the function (e.g., `setTitle`). Refer to the **convention**: description and "_set_" followed by it (see the code).

Calling the _state-updated function_ not only **update** the old 'value', but also the component. Obs.: `setTitle` (or any "setFunction") is executed asynchronously. So the change is not yet reflected in the next line (.e.g, using `console.log(title)` would print an old reference).

The **_takeway_**: if there is a design to change something in the UI based on data change, then **_state_** is in charge of that.

<!-- 50. A Closer Look at the "useState" Hook -->

## 1.6. A Closer Look at the "useState" Hook

Even when the same component is called multiple times, a **different state** is given to each one. In other words, React, after a change in state, do another evaluation on a **per-component-instance basis**, which means that other instances are not affected (e.g., other _items_ remain immutable).

### 1.6.1. Using _const_

Now, **using _const_** with `useState` remains a common practice to state-regulated values/variables/constants because React manages the state for the developer -- it is responsible for adding **interactivity** to the UI.

### 1.6.2. Instances and `useState`

Another important concept here is related to **first execution of `useState`**: calling `useState` only sets an initial value the first time it starts keeping track of the argument's state. That means the argument to it is **initialized once**; otherwise, it grabs the latest state which was updated, for exampled.

<!-- 51. State can be updated in many ways! -->

## 1.7. State can be updated in many ways!

As noted by an instructor, everything done so far was related to **user event listeners** (such as _click handlers_):

> _That's very common but not required for state updates! You can update states for whatever reason you may have._

A course or learning sessions one would take might present new **ways of keeping track and updating states**. They write:

> _Later in the course, we'll see HTTP requests that complete (where we then want to update the state based on the Http response we got back) but you could also be updating state because a timer (set with setTimeout()) expired for example_.

<!-- 52. Adding Form Inputs -->

## 1.8. Adding Form Inputs

Now, the code gains an **_input form_**, which aims to **add** a new user-defined expense item (by the components `AddAmount` and related). As this is a **new component**, it can be a good step to separate it (and its associations) to a specific path (e.g., `AddingNew` or something like that), given that its **purpose differs** from previous components (this project already has the folders/directories `/UI` and `Amounts`).

<!-- 53. Listening to User Input -->

## 1.9. Listening to User Input

For this case, **listening to user input** comes with the concepts dealt with in [listening-events][listening-events] topic. Typical methods include `onChange`, which is better of than `onInput` here because it also maintain record of **any changes** besides text typing (e.g., those triggered by _dropdown menus_).

[listening-events]: #13-listening-to-events-working-with-event-handlers
