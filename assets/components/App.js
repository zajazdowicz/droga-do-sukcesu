import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import About from "./About";

export default function App() {
  return (
      <Routes>
        
          <Route path="/about" element={<About />} />
      </Routes>
    
  );
}
