# 1. Other design styles and constructions

## 1.1. Table of contents

- [1. Other design styles and constructions](#1-other-design-styles-and-constructions)
  - [1.1. Table of contents](#11-table-of-contents)
  - [1.2. Module Introduction](#12-module-introduction)
  - [1.3. Designing Parts of a Form](#13-designing-parts-of-a-form)
  - [1.4. Adding The "ErrorModal" Component](#14-adding-the-errormodal-component)
  - [1.5. Managing the Error State](#15-managing-the-error-state)
  - [1.6. Fragments for a JSX limitation](#16-fragments-for-a-jsx-limitation)
  - [1.7. Introducing React Portals](#17-introducing-react-portals)
  - [1.8. Working with Portals](#18-working-with-portals)
  - [1.9. Working with "ref"s](#19-working-with-refs)
  - [1.10. Controlled vs Uncontrolled Components](#110-controlled-vs-uncontrolled-components)

## 1.2. Module Introduction

Constructing an app should be possible with every concept learned so far. To extend this project, some constructions are a helping hand at improving and relieving many design problems; for example, a form input with a validation logic is not a thing to be discarded. What is new there: a **feedback modal**. And that's what this eigth branch proposes.

## 1.3. Designing Parts of a Form

Now, something not convered directly before. For **writing richer `form`s** and their stick-to-inputs labels, `htmlFor` is used instead of `for` as in plain HTML code. Acknowledging it improves accessibility for screen readers is the main point here.

**Designing a button component** as new component: simply a button could be returned without any new details, but it is important to not miss its `onClick` property. As that function will be imported somewhere else later, it's useful to add the same `onClick` name that comes by _props_, meaning the following: the function it executes (in the "instance" of Button component) is the same referenced by the element's (in the "class-component" of button). Some points to consider when doing it:

-   An approach for organizing the project: arranging them as **separate UI-components** (directory UI, alongside Card, for example)
-   You may use a **fallback value** for "type" property passed in by _props_, as demonstrated using the OR operator: `{props.type || "button"}`. That prevents it loses its meaning.

## 1.4. Adding The "ErrorModal" Component

Adding `ErrorModal`, a (new) component: it is hopefully reusable in the app as a whole (similarly to `Button` in the same component). The Modal component, as commonly used, acts resembling a **template** for future calls, allowing dynamic **title** and **message body** for example.

Its semantic structure could be based on a `header`, `div` and `footer`, a good-looking and well-defined construction. The `ErrorModal` might stay in two places:

1. where it is generated (in this case, the place would be the `form`), or
2. the highest-level component, given that it would be part of the UI, simply.

Both strategies are all right. Here the project employs the _second option_, with a common element (or fragment, as will be described soon) wrapping the existing parts, old and new. This serves the purpose of guaranteeing _one-root-element return_.

## 1.5. Managing the Error State

The next step would be making the `ErrorModal` more dynamic (besides styling it). A **state** may be used to control its visibility through simple form validation/verification and sending proper **_props_** down to the template-component with conditional appearance.

For example, this comes with designing a state value whose aim is to store an object to "fill" the modal – it has a "title" and "content" – which would start off empty, making some boolean test _false_, and, when filled, _true_.

Finally, to make the modal vanish away, this pattern allows setting the error-object state to null. Using `&&` operator is a way to display contents conditionally, as used here before, given that the language returns the condition after `&&` if the first one is false (in this case, the state-value, which may be `null`).

## 1.6. Fragments for a JSX limitation

JSX limitations: one root element at most, only, is allowed, which is due to JavaScript itself. How to to work that problem around:

-   wrap everything with a **`div`** (or any other element) or
-   use a **list** -- this way, unique keys are required.
-   create and use a `Wrapper` **component** (placed in a directory _Helpers_, for example)
-   use React **Fragments**

The `Wrapper` compoent would only serve the purpose of returning the children it has by means of `props.children`. Wrapper components, however, are best done automatically with `<Fragment>` (or `<React.Fragment>`) around the children, or with empty tags (`<>`), which is _not_ allowed for all project setups. Commonly, using auxiliary elements causes many unnecessary nesting.

Import a Fragment directly with:

```javascript
import { Fragment } from "react";

const Component = () => {
    return <Fragment>{/*...*/}</Fragment>;
};
```

**Conclusion** after using these two options: no extra unnecessary `div`s. However, better than defining a new component, React already does it with Fragments, which always work and always accept "key" attribute.

## 1.7. Introducing React Portals

> _Making things work is usually different than **creating good code**_.

Modal overlays are not meant to be nested inside other (non-root) elements, technically. An HTML structure is more **sound**, prone to **quality** when that inferior design doesn't stand a chance.

This happens when importing Modal component, for example, inside a component that triggers it. It's a not good idea to ignore semantic or accessibility issues, such as using `div`s as buttons or screen readers not reading the modal that is deep down the structure tree.

**_React portals_** helps with problems mentioned earlier; they simply get contents to be placed elsewhere, particularly when the code is moderately fixed relative to how it was designed.

## 1.8. Working with Portals

To use portal for higher-level components similar to modals, here are some tips:

1. set **`div`s** in the `index.html` file next to the `div#root` (inside `body` tag):

    ```html
    <!-- specify the kind of component goes here -->
    <div id="backdrop-root"></div>

    <!-- for sidedrawers, modals... -->
    <div id="overlay-root"></div>

    <!-- contents go here -->
    <div id="root"></div>
    ```

2. import another React library: `react-dom`
3. create portals (use special **JSX braces** for calling the method)

Obs.:

> React \[library\] is also compatible with React Native, but `react-dom` is specific to DOM-related "transposition".

Regarding the import name, use whatever one you'd rather pick, e.g., "ReactDOM", but that is not mandatory.

**_Using portals_**. This might be done on the Modal component, providing **abstraction** to every future call – avoiding the definition of new "subcomponents" on not-modal components.

"Portalling" comes with the `react-dom`'s method `createPortal`, which receives these as arguments:

1. **JSX code**, particularly element-components (props. can be passed to them), and
2. the **element** which it points to – it can be accessed by DOM'S API `document` and picked by ID

The second part resembles the `index.js` file, in which the `div#root` is selected.

You may want to separate the to-be-transported pieces of code into **new constants**, simplifying their reference when calling the method which creates a portal (see ahead).

In conclusion, _**portals**_ are really about **moving a component's content elsewhere**, preserving their positions in the React hierarchy, allowing them to **maintain the properties and behaviors** it inherited from the React tree. Some other use-case scenarioes are: **_tooltip_** & **_side-drawer_**.

## 1.9. Working with "ref"s

From the last topic: implenting portals to the modal helped the App to stay semanticly fine more accessible. **_Refs_**, in turn, **connect HTML element with the JavaScript code** – used, for example, when one wants to get rid of registering every keystroke in a state.

For that the developer must use `useRef` (after importing it). A **`ref` prop** can be added to any element, making React aware of the reference to the value returned by `useRef()`.

They are commonly used in conjuction with with **_inputs_**. Being also **dangerous**, so what is OK to do with _refs_.? It is a reference to the element itself, so avoid changing it headfirst.

-   **Reading _input_ data** is usually fine
-   Rarely use refs. to manipulate the DOM.

_Refs_ used occasionally and wisely does not represent a problem. They shorten code a little more.

The method responsible for creating _refs._ actually **return an object** with an prop `current`, accessible as a property, whose value simply is a real DOM element. The [official docs][docs-useref] (v. 16.8.0) writes:

> _`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component._

## 1.10. Controlled vs Uncontrolled Components

Using _refs_ makes an component to be called **_uncontrolled_**, given the fact that it _no longer_ has its **state managed directly by React**, meaning this: alterations through `ref` make a **direct change** to the _referenced_ element – no longer a React-specific thing. As noted before, **controlled components** have their internal state controlled by React.

##

<!-- Link references -->

[docs-useref]: https://reactjs.org/docs/hooks-reference.html#useref
