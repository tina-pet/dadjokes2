import React, { useState } from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import './jokes.js';

import { jokes } from './jokes.js';
import { Joke } from './Joke/index.jsx';

const App = () => {
  return jokes.map((joke) => {
    return Joke(joke);
  });
};

render(<App />, document.querySelector('#app'));
