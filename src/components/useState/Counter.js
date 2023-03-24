import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      console.log("count has changed!");
    }, [count]);
    
    const handleIncrement = () => setCount(count + 1) ;
    const handleDecrement = () => setCount(count - 1);
    
    const handleReset = () => setCount(0)
  
  return (
    <div>
        <p>{count}</p>
        <button onClick={() => handleIncrement()}>Increment</button>
        <button onClick={() => handleDecrement()}>Decrement</button>
        <button onClick={() => handleReset()}>Reset</button>
    </div>
  )
}

export default Counter;