import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="tasklist">
        <div className="task">
          <span>X</span><h3>Faire les courses</h3>
        </div>
        <div className="task">
          <span>X</span><h3>Sortir le chien</h3>
        </div>
      </div>

      <form>
        <input className="input" placeholder="Tache"></input>
      </form>
      <button className="button">Ajouter une tache</button>
    </div>
  );
}

export default App;
