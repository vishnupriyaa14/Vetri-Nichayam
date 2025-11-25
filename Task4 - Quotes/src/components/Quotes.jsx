import React, { useEffect, useState } from "react";
import axios from "axios";

function Quotes() {
  const [quote, setQuote] = useState([]);
  const fetchQuotes = async () => {
    try {
      const response = await axios("https://dummyjson.com/quotes/random/10");
      console.log(response);
      setQuote(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchQuotes();
  }, []);
  console.log(quote);
  return (
    <div>
      {quote.map((q, i) => (
        <div
          key={i}
          style={{
            padding: "15px",
            marginBottom: "15px",
            background: "#f8f0ff",
            borderRadius: "12px",
            border: "1px solid #d0b3ff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          }}
        >
          <p
            style={{
              fontStyle: "italic",
              fontSize: "18px",
              color: "#333",
              marginBottom: "8px",
            }}
          >
            "{q.quote}"
          </p>

          <p
            style={{
              textAlign: "right",
              color: "#7e57c2",
              fontWeight: "600",
            }}
          >
            — {q.author}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Quotes;
