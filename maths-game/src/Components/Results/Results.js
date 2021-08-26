import React from 'react';
import FadeIn from 'react-fade-in';
import './results.css';

const Results = () => {
  return (
    <FadeIn className="results">
      <div className="results-table">
        <div className="user-score">
          Your Score:
        </div>
      </div>
    </FadeIn>
  );
}

export default Results;