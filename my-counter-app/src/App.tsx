import { Minus, Plus, RotateCcw, Power } from 'lucide-react';
import { useCounter } from './hooks/useCounter';

function App() {
  const {
    count,
    isAutoIncrementing,
    increment,
    decrement,
    reset,
    toggleAutoIncrement
  } = useCounter();

  return (
    <div className="container">
      <div className="card">
        <h1 className="card-title">Counter App</h1>
        
        <div className="counter-display">
          <div className="counter-value">
            {count}
          </div>
        </div>

        <div className="button-container">
          <button
            onClick={decrement}
            className="button button-decrease"
            aria-label="Decrease"
          >
            <Minus size={24} />
          </button>
          
          <button
            onClick={reset}
            className="button button-reset"
            aria-label="Reset"
          >
            <RotateCcw size={24} />
          </button>
          
          <button
            onClick={increment}
            className="button button-increase"
            aria-label="Increase"
          >
            <Plus size={24} />
          </button>
        </div>

        <button
          onClick={toggleAutoIncrement}
          className={`auto-increment ${isAutoIncrementing ? 'active' : 'inactive'}`}
        >
          <Power size={20} />
          <span>Auto Increment: {isAutoIncrementing ? 'ON' : 'OFF'}</span>
        </button>
      </div>
    </div>
  );
}

export default App;