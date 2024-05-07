import { useState } from "react";
import "../src/assets/Style/App.css";
import Form from "./assets/Components/Form/Form";
import CardPage from "./assets/Components/Card/Card";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Form onAddTask={handleAddTask} />
      <CardPage tasks={tasks} />
    </div>
  );
}
export default App;