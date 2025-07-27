import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(import.meta.env.VITE_API_BASE_URL + "/ping/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error fetching"));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Project_F Frontend</h1>
        <p className="subtitle">Ping Response:</p>
        <p className="message">{message}</p>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </div>
    </div>
  );
}

export default App;
