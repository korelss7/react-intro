import React, { useState } from "react";
import { useLocalStorageExtra } from "./useLocalStorage.js";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const [search, setSearch] = useState("");
  const {
    value: todos,
    saveValue: setTodos,
    loading,
    error,
  } = useLocalStorageExtra("TODOS_V1", []);

  const completedTodos = todos.filter((e) => e.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((e) => {
    const text = e.text.toLowerCase();
    const searchValue = search.toLowerCase();
    return text.includes(searchValue);
  });

  function completedTodo(text) {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex((e) => e.text === text);
    newTodos[indexTodo].completed = true;
    setTodos(newTodos);
    console.log("Completado: ", text);
  }
  function deleteTodo(text) {
    const newTodos = todos.filter((e) => e.text !== text);
    setTodos(newTodos);
    console.log("Eliminado: ", text);
  }

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        search,
        setSearch,
        searchedTodos,
        completedTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
