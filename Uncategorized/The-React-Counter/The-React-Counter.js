import React from 'react'
import {useState} from 'react';
export function App() {
  const [value,setValue]=useState(0);

  return (
    <div>
      <button data-testid="decrement-button" onClick={()=>setValue(value-1)}>-</button>
      <button data-testid="increment-button" onClick={()=>setValue(value+1)}>+</button>
      <button data-testid="reset" onClick={()=>setValue(0)}>reset</button>
      <p>clicked: {value}</p>
    </div>
  )
}

// run your code by clicking the run button on the right




