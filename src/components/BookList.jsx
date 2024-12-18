import BookShow from './BookShow';
import BooksContext from '../context/books';
import { useContext } from 'react';

export default function BookList() {
  const { books } = useContext(BooksContext);
  const renderedBookList = books.map((book) => {
    return <BookShow className="border-2 p-2" key={book.id} book={book} />;
  });
  return <div className=" flex gap-5 flex-wrap p-4">{renderedBookList}</div>;
}
