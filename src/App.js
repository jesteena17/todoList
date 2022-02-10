// import Counter from "./components/Counter";
import { useState,useEffect } from "react";

import './App.css';


function App() {
  //for counterapp
  // const [state, setState] = useState(false);
  const [date, setDate] = useState(new Date());
  let day = date.toLocaleString('en-in', { weekday: 'long' });
  
  useEffect(() => {
  // console.log('mount');
 var timer= setInterval(() => {
    setDate(new Date())
 }, 1000);
  return () => {
    clearInterval(timer); 
  //  console.log('unmount'); 
  }
 
},[date]);

  return (
    /*
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
*/
    
    //todo
    

    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
        <h2>Whoop, it's {day}, {date.toLocaleTimeString()} 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input type="text" placeholder="🖊️ Add item..." />
      <i className="fas fa-plus"></i>
    </div>
    <div className="todos">
      <div className="todo">
        <div className="left">
          <input type="checkbox" name="" id="" />
          <p>React tutorial</p>
        </div>
        <div className="right">
          <i className="fas fa-trash"></i>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
