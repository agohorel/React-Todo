import React, { Component } from "react";

import { TodoForm } from "./components/TodoComponents/TodoForm";
import { TodoList } from "./components/TodoComponents/TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      description: ""
    };
  }

  updateDescription = input => {
    console.log(this.state);
    this.setState({ description: input });
  };

  addTodo = (e, description) => {
    e.preventDefault();
    const newTodo = {
      task: description,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          description={this.state.description}
          updateDescription={this.updateDescription}
          addTodo={this.addTodo}
        ></TodoForm>
        <TodoList todos={this.state.todos}></TodoList>
      </div>
    );
  }
}

export default App;
