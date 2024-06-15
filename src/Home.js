import React from 'react';

function Home({ query, setQuery, searchBooks, loading, error, books }) {
  return (
    <div>
      <h1>📚 BOOKTOPIA 📚</h1>
      <form onSubmit={searchBooks}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Dont be shy, search a book"
        />
        <button type="submit">Search It Up 🧐</button>
      </form>
      {loading && <p>Give me a min...</p>}
      {error && <p>{error}</p>}
      <div className="book-list">
        {books && books.map((book) => ( //Maps over the books array and renders a div for each book if books is not null.

          <div key={book.id} className="book">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail} //Sets the image source to the book's thumbnail if it exists
              alt={`${book.volumeInfo.title} cover`}
            />
            <div>
              <h2>{book.volumeInfo.title}</h2>
              <h3>{book.volumeInfo.authors?.join(', ')}</h3>
              <p>{book.volumeInfo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
