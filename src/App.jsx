import React, { useState } from "react";
import "../src/assets/Style/App.css";
import Form from "./assets/Components/Form/Form";
import CardPage from "./assets/Components/Card/Card";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <Form onAddTask={handleAddTask} />
      <CardPage tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
