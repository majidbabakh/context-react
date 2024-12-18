import BookShow from './BookShow';

export default function BookList({ books, onDelete, onEdit }) {
  const renderedBookList = books.map((book) => {
    return (
      <BookShow
        className="border-2 p-2"
        key={book.id}
        book={book}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
  });
  return <div className=" flex gap-5 flex-wrap p-4">{renderedBookList}</div>;
}
