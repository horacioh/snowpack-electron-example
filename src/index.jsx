import { h, render } from 'preact';
import 'preact/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.js';
import './index.css';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
