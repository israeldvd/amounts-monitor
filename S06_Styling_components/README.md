# 1. Styling React Components

## 1.1. Table of contents

- [1. Styling React Components](#1-styling-react-components)
  - [1.1. Table of contents](#11-table-of-contents)
  - [1.2. Module Introduction](#12-module-introduction)
  - [1.3. Setting Dynamic Inline Styles](#13-setting-dynamic-inline-styles)
  - [1.4. Setting CSS Classes Dynamically](#14-setting-css-classes-dynamically)
  - [1.5. Introducing Styled Components](#15-introducing-styled-components)
  - [1.6. Styled Components, Dynamic Props and Media Queries](#16-styled-components-dynamic-props-and-media-queries)
  - [1.7. Using CSS Modules and dynamic styles with them](#17-using-css-modules-and-dynamic-styles-with-them)

<!-- 74. Module Introduction -->

## 1.2. Module Introduction

React gives some **styling options** when working with styles scope. Up to this points, this project has evolved to present a nice-looking webpage, while just importing the CSS files directly. However, these imports were **not limited to the file importing it**. This module presents an overview on how to make the most of it by some approaches.

<!-- 75. Setting Dynamic Inline Styles -->

## 1.3. Setting Dynamic Inline Styles

**In-line styles** simply concern setting them in an element. In this case, they are implemented hand in hand with preventing empty-form submission (return empty). Those are hard-coded lines which can simply overwrite current styles; this is an alternative, but not ideal.

It implements the logic verification by ternary operator inside the JSX insertion (to tweak it, remember to use an **object** every it is done and **camel case** for some properties). For instance, a **warning color** is implemented by a state which alters a `className`. To reset the warning signs, the code could simply set another state (default) to every key stroke.

<!-- 76. Setting CSS Classes Dynamically -->

## 1.4. Setting CSS Classes Dynamically

Adding **dynamic classes**: JSX syntax still plays the major role, but now the styles are a responsibility of classes, e.g., "invalid". These "controls" might be implemented by use of states (boolean ones, for example). Then validation comes into play according to `event` objects, as the developer wishes.

The big **takeaway** from these styling needs: there are at least three approaches with allows or not class scoping to a component:

1. global usage with just **file import**;
2. using packages such as **styled-components**;
3. getting the most of CSS modules, especially if the library allows it.

<!-- 77. Introducing Styled Components -->

## 1.5. Introducing Styled Components

Adding **styles to components locally** comes mainly with 2 approaches:

1. install this package named after styled components, "styled components", or
2. through CSS Modules (see next section)

Using this styled-components package, some steps required are: import styles from attacked components and use **_tagged template literals_** (JS feature with which a function derives its _arguments_).

Adding styles to these elements (from the libraries) can be done by means of these "special" template literals.

-   direct styles are applied to the element itaelft;
-   pseudo-selectors would have a special syntax-trick from the package: `&`, which refers to the element itself
    -   e.g., `&:hover` as in a CSS file.

Then this line breaks are useful to simulate a common CSS file. Also, using this package yields somewhat "strange" **class names** results, because those references are **still global**, but unique-prone.

<!-- 78. Styled Components & Dynamic Props &
79. Styled Components & Media Queries -->

## 1.6. Styled Components, Dynamic Props and Media Queries

Defining two or more components per file – instead of limiting the number to one – it's generally a good idea, but in that case two components in one is fine, specially for styling porposes, as this new _div-form_-component is only used in your project's component.

Comments on this **_styled component_**:

1. First option is pretty much like calling a **common component**, and everything it entails is available, such as:

    - setting other classes by `className`, meaning there is no need of setting permanent classes (these are set by the definition of the component, not when calling it).

2. Another approach is as follows: **setting props to the styled component** – the props is then set as argument to a function which sets the property value dynamically, e.g., using `${props => pros.invalid}` based on a dynamic state named `invalid`.

**Media queries**, in their turn, are totally fine (example: using `width: auto` for button in mobile devices).

<!-- 80. Using CSS Modules &
81. Dynamic Styles with CSS Modules
 -->

## 1.7. Using CSS Modules and dynamic styles with them

Using CSS modules also permits **scoping styles** to only certain component, making sure the _import_ is effective only where it is done. And they require some steps (here, they aim to add **dynamic classes**):

1. choose a project that support it (e.g., CRA does)
2. name every style file as `[name].module.css`
3. import and give it any name wanted: `import my_styles from '...'`
4. then apply this import to a `className`, refering to it as an object (whose properties match **CSS classes**): `className={my_styles.button}` (or use brackets for accessing a property)

The final **class names** are computer-generated, **uniquely-identified** as the previous approach, but there is still some readableness to it. As the CSS module is used, and its import is called, all these classes have their names changed for the purpose mentioned before.

By calling the **import reference**, it is possible to render dynamic classes by template literals, for example. Besides, the **ternary operator** with conditional output may optimize the process. When rendering the classes, the final outputs are "converted class names", identifiers referenced simply through `imported_styles["class-name"]`.
