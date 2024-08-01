// src/components/SavedQuotes.js
import React from 'react';

const SavedQuotes = ({ savedQuotes }) => {
  return (
    <div style={styles.container}>
      <h3>Saved Quotes</h3>
      {savedQuotes.map((quote, index) => (
        <div key={index} style={styles.quoteItem}>
          {quote}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '16px',
    borderTop: '1px solid #ccc',
  },
  quoteItem: {
    margin: '8px 0',
    padding: '8px',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
  },
};

export default SavedQuotes;
