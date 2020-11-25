window.onload = () => {
  const React = require('react');
  const ReactDOM = require('react-dom');
  const Redux = require('redux');
  const { Provider, useDispatch, useSelector } = require('react-redux');
  const { configureStore, createSlice } = require('@reduxjs/toolkit');

  /**
   * Slice
   */
  const initialState = 0;
  const counterSlice = createSlice({
    initialState,
    name: 'counter',
    reducers: {
      increment: (state) => state + 1,
      decrement: (state) => state - 1,
    },
  });

  /**
   * Store
   */
  const store = configureStore({
    reducer: counterSlice.reducer,
  });

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
    const { increment, decrement } = counterSlice.actions;

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
