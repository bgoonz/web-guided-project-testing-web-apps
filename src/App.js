import React from "react";
import AnimalForm from "./components/AnimalForm";

import "./App.css";

function App() {
  console.log("currently rendering");
  return (
    <div className="App">
      <h1>Add New Animal</h1>
      <AnimalForm />
    </div>
  );
}

export default App;
