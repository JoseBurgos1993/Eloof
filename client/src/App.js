import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import addGift from "./pages/AddGift";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
