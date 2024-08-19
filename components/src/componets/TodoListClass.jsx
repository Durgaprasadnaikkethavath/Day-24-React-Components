import React, { Component } from "react";

export default class TodoListClass extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      currentTask: "",
    };
  }
  handleAddTask = () => {
    if (this.state.currentTask) {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, prevState.currentTask],
        currentTask: "",
      }));
    }
    this.display();
  };

  handleChange = (e) => {
    this.state({
      currentTask: e.target.value,
    });
  };

  display = () => {
    console.log(this.state.tasks);
  };
  render() {
    return (
      <>
        <h1>Todo list</h1>
        <input
          type="text"
          placeholder="Enter Task"
          onChange={() => this.handleChange}
        />
        <button onClick={() => this.handleAddTask()}>Add Task</button>
        <ul>
          {this.state.tasks.map((task) => {
            <li>{task}</li>;
          })}
        </ul>
      </>
    );
  }
}
