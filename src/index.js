window.onload = () => {
  const Redux = require('redux');
  const {
    configureStore,
    createAction,
    createReducer,
  } = require('@reduxjs/toolkit');

  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');
  const countElement = document.getElementById('count');

  /**
   * Actions
   */
  const increment = createAction('INCREMENT');
  const decrement = createAction('DECREMENT');

  /**
   * Reducer
   */
  const initialState = 0;
  const counterReducer = createReducer(initialState, {
    [increment]: (state) => state + 1,
    [decrement]: (state) => state - 1,
  });

  /**
   * Store
   */
  const store = configureStore({
    reducer: counterReducer,
  });
  store.subscribe(render);

  /**
   * Main
   */
  render();

  incrementButton.addEventListener('click', () => {
    store.dispatch(increment());
  });

  decrementButton.addEventListener('click', () => {
    store.dispatch(decrement());
  });

  function render() {
    countElement.innerText = store.getState().toString();
  }
};
