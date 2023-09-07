function TodoCounter({ completed = 0, total = 0 }) {
  return (
    <h1 className="text-center font-bold text-xl text px-2 sm:text-2xl">
      Has completado <span className="count-number">{completed}</span> de{" "}
      <span className="count-number">{total}</span> tareas
    </h1>
  );
}

export { TodoCounter };
