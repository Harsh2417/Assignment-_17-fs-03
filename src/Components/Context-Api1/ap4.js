import React from 'react';
import { useContext } from 'react';
import myContext from './context';

const D = () => {
   const contextData = useContext(myContext);
  return (
    <div>
        <h2>D components</h2>
        <p style={{color:"red"}}>A components data {contextData}</p>
    </div>
  )
}

export default D