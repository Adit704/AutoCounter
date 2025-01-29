
import { CounterState, CounterIntent } from "../types/CounterState";

export const initialState: CounterState = {
  count: 0,
  isAutoIncrementing: false
};

export function counterReducer(state: CounterState, intent: CounterIntent): CounterState {
  switch (intent.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count < 98 ? state.count + 1 : state.count
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : state.count
      };
    case 'RESET':
      return {
        ...state,
        count: 0
      };
    case 'TOGGLE_AUTO_INCREMENT':
      return {
        ...state,
        isAutoIncrementing: !state.isAutoIncrementing
      };
    case 'AUTO_INCREMENT':
      return {
        ...state,
        count: state.count < 98 ? state.count + 1 : state.count
      };
    default:
      return state;
  }
}