# 1. Other design styles and constructions

## 1.1. Table of contents

- [1. Other design styles and constructions](#1-other-design-styles-and-constructions)
  - [1.1. Table of contents](#11-table-of-contents)
  - [1.2. Module Introduction](#12-module-introduction)
  - [1.3. Designing Parts of a Form](#13-designing-parts-of-a-form)
  - [1.4. Adding The "ErrorModal" Component](#14-adding-the-errormodal-component)

## 1.2. Module Introduction

Constructing an app should be possible with every concept learned so far. To extend this project, some constructions are a helping hand at improving and relieving many design problems; for example, a form input with a validation logic is not a thing to be discarded. What is new there: a **feedback modal**. And that's what this eigth branch proposes.

## 1.3. Designing Parts of a Form

Now, something not convered directly before. For **writing richer `form`s** and their stick-to-inputs labels, `htmlFor` is used instead of `for` as in plain HTML code. Acknowledging it improves accessibility for screen readers is the main point here.

**Designing a button component** as new component: simply a button could be returned without any new details, but it is important to not miss its `onClick` property. As that function will be imported somewhere else later, it's useful to add the same `onClick` name that comes by _props_, meaning the following: the function it executes (in the "instance" of Button component) is the same referenced by the element's (in the "class-component" of button). Some points to consider when doing it:

-   An approach for organizing the project: arranging them as **separate UI-components** (directory UI, alongside Card, for example)
-   You may use a **fallback value** for "type" property passed in by _props_, as demonstrated using the OR operator: `{props.type || "button"}`. That prevents it loses its meaning.

## 1.4. Adding The "ErrorModal" Component

Adding `ErrorModal`, a (new) component: it is hopefully reusable in the app as a whole (similarly to `Button` in the same component). The Modal component, as commonly used, acts resembling a **template** for future calls, allowing dynamic **title** and **message body** for example.

Its semantic structure of it could be based on a `header`, `div` and `footer`, a good-looking and well-defined construction. The `ErrorModal` might stay in two places:

1. where it is generated (in this case, the place would be the `form`), or
2. the highest-level component, given that it would be part of the UI, simply.

Both strategies are all right. Here the project employs the _second option_, with a common element (or fragment, as will be described soon) wrapping the existing parts, old and new. This serves the purpose of guaranteeing _one-root-element return_.
