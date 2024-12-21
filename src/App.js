import { useCallback, useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

export default function App() {
  const [books, setBooks] = useState([]);

  const handleCreate = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title
    });
    setBooks([...books, response.data]);
  };

  const fetchBooks = useCallback(async () => {
    await axios.get('http://localhost:3001/books').then((res) => {
      setBooks(res.data);
    });
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleDeleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    setBooks(books.filter((book) => book.id !== id));
  };

  async function handleEditBook(id, newTitle) {
    await axios
      .put(`http://localhost:3001/books/${id}`, {
        title: newTitle
      })
      .then((res) => {
        setBooks(
          books.map((book) => {
            if (book.id === id) {
              return { ...book, ...res.data };
            }
            return book;
          })
        );
      });
  }

  return (
    <div>
      <BookList
        books={books}
        onDelete={handleDeleteBook}
        onEdit={handleEditBook}
      />
      <hr />
      <BookCreate onCreate={handleCreate} />
    </div>
  );
}
