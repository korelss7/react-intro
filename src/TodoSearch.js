import { useState } from "react";

const TodoSearch = () => {
  const [search, setSearch] = useState("");
  return (
    <input
      value={search}
      placeholder="Cortar Cebollas"
      className="bg-zinc-700 placeholder-stone-400 text-white text-center border-2 border-zinc-700 outline-none p-2 rounded-xl w-64 sm:w-96 text-base font-medium hover:shadow-md hover:shadow-neutral-500 transition-shadow focus:border-white focus:shadow-neutral-500 focus:shadow-md"
      onChange={(event) => {
        setSearch(event.target.value);
      }}
    ></input>
  );
};

export { TodoSearch };
