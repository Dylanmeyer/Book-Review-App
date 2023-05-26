import React from "react";
import "./App.css";

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews-wrapper">
      <h2 className="reviews-title">Reviews</h2>
      {reviews.length === 0 ? (
        <p className="no-reviews">No reviews yet.</p>
      ) : (
        <ul className="reviews-list">
          {reviews.map((book, index) => (
            <li key={index} className="review-item">
              <div className="book-info">
                <span className="book-title">{book.title}</span>
                <span className="book-author">by {book.author}</span>
              </div>
              <div className="review-info">
                <span className="rating">Rating: {book.rating}</span>
                <p className="review">Review: {book.review}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
