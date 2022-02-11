import React from 'react'
import { useState ,useEffect} from 'react'



// lifecycle methods alternative in fn component useefffect --MouseEvent,unmount,update of component


function Counter() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(10);

    useEffect(() => {
        console.log('mounting');
    console.log('updating '+count);
      return () => {
        console.log('unmounting'+count);
     }
    },[count,count2]);
  const handleclick = () => {
    setCount( count + 1) 
 }
 const handleclick2 = () => {
  setCount2( count2 + 2)
}


  return (
    <div>
      <button onClick={handleclick}>click</button>
      
      <h1>{count}</h1>
      <button onClick={handleclick2}>click</button>
      
      <h1>{count2}</h1>
    </div>
  )
}

export default Counter
