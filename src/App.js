import React from "react";
import AnimalForm from "./components/AnimalForm";

import "./App.css";

function App() {
  throw new Error("This is an error");

  return (
    <div className="App">
      <h1>Add New Animal</h1>
      <AnimalForm />
    </div>
  );
}

export default App;
