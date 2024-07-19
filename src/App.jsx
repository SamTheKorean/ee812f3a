import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ActivityFeed from './components/ActivityFeed.jsx';
import ArchivedCalls from './components/ArchivedCalls.jsx';
import ActivityDetail from './components/ActivityDetail.jsx';
import Header from './components/Header.jsx';

function App() {
  const [selectedCallId, setSelectedCallId] = useState(null);

  const handleDetailClose = () => {
    setSelectedCallId(null);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ActivityFeed onSelectCall={setSelectedCallId} />
                {selectedCallId && (
                  <ActivityDetail
                    callId={selectedCallId}
                    onClose={handleDetailClose}
                  />
                )}
              </>
            }
          />
          <Route path="/archived" element={<ArchivedCalls />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
