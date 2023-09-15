import { useContext } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { TodoContext } from "./TodoContext";

const CreateTodoButton = () => {
  const { openModal, setOpenModal } = useContext(TodoContext);

  return (
    <button
      className="bg-blue-400 p-2 rounded-full group hover:bg-zinc-900 transition-colors hover:shadow-lg hover:shadow-blue-300 fixed bottom-3 right-3 z-10"
      onClick={() => setOpenModal(!openModal)}
    >
      <BiMessageSquareAdd className="fill-zinc-800 text-3xl group-hover:fill-blue-300 transition-colors" />
    </button>
  );
};

export { CreateTodoButton };
