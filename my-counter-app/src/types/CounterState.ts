export interface CounterState {
    count: number;
    isAutoIncrementing: boolean;
  }
  
  export type CounterIntent = 
    | { type: 'INCREMENT' }
    | { type: 'DECREMENT' }
    | { type: 'RESET' }
    | { type: 'TOGGLE_AUTO_INCREMENT' }
    | { type: 'AUTO_INCREMENT' };