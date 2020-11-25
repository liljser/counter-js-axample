window.onload = () => {
  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');

  incrementButton.addEventListener('click', () => {
    incrementCount();
  });

  decrementButton.addEventListener('click', () => {
    decrementCount();
  });

  function incrementCount() {
    const countElement = document.getElementById('count');
    const count = Number(countElement.innerText);
    countElement.innerText = count + 1;
  }

  function decrementCount() {
    const countElement = document.getElementById('count');
    const count = Number(countElement.innerText);
    countElement.innerText = count - 1;
  }
};
