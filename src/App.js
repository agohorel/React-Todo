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

  componentDidMount() {
    if (window.localStorage.getItem("todos")) {
      this.setState({
        todos: [...JSON.parse(window.localStorage.getItem("todos"))]
      });
    }
  }

  updateDescription = input => {
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

    window.localStorage.setItem(
      "todos",
      JSON.stringify([...this.state.todos, newTodo])
    );
  };

  toggleComplete = id => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else return todo;
    });

    this.setState({ todos: updatedTodos });

    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  removeCompleted = e => {
    e.preventDefault();

    const updatedTodos = this.state.todos.filter(
      todo => todo.completed === false
    );

    this.setState({ todos: updatedTodos });

    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          description={this.state.description}
          updateDescription={this.updateDescription}
          addTodo={this.addTodo}
          removeCompleted={this.removeCompleted}
        ></TodoForm>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        ></TodoList>
      </div>
    );
  }
}

export default App;
