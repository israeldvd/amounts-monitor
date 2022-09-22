# 1. Amounts Monitor with React

## 1.1. Summary

- [1. Amounts Monitor with React](#1-amounts-monitor-with-react)
  - [1.1. Summary](#11-summary)
  - [1.2. Introduction](#12-introduction)
  - [1.3. Project's intents](#13-projects-intents)
  - [1.4. How to run it](#14-how-to-run-it)

## 1.2. Introduction

The current project aims at organizing some **expenses** (called here "_amounts_") someone may have and it is based off this [course][react-udemy] and it is open to PRs. That is what this repository is all about. As of the project start it was designed to be fully up-to-date with React 18 (the latest version of React up to this time).

## 1.3. Project's intents

Many concepts are to be developed in a React direction-path, some of which are:

-   A thorough introduction to React.js (What is it and why would you use it?)
-   All the core basics: How React works, building components with React & building UIs with React
-   Components, props & dynamic data binding
-   Working with user events and state to create interactive applications
-   A (thorough) look behind the scenes to understand how React works under the hood
-   Detailed explanations on how to work with lists and conditional content

## 1.4. How to run it

It was created using [Create React App][CRA-docs], whose repository is found in [this][CRA-repo] link. Thus, running it requires Node 14.0.0 or later version on your local development machine, followed by some steps to start a local server.

In this case, go to `amounts-monitor` (project) directory, make sure the file `package.json` is present there and run the app by means of these commands:

1. `cd amounts-monitor`
2. `npm install`
3. `npm start`

After which the (local) server will points the server IP and port (e.g., `localhost:3000`) that it is accessible from. The second command in order would install every dependency needed for this project, including `react-dom` and `react-scripts`.

[react-udemy]: https://www.udemy.com/course/react-the-complete-guide-incl-redux
[CRA-docs]: https://reactjs.org/docs/create-a-new-react-app.html#create-react-app
[CRA-repo]: https://github.com/facebook/create-react-app