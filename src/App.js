import React from "react";
import "./components/Todo.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const tasks = [
  {
    info: "run",
    id: 1,
    completed: false,
  },
  {
    info: "walk",
    id: 2,
    completed: false,
  },
  {
    info: "swim",
    id: 3,
    completed: false,
  },
  {
    info: "fly",
    id: 4,
    completed: false,
  },
  {
    info: "sing",
    id: 5,
    completed: false,
  },
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      tasks, // same as === tasks: tasks
    };
  }

  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      info: task,
      id: Date.now(),
      completed: false,
    };
    this.setState(
      {
        tasks: [...this.state.tasks, newTask],
      },
      () => {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }
    );
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}
export default App;
