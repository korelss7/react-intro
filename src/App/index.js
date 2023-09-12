import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import AppUI from "./AppUI";

let defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Comprar en media hora", completed: false },
  { text: "Hacer la ultima tarea", completed: false },
  { text: "Praticar para el partido", completed: false },
  { text: "Praticar para el torneo", completed: false },
];

function App() {
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useLocalStorage("TODOS_V1", defaultTodos);

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
