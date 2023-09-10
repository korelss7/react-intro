import { useState } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

let defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Comprar en media hora", completed: false },
  { text: "Hacer la ultima tarea", completed: false },
  { text: "Praticar para el partido", completed: false },
  { text: "Praticar para el torneo", completed: false },
];

function App() {
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState(defaultTodos);

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
    <article className="bg-stone-800 w-full min-h-screen text-white flex flex-col items-center font-montserrat scroll-smooth">
      <section className="flex flex-col items-center gap-3 mt-6 mb-4">
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={search} setSearchValue={setSearch} />
      </section>

      <TodoList>
        {searchedTodos.map(({ text, completed }) => (
          <TodoItem
            task={text}
            completed={completed}
            key={text}
            onComplete={() => completedTodo(text)}
            onDelete={() => deleteTodo(text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </article>
  );
}
export { App };
