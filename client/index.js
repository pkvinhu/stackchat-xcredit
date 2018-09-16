// Whoa?!? What is this?
// Thanks to the style-loader and css-loader, webpack allows us import css,
// and then auto-magically injects a <style> tag onto the DOM!
// Wowzers! Check out the webpack.config.js to see how to add them!
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Main } from './components';
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
<<<<<<< HEAD
    <Router>
      <Main />
    </Router>
=======
  <Router>
    <Main />
  </Router>
>>>>>>> 9f099c8fb81fe403e735b0ea9da638d4441e8c88
  </Provider>,
  document.getElementById('app')
);