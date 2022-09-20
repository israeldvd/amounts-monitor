# 1. Styling React Components

## 1.1. Table of contents

- [1. Styling React Components](#1-styling-react-components)
  - [1.1. Table of contents](#11-table-of-contents)
  - [1.2. Module Introduction](#12-module-introduction)
  - [1.3. Setting Dynamic Inline Styles](#13-setting-dynamic-inline-styles)
  - [1.4. Setting CSS Classes Dynamically](#14-setting-css-classes-dynamically)

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
