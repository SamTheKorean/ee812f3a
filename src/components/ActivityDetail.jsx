
import React, { useState, useEffect } from 'react';
import { fetchCallDetails } from '../services/api'; // Import the API function to fetch call details

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

    return (
        <div className="activity-detail">
            <button className="close-button" onClick={onClose}>Close</button>
            <h2>Call Details</h2>
            <p><strong>Direction:</strong> {callDetail.direction}</p>
            <p><strong>From:</strong> {callDetail.from}</p>
            <p><strong>To:</strong> {callDetail.to}</p>
            <p><strong>Via:</strong> {callDetail.via}</p>
            <p><strong>Duration:</strong> {callDetail.duration} seconds</p>
            <p><strong>Call Type:</strong> {callDetail.call_type}</p>
            <p><strong>Created At:</strong> {new Date(callDetail.created_at).toLocaleString()}</p>
            <p><strong>Archived:</strong> {callDetail.is_archived ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default ActivityDetail;