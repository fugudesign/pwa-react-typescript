import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import './App.css';

const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<Home />} />
        </Routes>
    </Suspense>
  </Router>
  );
}

export default App;
