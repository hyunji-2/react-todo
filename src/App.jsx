import React, { useState } from "react";
import Top from "./component/Top";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
// import "./App.scss";

let id = 0;

const App = () => {
  return (
    <>
      <Top />
      <TodoForm />
      <TodoList />
    </>
  );
};

export default App;
