

import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)
    const [inputVal,setInputChange]=useState('');

    return (
        <div className=''>
            <h3 data-testid="cnt">{counter}</h3>            
            <button data-testid="btn" onClick={() => setCounter(counter + 1)}>Increment</button>
            <hr/>
            <input type="text" data-testid="input" onChange={(e)=>{setInputChange(e.target.value)}}/>
        </div>
  )
}

export default Counter