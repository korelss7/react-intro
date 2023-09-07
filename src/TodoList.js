const TodoList = ({ children }) => {
  return <ul className="flex flex-col gap-4 px-3 sm:px-0">{children}</ul>;
};

export { TodoList };
