import React from 'react';
import { Card } from 'antd';
const CardPage = ({ tasks }) => (
  <Card title="Task List">
    {tasks.map((task, index) => (
      <Card key={index} type="inner" title={task.text} extra={<a href="#">More</a>}>
        Importance: {task.importance}
      </Card>
    ))}
  </Card>
);
export default CardPage;