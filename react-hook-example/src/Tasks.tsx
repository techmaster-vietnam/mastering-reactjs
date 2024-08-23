import React, { memo } from 'react';

interface TasksProps {
  tasks: string[];
  addTask: () => void;
}

const Tasks: React.FC<TasksProps> = ({ tasks, addTask }) => {
  console.log("tasks render");
  return (
    <>
      <h2>My tasks</h2>
      {tasks.map((task, index) => {
        return <p key={index}>{task}</p>;
      })}
      <button onClick={addTask}>Add task</button>
    </>
  );
};

export default memo(Tasks);
