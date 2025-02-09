"use client";

import { useState } from "react";
import { counter_motoko_backend } from 'declarations/counter_motoko_backend';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = async() =>{ 
    const newCount = await counter_motoko_backend.inc();
    setCount(Number(newCount));
  }
  const decrement = async() =>{ 
    const newCount = await counter_motoko_backend.dec();
    setCount(Number(newCount));
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Counter App</h2>
      </div>
      <div className="card-content">
        <div className="count-display">{count}</div>
        <div className="button-group">
          <button className="btn" onClick={decrement}>Decrement</button>
          <button className="btn" onClick={increment}>Increment</button>
        </div>
      </div>
    </div>
  );
}
