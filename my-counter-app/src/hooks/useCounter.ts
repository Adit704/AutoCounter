import { useReducer, useEffect, useCallback } from 'react';
import { counterReducer, initialState } from '../store/counterReducer';

export function useCounter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment = useCallback(() => {
    dispatch({ type: 'INCREMENT' });
  }, []);

  const decrement = useCallback(() => {
    dispatch({ type: 'DECREMENT' });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  const toggleAutoIncrement = useCallback(() => {
    dispatch({ type: 'TOGGLE_AUTO_INCREMENT' });
  }, []);

  useEffect(() => {
    let intervalId: number | undefined;

    if (state.isAutoIncrementing) {
      intervalId = window.setInterval(() => {
        dispatch({ type: 'AUTO_INCREMENT' });
      }, 1100);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [state.isAutoIncrementing]);

  return {
    count: state.count,
    isAutoIncrementing: state.isAutoIncrementing,
    increment,
    decrement,
    reset,
    toggleAutoIncrement
  };
}