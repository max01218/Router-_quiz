import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import SayHi from './SayHi';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ToDo from './ToDo';
import SignIn from './Signin';

ReactDOM.render(
  <Router>
    <div>
      <Route  exact path="/" component={SignIn}/>
      <Route  path="/about" >
      <ToDo/>
      </Route>
    </div>
  </Router>,
  document.getElementById('root'));
  reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

