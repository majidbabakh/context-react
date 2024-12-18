import { useState } from 'react';

export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(book.id, title);
  }
  return (
    <form
      className="w-full border p-4 m-2 flex flex-col "
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg text-center mb-4">edit Book</h3>
      <div>
        <label className="pr-4" htmlFor="title">
          title:
        </label>
        <input
          className="w-full border-2 border-slate-300 "
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button className="w-full inline-block border-2 mt-4 hover:bg-blue-500 hover:text-white transition-colors duration-200">
        Edit
      </button>
    </form>
  );
}
