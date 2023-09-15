import { useContext } from "react";
import { TodoContext } from "./TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <h1 className="text-center font-bold text-xl text px-2 sm:text-2xl">
      Has completado <span className="count-number">{completedTodos}</span> de{" "}
      <span className="count-number">{totalTodos}</span> tareas
    </h1>
  );
}

export { TodoCounter };
