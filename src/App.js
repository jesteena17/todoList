import Counter from "./components/Counter";
import { useState } from "react";




function App() {
  const [state, setState] = useState(false);
  return (
    <div>
      <button onClick={() => {
        setState(!state)
      }}>click me</button>
      <h1>  { state}</h1>
     
      {
        state && <Counter />  

     }
     
     
   </div>

  );
}

export default App;
