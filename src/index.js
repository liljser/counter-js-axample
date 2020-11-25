window.onload = () => {
  const React = require('react');
  const ReactDOM = require('react-dom');
  const { useState } = React;

  function App() {
    return (
      <React.Fragment>
        <Counter />
      </React.Fragment>
    );
  }

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <section className='counter'>
        <h2>Counter</h2>
        <button id='decrement' onClick={decrement}>
          Decrement
        </button>
        <span id='count'>{count}</span>
        <button id='increment' onClick={increment}>
          Increment
        </button>
      </section>
    );

    function increment() {
      setCount((prevCount) => prevCount + 1);
    }
    function decrement() {
      setCount((prevCount) => prevCount - 1);
    }
  }

  const container = document.getElementById('app');
  ReactDOM.render(<App />, container);
};
