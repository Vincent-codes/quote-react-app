
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [count, setCount] = useState(true)
  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
        }
      )
  }, [count]);

  // let fetchNewQuote = () => {
  //   fetch("http://api.quotable.io/random")
  //     .then(res => res.json())
  //     .then(
  //       (quote) => {
  //         setQuote(quote.content);
  //         setAuthor(quote.author);
  //       }
  //     )
  // }

  return (
    <div className="App">
      <div className="quote">
        <h2>{quote}</h2>
        <small>-{author}-</small>
      </div><br />
      <button className="btn" onClick={()=> setCount(!count)}>Generate New Quote</button>
    </div>
  );
}

export default App