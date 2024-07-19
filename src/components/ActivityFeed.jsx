import React, { useEffect, useState } from 'react';
import { getCalls, archiveCall } from '../services/callService.js';
import Call from './Call.jsx';
import ActivityDetail from './ActivityDetail.jsx';

function ActivityFeed() {
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCallId, setSelectedCallId] = useState(null);

  useEffect(() => {
    async function fetchCalls() {
      try {
        const callsData = await getCalls();
        setCalls(callsData.filter(call => !call.is_archived));
      } catch (error) {
        setError('Error fetching calls');
      } finally {
        setLoading(false);
      }
    }

    fetchCalls();
  }, []);

  const handleArchive = async (callId) => {
    try {
      await archiveCall(callId);
      setCalls(calls.filter(call => call.id !== callId));
    } catch (error) {
      setError('Error archiving call');
    }
  };

  const handleArchiveAll = async () => {
    try {
      await Promise.all(calls.map(call => archiveCall(call.id)));
      setCalls([]);
    } catch (error) {
      setError('Error archiving all calls');
    }
  };

  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '15px 25px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
    alignSelf: 'center',
    minWidth: '150px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    width: '100%',
    maxWidth: '600px',
    flex: 1,
    overflowY: 'auto'
  };

  return (
    <div style={containerStyle}>
      {selectedCallId ? (
        <ActivityDetail callId={selectedCallId} onClose={() => setSelectedCallId(null)} />
      ) : (
        <>
          <button
            style={buttonStyle}
            onClick={handleArchiveAll}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#45a049')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
          >
            Archive All Calls
          </button>
          <ul style={listStyle}>
            {calls.map(call => (
              <Call
                key={call.id}
                call={call}
                onArchive={handleArchive}
                onClick={setSelectedCallId}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default ActivityFeed;
