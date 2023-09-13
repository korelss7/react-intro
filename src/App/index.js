import { useState } from "react";
import { useLocalStorage, useLocalStorageExtra } from "./useLocalStorage";
import AppUI from "./AppUI";

function App() {
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
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      search={search}
      setSearch={setSearch}
      searchedTodos={searchedTodos}
      completedTodo={completedTodo}
      deleteTodo={deleteTodo}
    />
  );
}
export { App };
