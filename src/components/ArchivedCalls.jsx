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

  return (
    <div className="archived-calls">
      <button onClick={handleUnarchiveAll}>Unarchive All Calls</button>
      <ul>
        {calls.map(call => (
          <Call key={call.id} call={call} onUnarchive={handleUnarchive} />
        ))}
      </ul>
    </div>
  );
}

export default ArchivedCalls;
