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
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="universities" exact element={<Universities />} />
            <Route path="/postallookup" exact element={<PostalLookup />} />

          </Route>
          {/* Universities */}
          {/* <Route path="/universities" exact element={<Universities />} /> */}
          {/* Postal Lookup */}
          {/* <Route path="/postallookup" exact element={<PostalLookup />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
