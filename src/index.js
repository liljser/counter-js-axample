window.onload = () => {
  const Redux = require('redux');
  const {
    configureStore,
    createAction,
    createReducer,
    createSlice,
  } = require('@reduxjs/toolkit');

  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');
  const countElement = document.getElementById('count');

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
  store.subscribe(render);

  /**
   * Main
   */
  render();

  incrementButton.addEventListener('click', () => {
    const { increment } = counterSlice.actions;
    store.dispatch(increment());
  });

  decrementButton.addEventListener('click', () => {
    const { decrement } = counterSlice.actions;
    store.dispatch(decrement());
  });

  function render() {
    countElement.innerText = store.getState().toString();
  }
};
