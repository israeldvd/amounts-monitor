# 1. React State and working with Events

## 1.1. Table of contents

- [1. React State and working with Events](#1-react-state-and-working-with-events)
  - [1.1. Table of contents](#11-table-of-contents)
  - [1.2. Module Introduction](#12-module-introduction)
  - [1.3. Listening to Events Working with Event Handlers](#13-listening-to-events-working-with-event-handlers)
  - [1.4. How Component Functions Are Executed](#14-how-component-functions-are-executed)
  - [1.5. Working with "State"](#15-working-with-state)

<!-- 46. Module Introduction -->

## 1.2. Module Introduction

Making apps interactive and reactive is the main goal of the projects with React. Remember that here the developer declare **desired target** states and **React takes care** of reaching that state. Some topics covered ahead:

- Handling events
- Updating UI and working with "_state_"
- A closer look at components and _state_

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

- Receives a **value** (e.g., inital _title_).
- Assigning a **new value** by its returned function.

Actually it returns an _array_: the current state value (e.g., `title`) and the function (e.g., `setTitle`). Refer to the **convention**: description and "_set_" followed by it (see the code).

Calling the _state-updated function_ not only **update** the old 'value', but also the component. Obs.: `setTitle` (or any "setFunction") is executed asynchronously. So the change is not yet reflected in the next line (.e.g, using `console.log(title)` would print an old reference).

The **_takeway_**: if there is a design to change something in the UI based on data change, then **_state_** is in charge of that.
