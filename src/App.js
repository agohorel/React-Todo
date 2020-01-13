import React, { Component } from "react";
import styled from "styled-components";

import { TodoForm } from "./components/TodoComponents/TodoForm";
import { TodoList } from "./components/TodoComponents/TodoList";
import { Filter } from "./components/TodoComponents/Filter";

import GlobalStyle from "./styles/global";

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

    this.setState(
      {
        todos: [...this.state.todos, newTodo]
      },
      () => {
        // also update the filteredTodos state so our UI stays in sync
        this.setState({
          filteredTodos: this.state.todos.filter(todo =>
            todo.task.includes(this.state.filterTerm)
          )
        });
      }
    );

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

    // also update the filteredTodos state so our UI stays in sync
    this.setState({
      filteredTodos: updatedTodos.filter(todo =>
        todo.task.includes(this.state.filterTerm)
      )
    });

    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  render() {
    return (
      <Container>
        <GlobalStyle></GlobalStyle>
        <h1>do your work.</h1>
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
      </Container>
    );
  }
}

export default App;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;

  h1 {
    margin-top: 2rem;
  }

  background-image: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url("https://images.unsplash.com/photo-1504548840739-580b10ae7715?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  background-fit: cover;
  background-position: center;
`;
