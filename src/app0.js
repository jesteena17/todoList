// import Counter from "./components/Counter";
import { useState,useEffect } from "react";

import './App.css';


function App() {
  //for counterapp
  const [state, setState] = useState(false);


  return (
    
// counter app

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
