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
  - [1.10. Working with Multiple States](#110-working-with-multiple-states)
  - [1.11. Using One State Instead (And What's Better)](#111-using-one-state-instead-and-whats-better)
  - [1.12. Updating State That Depends On The Previous State](#112-updating-state-that-depends-on-the-previous-state)
  - [1.13. Handling Form Submission](#113-handling-form-submission)
  - [1.14. Adding Two-Way Binding](#114-adding-two-way-binding)
  - [1.15. Child-to-Parent Component Communication (Bottom-up)](#115-child-to-parent-component-communication-bottom-up)
  - [1.16. Lifting The State Up](#116-lifting-the-state-up)
  - [1.17. Controlled vs Uncontrolled Components & Stateless vs Stateful Components](#117-controlled-vs-uncontrolled-components--stateless-vs-stateful-components)

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

For this case, **listening to user input** comes with the concepts dealt with in [listening-events][listening-events] topic. Typical methods include `onChange`, which is better than `onInput` here, given that it also maintain record of **any changes** besides text typing (e.g., those triggered by _dropdown menus_).

Defining a **_onEvent_** "prop" in a HTML element actually let React **set a listener** in it _under the hood_. One thing to remeber from JavaScript: The **handler** it points to receives, by default, an **_event object_** (check it out, for example, in the _console log_), which, in its turn, have a _target_ field.

The **target field** is a reference to the element listened to. As that is the case, an _input element_ (applied here) contains a property named `value`, por example. Thus, with that value, any keystroke event might be handled as an example.

<!-- 54. Working with Multiple States -->

## 1.10. Working with Multiple States

Following the example from before, saving the `input` change may be done using `useState`. The _state updating function_, in that case, is a **bonus**, considering the need for saving the value.

But at some point, **many states** might be handled, which is done simply by using multiple `useState()` calls. They are separated from each other, even being inside the same component.

The **initial value's type** for each call might be expressed by a `string`, the reason for that being the return type of `event.target.value` ??? a string.

<!-- 55. Using One State Instead (And What's Better) -->

## 1.11. Using One State Instead (And What's Better)

An alternative to using three useState-slices is to pass a object to `useState()` for grouping together them all. To do that, everytime the common state is set up, updated, every item from object should be changed too, because **React doesn't merge the old state with the new one**. The first part would be written this way:

```javascript
const [enteredInput, setInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
});
```

Following this every **handler** should update every property from the forementioned object, especially keeping the value if it is not related to the function handler.

<!-- 56. Updating State That Depends On The Previous State -->

## 1.12. Updating State That Depends On The Previous State

There is a problem related whenever the app needs to update a state which **depends on previous state** -- if someone wants to reduce the statements down to one-state approach. To operate correctly on the **_latest state snapshot_**, the _setter_ function (e.g. `setInput`) could receive a function as parameter, such as an anonymous one, which in turn returns the desired state object:

```javascript
setInput((prevState) => {
    return { ...prevState, enteredTitle: event.target.value };
});
```

Note: the _spread operator_ gets the **previous \[and unchanged\] state to remain in effect**. In code, whenever a state depends on previous one, there should be found this **function design/technique form**.

Such **approach is replicable** to every handler method other than title-handler one, or it is also possible to use a _single change-handler function_ by means of ES6's _Computed Property Names_.

<!-- 57. Handling Form Submission -->

## 1.13. Handling Form Submission

Submitting a form has a challenge: **how to listen to the submission** -- a _tip_: `onClick` is not the best solution. Overall **`form` emit an event**: `onSubmit`. To to that, some steps are required:

-   **Disabling default form submission behavior**

    The default behavior _updates the page_ at submission, whereas this project's requirements deal with something even more **manual**. **Disabling** it could be achieved by a JavaScript piece of code: `event.preventDefault`.

-   **Handling the form data manually**

    For that specific project, a single object containing everything is enough. It should be noted, though, that for a one-state approach (see previous [section](#112-updating-state-that-depends-on-the-previous-state)).

-   **Clear form data**

    After handlign the data, the input may clear as usually is done. This is the [next section](#114-adding-two-way-binding)'s main point.

<!-- 58. Adding Two-Way Binding -->

## 1.14. Adding Two-Way Binding

This **two-way binding technique** covers resetting a new value back, e.g. to the input, whenever a update is set to a state which affects it. That means one can replace `value=""` with a dynamic state value, which would bind it to the state value (e.g., `value={enteredTitle}`) -- to recall, this is the first list item returned from `useState`.

-   This guarantees \[an element's\] **value is bound** after every change in state
-   It is done in conjuction with **setting the state to a default value** (in this example, to the _empty string_)

That way of working, if codified to reset a value-state, intends to **keep a value "self-refreshing"** to a desired state whenever an event arises; in this case, the event is triggered by a change in input element.

<!-- 59. Child-to-Parent Component Communication (Bottom-up) -->

## 1.15. Child-to-Parent Component Communication (Bottom-up)

The ultimate goal for this snapshot it to **add amounts objects** and connect it with the event listener. Usually there is a connection from parent to child. The other way around, however, is best suited for sending input-form data -- **child to parent**.

**Calling a function** (data is passed to it) is the solution to that part. For instance, `onChange` is just a prop in the end. Props can only be passed from parent to child, which also means there **cannot be a skipped component** in the "family tree".

Any function pointed to by a prop prefixed with `on...` (usually representing that it points to a method) is to be called/executed in the child component, which should expect this behavior by its `props` argument. _Going up even further_, the lower component must actually send its data to a higher-level parent by a prop chaining.

As a side note related to the project, saving an user payment could come up with an ID (for example, using the method `v4()` from package `uuid`).

**_The takeway_**: communicating between components is also done **upwards the components tree**, specifically by means of **_props_**. Until now, this project snapshot had focused in states and event handling, but from now on it takes its destiny to insert the input-form data into the already-existing list.

<!-- 60. Lifting The State Up -->

## 1.16. Lifting The State Up

This is another concept related to what was seen before. Connecting **siblings**: closest parent component becomes the intermediator. Lifting the state (or data) up is simply moving up a child's particular state by its **_props_**, so that it can be used directly there or elsewhere, indirectly (in a sibling component, for exemple) -- via props again.

<!-- 61. Controlled vs Uncontrolled Components & Stateless vs Stateful Components -->

## 1.17. Controlled vs Uncontrolled Components & Stateless vs Stateful Components

These are useful, important naming convetions for components for identifying them:

-   **Controlled components**: basically it refer to those with two-way binding; they use _props_ and function(s) from a parent component.
-   **Stateful components**: these are components that control a state; in other hand, **stateless**, or "dumb" (as opposed to "smart") ones just present information on page.

##

<!-- Link references -->

[listening-events]: #13-listening-to-events-working-with-event-handlers
