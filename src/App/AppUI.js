import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { ListSkeleton, CounterSkeleton } from "../Skeletons";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";

const AppUI = () => {
  const {
    loading,
    error,
    searchedTodos,
    completedTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <article className="bg-stone-800 w-full min-h-screen text-white flex flex-col items-center font-montserrat scroll-smooth">
      <section className="flex flex-col items-center gap-3 mt-6 mb-4">
        {loading ? <CounterSkeleton /> : <TodoCounter />}
        <TodoSearch />
      </section>

      <TodoList>
        {loading && <ListSkeleton len={3} />}
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

      {openModal && <Modal>Funcionalidad de agregar TODO</Modal>}
    </article>
  );
};

export default AppUI;
