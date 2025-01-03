import { useState } from 'react';
import BookEdit from './BookEdit';

export default function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  function handleDeleteClick() {
    onDelete(book.id);
  }

  function handleEditClick() {
    setShowEdit(!showEdit);
  }

  function handleSubmit(id, newTitle) {
    onEdit(id, newTitle);
    setShowEdit(false);
  }

  return (
    <div className="border-2 p-4 text-center">
      <h3 className="mb-4 ">{book.title}</h3>
      <button
        className="border-2 border-slate-400 bg-green-600 text-white px-4 py-1 mr-2"
        onClick={handleEditClick}
      >
        edit
      </button>
      <button
        className="border-2 border-slate-400 bg-red-500 text-white px-4 py-1"
        onClick={handleDeleteClick}
      >
        delete
      </button>
      {showEdit && <BookEdit book={book} onSubmit={handleSubmit} />}
    </div>
  );
}
