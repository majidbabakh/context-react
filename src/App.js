import { useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';
import { useContext } from 'react';

export default function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <BookList />
      <hr />
      <BookCreate />
    </div>
  );
}
