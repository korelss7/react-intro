import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { ListSkeleton, CounterSkeleton } from "../Skeletons";

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
        {loading ? (
          <CounterSkeleton />
        ) : (
          <TodoCounter completed={completedTodos} total={totalTodos} />
        )}
        <TodoSearch searchValue={search} setSearchValue={setSearch} />
      </section>

      <TodoList>
        {loading && <ListSkeleton len={4} />}
        {error && <p>Algo salió mal..</p>}
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
