const TodoList = ({ children }) => {
  return (
    <ul className="w-full flex flex-col items-center gap-4 sm:px-0 mb-10">
      {children}
    </ul>
  );
};

export { TodoList };
