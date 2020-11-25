window.onload = () => {
  const Redux = require('redux');
  const { configureStore, createAction } = require('@reduxjs/toolkit');

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
  function counterReducer(state = 0, action) {
    const { type, payload } = action;
    switch (type) {
      case increment.type:
        return state + 1;
      case decrement.type:
        return state - 1;
      default:
        return state;
    }
  }

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
