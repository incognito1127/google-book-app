import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchBooks = async (e) => {  //Defines an asynchronous function
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.get( //Axios is a popular JavaScript library used to make HTTP requests. It simplifies making requests and handling responses.

        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      ); //Makes an HTTP GET request to the Google Books API with the search query. await is used to wait for the request to complete.
      setBooks(response.data.items); //Updates the state with the fetched books data.
    } catch (error) {
      setError('Try again buddy');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home 🏠</Link></li>
            <li><Link to="/about">About Me 💁🏾‍♀️</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                query={query}
                setQuery={setQuery}
                searchBooks={searchBooks}
                loading={loading}
                error={error}
                books={books}
              />
            } 
          />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
