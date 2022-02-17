import React, { useState } from "react";
import "./App.css";
import List from "./List";
import data from "./data";

function App() {
  const [people, setpeople] = useState(data);
  return (
    <div className="App">
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={() => setpeople([])}>Clear All</button>
        </section>
      </main>
    </div>
  );
}

export default App;
