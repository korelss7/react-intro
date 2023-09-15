function renderQty(length) {
  const elements = [];
  while (length > 0) {
    elements.push(<ItemSkeleton key={length} />);
    length--;
  }
  return elements;
}

function ItemSkeleton() {
  return (
    <li className="px-4 py-2 relative flex items-center gap-3 bg-transparent border-2 rounded-3xl border-stone-500 animate-pulse w-11/12 max-w-2xl">
      <span className="w-6 h-6 bg-stone-500 rounded-full "></span>
      <p className="items-center w-11/12 h-4 bg-stone-500 rounded-sm"></p>
      <span className="w-6 h-6 bg-stone-500 absolute -top-3 -right-2 rounded-full"></span>
    </li>
  );
}
function ListSkeleton({ len }) {
  return (
    <ul className="w-full flex flex-col items-center gap-4 sm:px-0 mb-10">
      {renderQty(len)}
    </ul>
  );
}

function CounterSkeleton() {
  return (
    <div className="px-2 py-1 mx-2 text-md sm:text-xl text-transparent flex gap-2 flex-wrap items-center justify-center rounded animate-pulse">
      <span className="bg-stone-500 px-1 rounded">Has</span>
      <span className="bg-stone-500 px-1 rounded">completado</span>
      <span className="bg-stone-500 px-1 rounded">0</span>
      <span className="bg-stone-500 px-1 rounded">de</span>
      <span className="bg-stone-500 px-1 rounded">0</span>
      <span className="bg-stone-500 px-1 rounded">tareas</span>
    </div>
  );
}

export { ItemSkeleton, ListSkeleton, CounterSkeleton };
