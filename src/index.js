import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Offers from './Offers';
import Suggest from './Suggest';
import Task from './Task';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Offers />
  </React.StrictMode>,
  document.getElementById('offers')
);
ReactDOM.render(
  <React.StrictMode>
    <Suggest />
  </React.StrictMode>,
  document.getElementById('suggest')
);
ReactDOM.render(
  <React.StrictMode>
    <Task />
  </React.StrictMode>,
  document.getElementById('task')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
