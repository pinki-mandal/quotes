// src/App.js
import React, { useState, useEffect } from 'react';
import QuoteCard from './components/QuoteCard';
import SavedQuotes from './components/SavedQuotes';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    fetchNewQuote();
  }, []);

  const fetchNewQuote = async () => {
    const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const data = await response.json();
    setQuote(data[0]);
  };

  const handleSaveQuote = (quote) => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div style={styles.app}>
      <h1>Ron Swanson Quotes</h1>
      <QuoteCard quote={quote} onSave={handleSaveQuote} />
      <button style={styles.newQuoteButton} onClick={fetchNewQuote}>Get New Quote</button>
      <TransitionGroup>
        {savedQuotes.map((quote, index) => (
          <CSSTransition key={index} timeout={500} classNames="fade">
            <SavedQuotes savedQuotes={[quote]} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

const styles = {
  app: {
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  newQuoteButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default App;
