import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

function App() {
  return (
    <article className="bg-stone-800 w-full h-screen text-white flex flex-col items-center font-montserrat">
      <section className="flex flex-col items-center gap-3 mt-6 mb-4">
        <TodoCounter />
        <TodoSearch />
      </section>

      <TodoList>
        <TodoItem
          task="Completar el curso de React y nose que mas poner pero algo mas equisde okey si"
          completed
        />
        <TodoItem task="Llegar a Inmortal" />
        <TodoItem task="Comprar pc gamers" />
      </TodoList>

      <CreateTodoButton />
    </article>
  );
}
export { App };
