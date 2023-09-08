import { useState } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { task: "Cortar cebolla", completed: true },
  { task: "Comprar comida china del mercado en media hora", completed: false },
  { task: "Hacer la ultima tarea", completed: false },
  { task: "Praticar para el partido", completed: true },
  { task: "Praticar para el torneo", completed: true },
];

function App() {
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState(defaultTodos);
  const completedTodos = todos.filter((e) => e.completed).length;
  const totalTodos = todos.length;

  console.log(completedTodos);
  return (
    <article className="bg-stone-800 w-full min-h-screen text-white flex flex-col items-center font-montserrat scroll-smooth">
      <section className="flex flex-col items-center gap-3 mt-6 mb-4">
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={search} setSearchValue={setSearch} />
      </section>

      <TodoList>
        {defaultTodos.map(({ task, completed }) => (
          <TodoItem task={task} completed={completed} key={task} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </article>
  );
}
export { App };
