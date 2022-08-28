import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import PostalLookup from "./PostalLookup";
import Universities from "./Universities";
const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter basename="/launchpad-code-challenge-front-end">
        <Header />
        <Routes>
          {/* Home/Posts*/}
          <Route path="/" exact element={<Home />} />
          {/* Universities */}
          <Route path="/launchpad-code-challenge-front-end/universities" exact element={<Universities />} />
          {/* Postal Lookup */}
          <Route path="/launchpad-code-challenge-front-end/postallookup" exact element={<PostalLookup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
