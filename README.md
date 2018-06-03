# Blog Store

A React Redux blog store where users can use CRUD operations by creating a blog, viewing a list of blogs, seeing a single blog and deleting a blog

The repository is written in [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [NPM](https://www.npmjs.com/) as the package manager.

**To start the app:**
- To install dependencies, run: `npm install`
- To run: `npm run start` (by default this starts on [localhost:8080](localhost:8080))

## Vision

The next step in my react redux journey... I decided to implememt a simple CRUD app.  I wanted a user to be able to create, read and delete some data.  Again I wanted to be able to create and pass around data via actions and update store data via dispatchers but with the added functionality of deleting data and browser routing with react-router-dom

## What I learnt

* How to set up a redux store and middleware that again users redux-promise
* Basic styling with [Materialize Css](https://materializecss.com/)
* How to create a form with redux-form and create validations to display to the user
* Successfully implemented the full CRUD cycle
* BrowserRouter to render different components/data depending on where the user was in the app and to take the user to different pages depending on flow