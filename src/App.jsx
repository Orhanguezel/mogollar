
import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Parent from "./pages/Parent";
import BandMembers from "./pages/BandMembers";
import Albums from "./pages/Albums";
import Music from "./pages/Music";
import Gallery from "./pages/Gallery";
import Tour from "./pages/Tour";
import History from "./pages/History";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NoFound from "./pages/NoFound";





function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<Parent />}>
          <Route index element={<Home />} />
          <Route path="one" element={<BandMembers />} />
          <Route path="two" element={<Albums />} />
          <Route path="three" element={<Music />} />
          <Route path="three" element={<Gallery />} />
          <Route path="three" element={<Tour  />} />
          <Route path="three" element={<History />} />
          <Route path="three" element={<Contact />} />
          <Route path="*" element={<NoFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
