# React basics and working with components

## Table of contents

- [React basics and working with components](#react-basics-and-working-with-components)
  - [Table of contents](#table-of-contents)
  - [Module Introduction](#module-introduction)
  - [What Are Components? And Why Is React All About Them?](#what-are-components-and-why-is-react-all-about-them)
  - [React Code Is Written In A "Declarative Way"!](#react-code-is-written-in-a-declarative-way)
  - [Creating a new React Project](#creating-a-new-react-project)
    - [Commands and directory](#commands-and-directory)
  - [Analyzing a Standard React Project](#analyzing-a-standard-react-project)
    - [Syntax](#syntax)
    - [Importing](#importing)
    - [App and methods](#app-and-methods)
  - [Introducing JSX](#introducing-jsx)
  - [How React Works](#how-react-works)
  - [Building a First Custom Component](#building-a-first-custom-component)
  - [Writing More Complex JSX Code](#writing-more-complex-jsx-code)
  - [Adding Basic CSS Styling](#adding-basic-css-styling)
  - [Outputting Dynamic Data & Working with Expressions in JSX](#outputting-dynamic-data--working-with-expressions-in-jsx)
  - [Passing Data via "props"](#passing-data-via-props)
  - [Adding "normal" JavaScript Logic to Components](#adding-normal-javascript-logic-to-components)
  - [Splitting Components Into Multiple Components](#splitting-components-into-multiple-components)
  - [The Concept of "Composition" ("children props")](#the-concept-of-composition-children-props)
  - [A First Summary](#a-first-summary)
  - [A Closer Look At JSX](#a-closer-look-at-jsx)
  - [Key terms](#key-terms)
  - [Appendix](#appendix)
    - [Using self-closing tags](#using-self-closing-tags)
    - [A Card component](#a-card-component)

## Module Introduction

For this module, the main focus would be establishing how to endeavor with:

- **Component-drive user interfaces**: building interactive and scalable UIs

Some key concepts needed onward are **React core syntax & JSX**, also working with **components** and with **data**, which explored even more.

A **project** will be built in the next sections, whose portrayed **purpose** is saving an user's expenses into a interactive _webpage_.

<!-- 25. What Are Components? And Why Is React All About Them? -->

## What Are Components? And Why Is React All About Them?

Building user interfaces are responsabilities of **HTML**, **CSS** and **JS**, but not only to them. That is also the case with React. One simple distinction \[see definitions at [key terms][key-terms] is.

> _React \[library\] makes building complex, interactive and reactive user interfaces simpler_.

As it can be seen, React is all about **components** — all UI are made up of them. They are comparable to _reusable pieces (building blocks)_; basically the main benefits are summed up in:

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

To use it, a technology: **_NodeJS_** (runtime for JavaScript) — this is not needed for React, but for running `create-react-app`. **Installation** is enough with default configurations (for MacOS and Windows, for example).

### Commands and directory

Go into a path in which the project should be created (use `cd`):

- run `npx create-react-app react-complete-guide` (this last is the name of the project)

This project directory could be used for **all projects** developed, but it should be noted that this process put all modules together into one single place.

Installing the project setup from external source (does not contain `node_modules` or `package-lock.json`): run the commands

- `npm install` (already included in the overall starting project) and
- `npm start`, as before, to start the server with the App.

<!-- 30. Analyzing a Standard React Project -->

## Analyzing a Standard React Project

The place React code will be built is the path `project/src/`. There are, in this particular place, two _JavaScript_ files and one _css_ file. Ultimately, when building the app, there is going to be **JavaScript coding**.

"The **first file to execute** is `index.js`", they would say — actually its transformed version is executed first. **Under the hood** there are many actions similar to that.

### Syntax

There seems to be an invalid syntax whilst analysing the code, but this is just an false supposition.

- _When importing CSS-code file into JavaScript, that is possible?_
- _Using html inside a `.js` file, is that ok?_

But here all of that work out finely. Now one requirement would be: just **aware** that all these codes are **runs in all browsers**.

**Two react dependencies**: they are just react library split across multiple packages; so in the `package.json` file t.

It should also be found other code based upon **JSX syntax**; this allows writing _HTML_ into _JS_ code.

### Importing

Connecting two files (`export default App`) is made possible here. For example, **importing dom** helps connecting to the `index.html` file, taking the "root".

- `createRoot`: entry point related to `public/index.html`, in this case.

- there is a `div` there (`#root`), where there is an attachment of react-driver UI.

Other import is made by `import App`, which just bring the `App.js` file (`App` is a component)

- `./App` means "in-the-same-folder App"

Obs.: the **file extension** is **not required** for own files or 3rd library files.

### App and methods

`render`: tells what should be rended in that `div`

In the `App.js` (note the capitalized 'A'), it should be mentioned the main function name (`App()`): it's written capitalized and with the syntax mentioned [before](#syntax).

<!-- 31. Introducing JSX -->

## Introducing JSX

**JSX** stands for **JavaScript XML** (HTML is XML in the end, that could be said). **Developer-friendly JavaScript** code is turned into **browser-friendly code** — a transformation occurs, as mentioned in sections before.

This friendly code runs in the browser, which, after loading the app, contains also React library's code, which could explain the **complex code** in the `source` tab.

<!-- 32. How React Works -->

## How React Works

A **component** is basically a custom HTML element. `App()` is just a function which can be viewed as a **custom element**; in which case, it is the first component. Its HTML code, in addition, is what is rendered in the page.

**Remember**:

- React runs **DOM instructions** which update what's visible
- We just write/show **what is needed in the end** (end result).

With common HTML-and-JavaScript-only tools, even to insert a **new paragraph element** we would need to make a couple of steps. They are (**compare** with React implementation):

1. accessing the DOM,
2. changing the respective text (or HTML) contents and
3. append a new element into another one.

Now options are simpler — again, **declarative**, not _imperative_, instructions are tooking place.

<!-- 33. Building a First Custom Component -->

## Building a First Custom Component

Common practice: ew components in new file — dozens or hundreds of file is common in React projects. There is a **_component tree_**:

- "root component": `App.js` (_only that is rendered directly into the HTML page_)
- other components "below" that (e.g., `<Header />` and `<Tasks />` with many `<Task />`)

_React name convention_: it is common practice to write a file name starting with capital letter, e.g., `WordoneWordtwo` (multiple "words" are present). Remember:

> _a React component is just a JavaScript function_.

In the new created file, it is also a good practice to write the **component's name** having the same name as its file. And to use it, there is a need to **export**.

**_Importing a component_** sounds like normal importing, but using it requires the use of it **as an HTML element** and **capitalization**. See the example below.

```javascript
function App() {
  return (
    <div>
      {/* something */}
      <ExpenseItem></ExpenseItem>
    </div>
  );
}
```

<!-- 34. Writing More Complex JSX Code -->

## Writing More Complex JSX Code

Now it's time for improving a component's code for the sake of writing **more complex JSX code**.

**_JSX code must have one parent/root element_**. For a component's _return_, if the HTML code is broken into many lines, there could be an statement inside parenthesis for **readability** and **syntax** purposes; for example, `return <h1>Title</h1>;` is ok, but not nesting many `div`s into multiple lines after it without parenthesis (check code snapshot for example).

**_Component files_**. Usually, there is a sense into building one component per file.

<!-- 35. Adding Basic CSS Styling -->

## Adding Basic CSS Styling

The file, e.g. `FileName.css`, typically comes next to a component. It should contain typical, standard CSS code (use any selectors). Besides, there is no need here for explaining CSS details.

**_Importing_** is made by `import './FileName.css'`.

**_Class-naming JSX elements_**. It better of not to type `class` but `className` — "class" a reserved word --, because this coding is not really HTML; here it is **JSX syntax**.

Adding fonts, for example: visit some options [Anek Latin and Finlandica Google Font's page](https://fonts.google.com/share?selection.family=Anek%20Latin:wght@300;400;600;700%7CFinlandica:ital,wght@0,400;0,500;0,700;1,400) then it **import** it accordingly.

<!-- 36. Outputting Dynamic Data & Working with Expressions in JSX -->

## Outputting Dynamic Data & Working with Expressions in JSX

Adding more than just HTML to the component. Now what's left is JavaScript code. For example, because it is possible to **add JS code into a component**, a new `Date` object can be created in the `function`'s scope definition.

Open and closed **curly braces** allow **insertion of JavaScript code** (i.e., _dynamic output_) into the component files. Obs.: outputting a `Date` object should be made by transforming \[a copy of\] it into a string first.

**_Current vs. next steps_**. For now, no longer hard-coded text needs to be used; instead, _dynamic "placholders"_ (that is, result of calculation, HTTP request, value stored in constant/vars or database) are better off. Future changes would make the **creation of new and different data** possible.

<!-- 37. Passing Data via "props" -->

## Passing Data via "props"

**_Reusing a component_**. This is already possible (displaying the same data comes with repeating the "element", e.g., `<AmountItem></AmountItem><AmountItem></AmountItem>`). But, more importantly, there needs to be a way to use components with parameters: `props`.

**_Passing data via "props"_**. There is a problem with previous additions:

> _Components can't just use data stored in other components_

Then comes another concept: attributes into custom components, called `props` (**_properties_**) — accessed as an property of an object. As a result, each **component can receive and show data** from its "surrounding" (outside).

Accessing these **properties** is made by **_parameters_** (inside the function's parameters). An object, from the custom elements, is _passed by React into the component-function_. Typically one names the argument passed in this way: `props`.

- Again, accessing is made by key-value syntax (e.g. `props.title` or `props.itemsList`).
  - The **key** has to be name chosen for attribute.
  - The **value** matches the values of the _key_'s reference.

In summary, **_props_** (used all the time) is a super-useful concept because they: _allow one to reuse a component by passing data from another one to this itself_ — thus it also becomes more configurable.

As additional note, mapping is a way to [render multiple components](https://reactjs.org/docs/lists-and-keys.html#rendering-multiple-components), in which case **unique keys** should be given to each array element — that means using its index only if needed.

> _A good rule of thumb is that elements inside the `map()` call need keys_.

<!-- 38. Adding "normal" JavaScript Logic to Components -->

## Adding "normal" JavaScript Logic to Components

Up to this time, some **tips and suggestions** arise from the work:

- **_Props do not to be be hard-coded_**. Usually the developer wants to pass dynamic data into them.

- **_Changing date look_** with built-in methods for `Date` objects and place them in a pretty format according to a defined HTML structure

  - `toLocaleString()`: output a **date string** in human-readable format, receiving two parameters: **locales** and **options**
  - `getFullYear()`: get the 4-digit-number **year** as a value from object


<!-- 39. Splitting Components Into Multiple Components -->

## Splitting Components Into Multiple Components

**Building a new component**: as a general rule, this could be done when:
  - things are getting a little too **big**,
  - some parts are in need of **specific "configurations"**, such as styling, code (constants and variables) and/or
  - the HTML elements are related in some **semantic** way

In this project, there could be a **calendar** component. The following steps are very similiar to previous section on [building a new component][first-component].

One more additional observation, which might have been overlooked:

> When a component element doesn't have a child, it can be written with **self-closing tag**

See [regex replacing][appendix-tags] to replace those tags not yet simplified.

**_Nesting and prop_** (_component tree_): data is _forwarded_ through multiple components — that is totally fine, because _props_ work this way. For example, a **child component** may pass on a **parent's props** into its some component of its own.

Of course, **styling** it is not a bad idea. Generally, one may think of creating a new file `Cmp.css` for the component `Cmp.js`, as done [before][add-css-style].

<!-- 40. The Concept of "Composition" ("children props") -->

## The Concept of "Composition" ("children props")

So many **components** were built so far. Generally, **composition** comes into play whenever a component acts like an aggregate for styles and other definitions. Technically, it is called a **_Wrapper component_**.

To use such component (named `<Card>`, for example — see [meaning][card-component]) there is a reserved word for `props`: **`children`**. With that, `props.children` acts like a substitute for all contents between open-and-closing tag of the main component (`Card`). Here it goes some example code — see the possible need of retrieving and reusing **class names**:

```javascript
function Card(props) {
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>
}
```

Using this technique provides removal of **code duplication**, ocurring specially with alike components or alike styles-of-these. For complex code, it may also shorten HTML-code usage. In other word, this alludes to the principle of **DRY** (Don't repeat yourself).

<!-- 41. A First Summary -->

## A First Summary

This project still is pretty much **static** -- no interaction with the application (see future topics). Some **topics** covered by it:

- JSX syntax
- Working with components and
- with data (using _props_).

At the browser-rendered page, the react-specific code is not shown, but each component is used for the creation of elements.

<!-- 42. A Closer Look At JSX -->

## A Closer Look At JSX

Importing `react` (the package) in the past was a common thing. Nowadays JSX is broadly used: it is the syntactic sugar for `React.createElement()`, which would receive two or more arguments:

- the string representation of an **element**, e.g., `'div'`
- an object which would describe it (e.g., his **attributes**)
- one or more `children` having the same syntax (thus, a tree), if there is any.

In view of this, one comes to the conclusion that the old way was **a bit harder to read**. **Under the hood**, the code is transformed into the "hard-to-read approach"; this is _still_ present. Besides that, some projects would contain **import to the `react` library** (and use the `React` object).

React is still used _under the hood_. The structure, whose outmost parent is supposed to be unique or the-only-found sibling, might explain why there is a need for using only **one element per return statement**.

<!-- Extra: key terms -->

## Key terms

Some definitions are very usefully when building React _websites_. They follow:

- **Responsive**: adapting layouts to a variety of screen and window sizes.

- **Interactive**: elements that react to your actions on the site.

- **Reactive**: automatically checking and updating data from the server without refreshing the website.

- **Complex**: composed of different simple elements like our components in a way that it eases the interactions between different parts of our application to drive the business logic of the application.

## Appendix

### Using self-closing tags

Use this RegEx, if needed, to find and replace occurrences of **not-self-closing React-component element** (especially those starting with capital letter):

> `>\s*</\s*[A-Z]\w*\s*>`
> to be replaced with `/>`


### A Card component

**_Card_** is a common term for a container-look pieces which have something in common, such as rounded-corners — in the web, having _drop shadows_ and stylings like those —, usually resembling a physical card.

[card-component]: #a-card-component
[appendix-tags]: #using-self-closing-tags
[add-css-style]: #adding-basic-css-styling
[first-component]: #building-a-first-custom-component
[key-terms]: #key-terms