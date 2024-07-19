import React, { useEffect, useState } from 'react';
import { getCalls, unarchiveCall } from '../services/callService.js';
import Call from './Call.jsx';

function ArchivedCalls() {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    async function fetchCalls() {
      try {
        const callsData = await getCalls();
        setCalls(callsData.filter(call => call.is_archived));
      } catch (error) {
        console.error('Error fetching calls:', error);
      }
    }

    fetchCalls();
  }, []);

  const handleUnarchive = async (callId) => {
    try {
      await unarchiveCall(callId);
      setCalls(calls.filter(call => call.id !== callId));
    } catch (error) {
      console.error('Error unarchiving call:', error);
    }
  };

  const handleUnarchiveAll = async () => {
    try {
      await Promise.all(calls.map(call => unarchiveCall(call.id)));
      setCalls([]);
    } catch (error) {
      console.error('Error unarchiving all calls:', error);
    }
  };

  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
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
    margin: 0,
    width: '100%',
    maxWidth: '600px',
    flex: 1,
    overflowY: 'auto',
  };

  return (
    <div style={containerStyle}>
      <button
        style={buttonStyle}
        onClick={handleUnarchiveAll}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#45a049')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
      >
        Unarchive All Calls
      </button>
      <ul style={listStyle}>
        {calls.map(call => (
          <Call
            key={call.id}
            call={call}
            onUnarchive={handleUnarchive}
            onClick={(id) => console.log(`Selected Call ID: ${id}`)} // Or another valid function
          />
        ))}
      </ul>
    </div>
  );
}

export default ArchivedCalls;
