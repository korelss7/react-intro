import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const TodoItem = ({ task, completed = false }) => (
  <li className="px-4 py-2 relative flex items-center gap-3 bg-transparent border-2 rounded-3xl border-stone-600 max-w-sm sm:max-w-lg md:max-w-xl">
    <span
      className={`${completed ? "icon-check--active" : "icon-check"} group`}
    >
      <AiOutlineCheck
        className={completed ? "icon-check-logo--active" : "icon-check-logo"}
      />
    </span>
    <p className={completed && "line-through decoration-2 decoration-white"}>
      {task}
    </p>
    <span className="absolute -top-3 -right-2 bg-red-600 rounded-full p-1  border-2 border-stone-600 cursor-pointer hover:bg-red-700 transition-colors">
      <AiOutlineClose className="fill-white text-base" />
    </span>
  </li>
);

export { TodoItem };
