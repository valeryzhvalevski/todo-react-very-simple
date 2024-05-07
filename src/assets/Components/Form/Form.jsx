import { useState } from "react";
import styles from "./Form.module.scss";

const Form = ({ onAddTask }) => {
  const [taskInput, setTaskInput] = useState('');
  const [importance, setImportance] = useState('low');

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleImportanceChange = (event) => {
    setImportance(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskInput.trim() !== '') {
      onAddTask({ text: taskInput, importance });
      setTaskInput('');
      setImportance('low');
    }
  };

  return (
    <div className={styles.container}>

  
    <form onSubmit={handleSubmit}>
      <div className={styles.task}>
        <textarea
          type="text"
          placeholder="Enter Your Task"
          value={taskInput}
          onChange={handleTaskInputChange}
        />
      </div>
      <div className={styles.importance}>
        <select name="importance" value={importance} onChange={handleImportanceChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className={styles.wr_btn}>
        <input type="submit" value="Add Task" />
      </div>
    </form>
    </div>
  );
};

export default Form;