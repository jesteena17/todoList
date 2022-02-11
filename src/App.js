// import Counter from "./components/Counter";
import { useState,useEffect } from "react";

import './App.css';


function App() {

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

  
  
  
  
  const [todos, setTodos] = useState([]);
  const [singletodo, setSingletodo] = useState('');
  const [deletedtodos, setDeletedtodos]=useState([]);
 
  const handleChange = (e) => {
    let val = e.target.value;
    setSingletodo(val);
    // console.log(val);

}
const storeTodo = () => {
  setTodos([...todos, {id:Date.now(),text:singletodo,status:false}]);
  // console.log(todos);
  // console.log(singletodo);
  setSingletodo('');
}
  const checkStatus = (e,data) => {
    console.log(data);
    setTodos(todos.filter((filteredtodo) => {
      if (filteredtodo.id === data.id) {
        filteredtodo.status = e.target.checked;
      }
      return filteredtodo;
    }));
    
    console.log(data);
 }

  const deleteTodo = (e, data) => {
console.log(data);
    setDeletedtodos([...deletedtodos,data]);
    console.log(deletedtodos);
    setTodos(todos.filter((undeltodo) => {
      if (undeltodo.id !== data.id) {
  return undeltodo;
      }
    
    }))


    //or
    // const test = [...todos];
    // test.splice(index, 1);
    // setTodos(test)
  }


  return (
    
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
        <h2>Whoop, it's {day}, {date.toLocaleTimeString()} 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input type="text" value={singletodo} onChange={handleChange} placeholder="🖊️ Add item..." />
      <i onClick={storeTodo} className="fas fa-plus"></i>
      </div>
      
      {todos.map((tdo,index) => (
    <div className="todos" key={index}>
    <div className="todo">
      <div className="left">
              <input type="checkbox" onChange={(e) => { checkStatus(e, tdo) }} value={tdo.status } name="" id="" />
              <p style={{ color: tdo.status ? 'green' : "navy" ,textDecoration:tdo.status?'line-through 3px red':'none' }}>{tdo.text}</p>
      </div>
      <div className="right">
        <i className="fas fa-trash" onClick={(e)=>{deleteTodo(e,tdo)}}></i>
      </div>
    </div>
    </div>
))}

      <div className="sections" style={{ marginTop:'50px',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
     
        <div className="completed" style={{ backgroundColor: 'orange' }}>
        <h1 style={{color:'black'}}>Completed</h1>
          {todos.map((tdo, index) => (
            
              tdo.status ? (
                <div className="todos" key={index}>
                  <div className="todo">
                    <div className="">
                      <p style={{ color: tdo.status ? 'green' : "navy", textDecoration: tdo.status ? 'line-through 3px red' : 'none' }}>{tdo.text}</p>
            
                    </div>
     
                  </div>
                </div>) : ''
            
))}

        </div>


        <div className="deleted" style={{ backgroundColor: 'yellow' }}> 
          <h1 style={{color:'black'}}>Deleted</h1>
        {deletedtodos.map((tdo,index) => (
    <div className="todos" key={index}>
    <div className="todo">
      <div className="">
            
              <p style={{ color: tdo.status ? 'red' :'green' }}>{tdo.text}</p>
      </div>
      
    </div>
    </div>
))}
        </div>


  </div>
      




  </div>
  );
}

export default App;
