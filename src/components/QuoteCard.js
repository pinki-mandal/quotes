// src/components/QuoteCard.js
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './QuoteCard.css';

const QuoteCard = ({ quote, onSave }) => {
  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="quote">
      <div style={styles.card}>
        <p style={styles.quote}>{quote}</p>
        <button
          style={styles.button}
          onClick={() => {
            onSave(quote);
            alert('Quote Saved!');
          }}
        >
          Save
        </button>
      </div>
    </CSSTransition>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
  },
  quote: {
    fontSize: '18px',
    fontStyle: 'italic',
  },
  button: {
    marginTop: '8px',
    padding: '8px 16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

// Button hover effect
styles.button[':hover'] = {
  backgroundColor: '#0056b3',
};

export default QuoteCard;
