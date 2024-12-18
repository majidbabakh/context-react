import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(term);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        className="border-2 border-blue-700"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
}
