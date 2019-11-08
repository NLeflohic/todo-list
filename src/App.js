import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [placeHolder, setPlaceHolder] = useState("");


  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="tasklist">
        {
          tasks.map((task, id) => {
            return (
              <div key={id} className="task">
                <span>X</span> <h3>{task.name}</h3>
              </div>);
          })}
      </div>
      <form className="form" onSubmit={(event) => {
        event.preventDefault();
        const newTasks = [...tasks];
        newTasks.push({ name: taskInput });
        setTasks(newTasks);
        console.log("newtasks " + newTasks);
      }}>
        <input className="input" type="text" placeholder="tache" value={placeHolder} onChange={event => {
          setTaskInput(event.target.value);
          setPlaceHolder(event.target.value);
        }} />
        <input className="button" type="submit" value="Ajouter une tache" onClick={event => {
          setPlaceHolder("");
        }
        } />
      </form>
    </div >
  );
}

export default App;
