import React, { useState } from "react";
import { Card, Button, Select } from "antd";
import styles from "./Card.module.scss";

const { Option } = Select;

const CardPage = ({ tasks, onDeleteTask }) => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "all" ? true : task.importance === filter
  );

  return (
    <Card title="Task List">
      <Select defaultValue="all" onChange={handleFilterChange}>
        <Option value="all">All</Option>
        <Option value="low">Low</Option>
        <Option value="medium">Medium</Option>
        <Option value="high">High</Option>
      </Select>
      {filteredTasks.map((task) => (
        <Card
          className={styles.cardBody}
          key={task.id}
          type="inner"
          title={task.text}
          extra={
            <Button onClick={() => onDeleteTask(task.id)} type="link">
              Delete
            </Button>
          }
        >
          Importance: {task.importance}
        </Card>
      ))}
    </Card>
  );
};

export default CardPage;
