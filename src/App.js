import { useEffect, useState } from 'react';
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

  const fetchBooks = () => {
    axios.get('http://localhost:3001/books').then((res) => {
      setBooks(res.data);
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDeleteBook = (id) => {
    axios.delete(`http://localhost:3001/books/${id}`);
    setBooks(books.filter((book) => book.id !== id));
  };

  function handleEditBook(id, newTitle) {
    axios
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
