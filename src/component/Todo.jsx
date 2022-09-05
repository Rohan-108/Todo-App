import {  Grid } from "@mui/material";
import React, { useMemo } from "react";
import { useState } from "react";
import TodoButton from "./TodoButton";
import Todolist from "./Todolist";
import TodoInput from "./TodoInput";
import { useEffect } from "react";
///locale storage code
const localStore = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [
      {
        id: 0,
        text: "feed the dog",
        completed: false,
      },
      {
        id: 1,
        text: "sleep",
        completed: false,
      },
      {
        id: 2,
        text: "walk",
        completed: false,
      },
    ];
  }
};
//////
const Todo = () => {
  const [todos, setTodos] = useState(localStore());
  const [filter, setFilter] = useState("all");
  const filteredTodos = useMemo(() => {
    if (filter === "all") {
      return todos;
    } else if (filter === "completed") {
      return todos.filter((t) => t.completed);
    } else if (filter === "not_completed") {
      return todos.filter((t) => !t.completed);
    }
  }, [todos, filter]);
  //adding todos to locale storage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);
  ////
  return (
    <Grid
      container
      sx={{ marginTop: "10px" }}
      direction="column"
      alignItems="center"
    >
      <Grid item sx={{ width: "100%" }}>
        <TodoButton setFilter={setFilter} />
      </Grid>
      <Grid item sx={{ width: "100%" }}>
        <Todolist
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </Grid>
      <Grid item sx={{ width: "100%" }}>
        <TodoInput todos={todos} setTodos={setTodos} />
      </Grid>
    </Grid>
  );
};

export default Todo;
