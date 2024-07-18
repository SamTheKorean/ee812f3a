import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/styles.css';
import Header from './components/Header.jsx';
import ActivityFeed from './components/ActivityFeed.jsx';
import ArchivedCalls from './components/ArchivedCalls.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<ActivityFeed />} />
            <Route path="/archived" element={<ArchivedCalls />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
