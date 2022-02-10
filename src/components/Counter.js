import React from 'react'
import { useState ,useEffect} from 'react'



// lifecycle methods alternative in fn component useefffect --MouseEvent,unmount,update of component


function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('mounting');
    
     
    });
 



  return (
    <div>
          <button onClick={()=>setCount(count+1)}>click</button>
          <h1>{count}</h1>
    </div>
  )
}

export default Counter
