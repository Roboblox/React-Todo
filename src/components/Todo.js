import React from "react";

const Todo = (props) => {
  return (
    <div
      className={`task${props.task.completed ? " completed" : ""}`}
      onClick={() => props.toggleTask(props.task.id)}
    >
      <p>{props.task.info}</p>
    </div>
  );
};

export default Todo;
