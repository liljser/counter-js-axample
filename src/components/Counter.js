import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import counterSlice from '../redux/slice/counterSlice';

export default function Counter() {
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
