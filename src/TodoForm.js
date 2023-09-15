import { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoForm = () => {
  const { setOpenModal, addTodo } = useContext(TodoContext);
  const [textValue, setTextValue] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    addTodo(textValue);
    setOpenModal(false);
  }
  function onCancel() {
    setOpenModal(false);
  }
  return (
    <form
      onSubmit={onSubmit}
      className="w-4/5 max-w-xs bg-stone-700 flex flex-col items-center rounded gap-3 py-3"
    >
      <label
        htmlFor="task"
        className="font-mono font-bold text-lg text-stone-200"
      >
        Crea tu nueva tarea:
      </label>
      <textarea
        id="task"
        name="input-task"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        spellCheck={false}
        placeholder="Hacer la compras del super"
        className="w-4/5 h-24 max-h-24 outline-none text-black p-2 font-medium text-center border-2 focus:border-black"
      ></textarea>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="bg-zinc-50 hover:bg-zinc-300 text-black px-4 rounded-sm transition-colors py-1"
        >
          Cancelar
        </button>
        <button
          type="submit"
          onSubmit={onSubmit}
          className="bg-emerald-300 hover:bg-emerald-400 text-black px-4 rounded-sm transition-colors py-1"
        >
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
