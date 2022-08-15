# React basics and working with components

## Table of contents

- [React basics and working with components](#react-basics-and-working-with-components)
  - [Table of contents](#table-of-contents)
  - [Module Introduction](#module-introduction)
  - [What Are Components? And Why Is React All About Them?](#what-are-components-and-why-is-react-all-about-them)
  - [React Code Is Written In A "Declarative Way"!](#react-code-is-written-in-a-declarative-way)
  - [Creating a new React Project](#creating-a-new-react-project)
    - [Commands and directory](#commands-and-directory)
  - [Key terms](#key-terms)

## Module Introduction

For this module, the main focus would be establishing how to endeavor with:

- **Component-drive user interfaces**: building interactive and scalable UIs

Some key concepts needed onward are **React core syntax & JSX**, also working with **components** and with **data**, which explored even more.

A **project** will be built in the next sections, whose portrayed **purpose** is saving an user's expenses into a interactive _webpage_.

<!-- 25. What Are Components? And Why Is React All About Them? -->

## What Are Components? And Why Is React All About Them?

Building user interfaces are responsabilities of **HTML**, **CSS** and **JS**, but not only to them. That is also the case with React. One simple distinction \[see definitions at [key terms](#key-terms)] is.

> _React \[library\] makes building complex, interactive and reactive user interfaces simpler_.

As it can be seen, React is all about **components** -- all UI are made up of them. They are comparable to _reusable pieces (building blocks)_; basically the main benefits are summed up in:

- **Reusability**: don't repeat yourself
- **Separation of concerns**: avoid doing many things in one and same place (function)

Basically there is a work by **splitting big chunks of code into multiple small functions** for that aims.

<!-- 26. React Code Is Written In A "Declarative Way"! -->

## React Code Is Written In A "Declarative Way"!

How are they built? **HTML**, **CSS** (least important part) and **JS**, combined, provide React's functionalities.

> _React allows you to create re-usable and reactive components consisting of HTML and JavaScript (and CSS)_.
>
> _Define the desired target state(s) and let React figure out the actual JavaScript DOM instructions_

So React saves a great deal of a developer's time. Specifically, the expression **Declarative Way** can be further explained as follows:

> **Declarative** code means that we instruct JavaScript by telling it what we want it to get done, so we don't specify how to do it but what to get done and let JavaScript do all the heavy lifting for us. React is declarative as you mentioned because here we write code in the way React wants us so using its reactivity system like props and events but behind the scenes it does perform all the JavaScript logic that we earlier used to write in a non-framework pure JS app.

> With **declarative nature of React**, you use special _hooks_ and the reactivity system of React to get this done. Like if you want to get a reference of a DOM node, you have it via the _refs_ [which will be seen later in the course]. If you want to add a click listener on a button, you just need a special `onClick` prop to do that so manual registration of _event listener_ like we do in imperative way in JavaScript using `addEventListener`.

So the framework **describes**, but does not require **step-by-step instruction**.

<!-- 28. Creating a new React Project &
29. The Starting Project -->

## Creating a new React Project

For creation, the best way couldbe using a tool named `create-react-app`. This provides already a local auto-updating server and directories-and-code basis for an _app_. What is needed: key **transformation steps**.

To use it, a technology: **_NodeJS_** (runtime for JavaScript) -- this is not needed for React, but for running `create-react-app`. **Installation** is enough with default configurations (for MacOS and Windows, for example).

### Commands and directory

Go into a path in which the project should be created (use `cd`):

- run `npx create-react-app react-complete-guide` (this last is project's name)

This project directory could be used for **all projects** developed, but it should be noted that this process put all modules together into one single place.

Installing the project setup from external source (does not contain `node_modules` or `package-lock.json`): run the commands

- `npm install` (already included in the overall starting project) and
- `npm start`, as before, to start the server with the App.

<!-- Extra: key terms -->

## Key terms

Some definitions are very usefully when building React _websites_. They follow:

- **Responsive**: adapting layouts to a variety of screen and window sizes.

- **Interactive**: elements that react to your actions on the site.

- **Reactive**: automatically checking and updating data from the server without refreshing the website.

- **Complex**: composed of different simple elements like our components in a way that it eases the interactions between different parts of our application to drive the business logic of the application.
