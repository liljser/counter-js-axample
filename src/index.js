window.onload = () => {
  const React = require('react');
  const ReactDOM = require('react-dom');
  const Redux = require('redux');
  const { Provider, useDispatch, useSelector } = require('react-redux');

  /**
   * Constants
   */
  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREMENT';

  /**
   * Reducer
   */
  const initialState = 0;
  function counterReducer(state = 0, action) {
    const { type, payload } = action;
    switch (type) {
      case INCREMENT:
        return state + 1;
      case DECREMENT:
        return state - 1;
      default:
        return state;
    }
  }

  /**
   * Action Creators
   */
  function increment() {
    return {
      type: INCREMENT,
    };
  }

  function decrement() {
    return {
      type: DECREMENT,
    };
  }

  /**
   * Store
   */
  const store = Redux.createStore(counterReducer);

  /**
   * React
   */
  function App() {
    return (
      <React.Fragment>
        <Counter />
      </React.Fragment>
    );
  }

  function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state);

    return (
      <section className='counter'>
        <h2>Counter</h2>
        <button id='decrement' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <span id='count'>{count}</span>
        <button id='increment' onClick={() => dispatch(increment())}>
          Increment
        </button>
      </section>
    );
  }

  const container = document.getElementById('app');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    container
  );
};
