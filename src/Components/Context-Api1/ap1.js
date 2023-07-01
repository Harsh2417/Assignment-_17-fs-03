import React from 'react';
import { useState } from 'react';
import B from './ap2';
import myContext from './context';
const A = () => {
    const [data, setData]=useState(" geekster");
  return (
    <div>
        <h2>A components</h2>
        <button onClick={()=>{setData(" Mumbai")}}>Send data</button>
        <myContext.Provider value={data}>
        <B/>
        </myContext.Provider>
    
    </div>
  )
}

export default A