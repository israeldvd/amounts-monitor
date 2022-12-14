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
  - [Appendix tools](#appendix-tools)
    - [Bulk-renaming CSS file references](#bulk-renaming-css-file-references)
    - [Changing direct references to className](#changing-direct-references-to-classname)

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

Defining two or more components per file ??? instead of limiting the number to one ??? it's generally a good idea, but in that case two components in one is fine, specially for styling porposes, as this new _div-form_-component is only used in your project's component.

Comments on this **_styled component_**:

1. First option is pretty much like calling a **common component**, and everything it entails is available, such as:

    - setting other classes by `className`, meaning there is no need of setting permanent classes (these are set by the definition of the component, not when calling it).

2. Another approach is as follows: **setting props to the styled component** ??? the props is then set as argument to a function which sets the property value dynamically, e.g., using `${props => pros.invalid}` based on a dynamic state named `invalid`.

**Media queries**, in their turn, are totally fine (example: using `width: auto` for button in mobile devices).

<!-- 80. Using CSS Modules &
81. Dynamic Styles with CSS Modules
 -->

## 1.7. Using CSS Modules and dynamic styles with them

Using CSS modules also permits **scoping styles** to only certain component, making sure the _import_ is effective only where it is done. And they require some steps (here, they aim to add **dynamic classes**):

1. choose a project that support it (e.g., CRA does)
2. [name every style][bulk-file-ref] file as `[name].module.css`
3. import and give it any name wanted: `import my_styles from '...'`
4. then [apply this import][regex-for-classname] to a `className`, refering to it as an object (whose properties match **CSS classes**): `className={my_styles.button}` (or use brackets for accessing a property)

The final **class names** are computer-generated, **uniquely-identified** as the previous approach, but there is still some readableness to it. In other words, as the CSS module is used, and its import is called, all of its classes have their "original" names automatically changed to something else, but still distinguishable.

By calling the **import reference**, it is possible to render dynamic classes with the aid of _template literals_, for example. Besides, the **ternary operator** containing conditional output may optimize the process. When rendering all present classes, the final outputs are "converted class names" ??? identifiers referenced simply through `my_styles["class-name"]`, taking the steps given earlier.

## Appendix tools

[appendix-tools]: #appendix-tools

Sometimes it is useful to refactor a code or redesign segments of a program, for which simple tools or means turn out to be useful. When renaming pieces of code, in VSCode, for example, the reader may turn to all-files search; check availables shortchuts (in this case, the default is `Ctrl + Shift + F`). Activating Regular Expressions, in turn, may be triggered by `Alt + R`.

Be aware that this may do **unwanted actions** such as renaming not-to-be-renamed files or font imports. Make sure to exclude files from this action or use another RegEx.

### Bulk-renaming CSS file references

[bulk-file-ref]: #bulk-renaming-css-file-references

For that task, a simple regex substitution in a IDE which supports it is enough:

-   replace `import\s*(.+?)(?<!module).css`
-   with `import styles from $1.module.css`

Obs.: some search procedures may not inspect line breaks (`\n*`) simply with `\s*`, so this could be replaced by `[\s\n]*`.

### Changing direct references to className

[regex-for-classname]: #changing-direct-references-to-className

Whilst updating the CSS modules reference, it is also necessary to call the reference to it. You could achieve a change for all `className` in the code by replacing every regular expression

-   `(?<=className=)\s*("[^"]+")` with
-   `{styles[$1]}`

where needed, actually if the import name reference is `styles`. Note that this task works only for **string-delimited classes**, thus dynamic refereces wouldn't changed by virtue of it.
