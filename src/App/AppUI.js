import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

const AppUI = ({
  loading,
  error,
  completedTodos,
  totalTodos,
  search,
  setSearch,
  searchedTodos,
  completedTodo,
  deleteTodo,
}) => {
  return (
    <article className="bg-stone-800 w-full min-h-screen text-white flex flex-col items-center font-montserrat scroll-smooth">
      <section className="flex flex-col items-center gap-3 mt-6 mb-4">
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={search} setSearchValue={setSearch} />
      </section>

      <TodoList>
        {loading && <p>Cargando TODOs...</p>}
        {error && <p>Ocurrió un error</p>}
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
};

export default AppUI;
