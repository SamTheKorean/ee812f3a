import React, { useEffect, useState } from 'react';
import { getCalls, archiveCall } from '../services/callService.js';
import Call from './Call.jsx';
import '../css/components/ActivityFeed.css';

function ActivityFeed() {
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="activity-feed">
      <button onClick={handleArchiveAll}>Archive All Calls</button>
      <ul>
        {calls.map(call => (
          <Call key={call.id} call={call} onArchive={handleArchive} />
        ))}
      </ul>
    </div>
  );
}

export default ActivityFeed;
