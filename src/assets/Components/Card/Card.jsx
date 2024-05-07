import React from 'react';
import { Card, Button } from 'antd';

const CardPage = ({ tasks, onDeleteTask }) => (
  <Card title="Task List">
    {tasks.map((task) => (
      <Card key={task.id} type="inner" title={task.text} extra={<Button onClick={() => onDeleteTask(task.id)} type="link">Delete</Button>}>
        Importance: {task.importance}
      </Card>
    ))}
  </Card>
);

export default CardPage;