window.onload = () => {
  const Redux = require('redux');

  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');
  const countElement = document.getElementById('count');

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
