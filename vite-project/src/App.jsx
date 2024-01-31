import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CounterList from "./components/CounterList";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <CounterList />
    </div>
  );
}

export default App;
