import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { task: "Cortar cebolla", completed: true },
  { task: "Comprar comida china del mercado en media hora", completed: false },
  { task: "Hacer la ultima tarea", completed: true },
  { task: "Praticar para el partido", completed: true },
];

function App() {
  return (
    <article className="bg-stone-800 w-full min-h-screen text-white flex flex-col items-center font-montserrat scroll-smooth">
      <section className="flex flex-col items-center gap-3 mt-6 mb-4">
        <TodoCounter completed={4} total={10} />
        <TodoSearch />
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
