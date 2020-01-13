import React, { Component } from "react";

import { TodoForm } from "./components/TodoComponents/TodoForm";
import { TodoList } from "./components/TodoComponents/TodoList";
import { Filter } from "./components/TodoComponents/Filter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      description: "",
      filterTerm: "",
      filteredTodos: []
    };
  }

  componentDidMount() {
    // load todos from localStorage if available on mount
    if (window.localStorage.getItem("todos")) {
      this.setState({
        todos: [...JSON.parse(window.localStorage.getItem("todos"))],
        filteredTodos: [...JSON.parse(window.localStorage.getItem("todos"))]
      });
    }
  }

  updateDescription = input => {
    this.setState({ description: input });
  };

  updateFilterTerm = input => {
    this.setState({ filterTerm: input }, () => {
      // below code is in callback because setState is async! 
      // without this my filter values will always be "one step behind"
      const newfilteredTodos = this.state.todos.filter(todo =>
        todo.task.includes(this.state.filterTerm)
      );

      this.setState({ filteredTodos: newfilteredTodos });
    });
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

    // also update the filteredTodos state so our UI stays in sync
    this.setState({
      filteredTodos: updatedTodos.filter(todo =>
        todo.task.includes(this.state.filterTerm)
      )
    });

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

        <Filter
          filterTerm={this.state.filterTerm}
          updateFilterTerm={this.updateFilterTerm}
        ></Filter>

        <TodoList
          todos={this.state.filteredTodos}
          toggleComplete={this.toggleComplete}
        ></TodoList>
      </div>
    );
  }
}

export default App;
