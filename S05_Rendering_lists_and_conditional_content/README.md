# 1. Rendering Lists and Conditional Content

## 1.1. Table of contents

- [1. Rendering Lists and Conditional Content](#1-rendering-lists-and-conditional-content)
  - [1.1. Table of contents](#11-table-of-contents)
  - [1.2. Module Introduction](#12-module-introduction)
  - [1.3. Rendering Lists of Data](#13-rendering-lists-of-data)
  - [1.4. Using Stateful Lists](#14-using-stateful-lists)

<!-- 63. Module Introduction -->

## 1.2. Module Introduction

Now the project is supposed to **work with really dynamic output**, providing views based on **defined conditions**. It would also be improved to receive **lists of contents**; however, all components from this project already built in this feature.

<!-- 64. Rendering Lists of Data -->

## 1.3. Rendering Lists of Data

As done before, **list-mapping** (using `map`) is an important tool to get an array of JSX elements, based on another list – in this case, a list of "amounts" (priced expenses). Then, **rendering multiple elements** becomes way more dynamic.

Telling React to **render a list of items** is going to render all of them side by side automatically.

-   _Conclusion_: with that resource, the elements created by means of list mapping are **rendered according to it**, thus, any change to the "original" (generator) list **reflects back** to the components list.

-   _Obs_.: ignore any _warning_ if it is the first time required to use a **key** – basically all children have their own.

<!-- 65. Using Stateful Lists -->

## 1.4. Using Stateful Lists

Adding new item (to insert in the items list) isn't effective without states – thus **stateful lists** emerge. For rendering the to-be-dynamic list [of components], **use state** for the data — even dummy ones —, particularly placing it outside the App's declaration – e.g., `const DUMMY = [...]`.

One thing to **remember**: to update a state based off an old snapshot, use the function form. This would be done to update the list (by the method provided by the `useState`, as seen before).
