import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1c1c1c;
  padding: 0.5rem;
  min-width: 500px;

  label {
    color: #efefef;
  }

  input {
    border: none;
    background-color: #9c9c9c;
    color: #1c1c1c;
    padding: 0.25rem;
    font-family: "Roboto", sans-serif;
    width: 50%;
  }

  button {
    border: none;
    background-color: #3c3c3c;
    padding: 0.5rem;
    color: #fff;
    transition: 0.2s ease-out all;

    :hover {
      cursor: pointer;
      background-color: #2c2c2c;
      color: #eee;
    }
  }

  * {
    margin: 0.25rem;
  }
`;
