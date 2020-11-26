import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Welcome from './Components/Welcome.jsx';
import Clock from './Components/Clock.jsx';
import { BrowserRouter as Router } from "react-router-dom";


/** origin version */
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


/** 1.0 Introducing JSX - Embedding Expressions in JSX*/
// const name = 'Luna Huang';
// const element = <h1>Hello, {name}</h1>

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );



/** 1.1 Introducing JSX - Embedding Expressions in JSX - Using function */
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// };

// const user = {
//   firstName: 'Luna',
//   lastName: 'Huang'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );




/** 3.1 Rendering Elements */
// const element = <h1>Hello, React</h1>;


/** 4.1 Rendering Components */
// const element = <Welcome name="Luna" />;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

/** 4.1 Composing Components */
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );



/** 5.1 State and Lifecycle */

  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
  );





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
