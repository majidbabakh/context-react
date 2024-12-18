import BookShow from './BookShow';
import { useBooksContext } from '../hooks/use-books-context';

export default function BookList() {
  const { books } = useBooksContext();
  const renderedBookList = books.map((book) => {
    return <BookShow className="border-2 p-2" key={book.id} book={book} />;
  });
  return <div className=" flex gap-5 flex-wrap p-4">{renderedBookList}</div>;
}
