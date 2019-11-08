import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [style, setStyle] = useState({});
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
                <span onClick={
                  (event) => {
                    event.preventDefault();
                    const newTasks = [...tasks];
                    for (let i = 0; i < newTasks.length; i++) {
                      if (newTasks[i].name === task.name) {
                        newTasks.splice(i, 1);
                      }
                    };
                    setTasks(newTasks);
                  }
                }>X</span> <h3 style={task.style} onClick={
                  (event) => {
                    task.style = { "textDecoration": "line-through" };
                    const newTasks = [...tasks];
                    const tabOrdered = [];
                    for (let i = 0; i < newTasks.length; i++) {
                      if (newTasks[i].style.textDecoration === "none") {
                        tabOrdered.unshift(newTasks[i]);
                      } else {
                        tabOrdered.push(newTasks[i]);
                      }
                    }
                    setTasks(tabOrdered);
                    setStyle({ "textDecoration": "line-through" });
                  }
                }>{task.name}</h3>
              </div>);
          })}
      </div>
      <form className="form" onSubmit={(event) => {
        event.preventDefault();
        const newTasks = [...tasks];
        newTasks.push({ name: taskInput, style: { "textDecoration": "none" } });
        setTasks(newTasks);
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
