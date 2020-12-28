import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  // Create the count state.
  const [count, setCount] = useState(100);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Snowpack + Electron</h1>
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/other">other</Link>
          </li>
        </ul>
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return (
                <div>
                  <h2>Home page</h2>
                </div>
              );
            }}
          />
          <Route
            path="/about"
            exact
            render={() => {
              return (
                <div>
                  <h2>About page</h2>
                </div>
              );
            }}
          />
          <Route
            path="/other"
            exact
            render={() => {
              return (
                <div>
                  <h2>Other page</h2>
                </div>
              );
            }}
          />
        </Switch>
      </header>
    </div>
  );
}

export default App;
