import { createContext } from 'react';
import axios from 'axios';
import { useState } from 'react';

const BooksContext = createContext();

function Provide({ children }) {
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
  const valueToShare = {
    books,
    handleCreate,
    fetchBooks,
    handleDeleteBook,
    handleEditBook
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksContext;
export { Provide };
