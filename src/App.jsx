import React from "react";
import { Routes, Route } from "react-router-dom";
import Parent from "./pages/Parent";
import BandMembers from "./pages/BandMembers";
import Albums from "./pages/Albums";
import Tracks from "./pages/Tracks";
import Gallery from "./pages/Gallery";
import History from "./pages/History";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NoFound from "./pages/NoFound";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Parent />}>
          <Route index element={<Home />} />
          <Route path="band-members" element={<BandMembers />} />
          <Route path="albums" element={<Albums />} />
          {/* Tracks Component with dynamic albumId */}
          <Route path="albums/:albumId/tracks" element={<Tracks />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="history" element={<History />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
