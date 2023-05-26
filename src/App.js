import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Reviews from "./Reviews";

function Home() {
  return;
}

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title,
      author,
      rating,
      review,
    };
    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
    setRating(0);
    setReview("");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-brand">
            <span className="navbar-title">Book Reviewer</span>
          </div>
          <div className="navbar-menu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reviews" className="nav-link">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content-wrapper">
          <h1 className="title">Book Reviews</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews reviews={books} />} />
          </Routes>
          <form onSubmit={handleSubmit} className="review-form">
            <div className="form-row">
              <label htmlFor="title" className="label">
                Title:
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
                className="input"
                placeholder="Enter book title"
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="author" className="label">
                Author:
              </label>
              <input
                type="text"
                id="author"
                value={author}
                onChange={handleAuthorChange}
                className="input"
                placeholder="Enter author name"
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="rating" className="label">
                Rating:
              </label>
              <input
                type="number"
                id="rating"
                value={rating}
                onChange={handleRatingChange}
                className="input"
                min="1"
                max="5"
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="review" className="label">
                Review:
              </label>
              <textarea
                id="review"
                value={review}
                onChange={handleReviewChange}
                className="input textarea"
                placeholder="Write your review here"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Review Submitted!</h2>
              <p>Thank you for submitting your review.</p>
              <button onClick={closeModal} className="modal-close-button">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
