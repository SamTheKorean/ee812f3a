import React, { useState, useEffect } from 'react';
import { fetchCallDetails } from '../services/callService.js';

const ActivityDetail = ({ callId, onClose }) => {
  const [callDetail, setCallDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCallDetails = async () => {
      try {
        const data = await fetchCallDetails(callId);
        setCallDetail(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (callId) {
      getCallDetails();
    }
  }, [callId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!callDetail) return null;

  // Define inline styles
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '5px',
    maxWidth: '600px',
    margin: '20px auto',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
  };

  const buttonStyle = {
    backgroundColor: '#ff4d4d',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px'
  };

  const titleStyle = {
    marginBottom: '15px'
  };

  const detailStyle = {
    marginBottom: '10px'
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={onClose}>Close</button>
      <h2 style={titleStyle}>Call Details</h2>
      <p style={detailStyle}><strong>Direction:</strong> {callDetail.direction}</p>
      <p style={detailStyle}><strong>From:</strong> {callDetail.from}</p>
      <p style={detailStyle}><strong>To:</strong> {callDetail.to}</p>
      <p style={detailStyle}><strong>Via:</strong> {callDetail.via}</p>
      <p style={detailStyle}><strong>Duration:</strong> {callDetail.duration} seconds</p>
      <p style={detailStyle}><strong>Call Type:</strong> {callDetail.call_type}</p>
      <p style={detailStyle}><strong>Created At:</strong> {new Date(callDetail.created_at).toLocaleString()}</p>
      <p style={detailStyle}><strong>Archived:</strong> {callDetail.is_archived ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default ActivityDetail;
