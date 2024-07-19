import React from 'react';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';

function Call({ call, onArchive, onUnarchive, onClick }) {
  const [isSwiping, setIsSwiping] = React.useState(false);
  const [swipeDirection, setSwipeDirection] = React.useState(null);

  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      if (eventData.dir === "Left" || eventData.dir === "Right") {
        setIsSwiping(true);
        setSwipeDirection(eventData.dir);
      }
    },
    onSwipedLeft: () => {
      if (onArchive) {
        onArchive(call.id);
      }
      setIsSwiping(false);
    },
    onSwipedRight: () => {
      if (onUnarchive) {
        onUnarchive(call.id);
      }
      setIsSwiping(false);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  // Define inline styles
  const callStyle = {
    padding: '15px',
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    marginBottom: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, box-shadow 0.3s',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const swipingStyle = {
    backgroundColor: '#f1f1f1',
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)',
  };

  const swipeActionStyle = {
    position: 'absolute',
    top: '0',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    color: 'white',
    transition: 'transform 0.3s, background-color 0.3s'
  };

  // Conditional styling for swipe action based on direction
  const swipeActionRightStyle = {
    ...swipeActionStyle,
    right: '0',
    width: '100px',
    backgroundColor: '#ff4d4d',
    transform: isSwiping && swipeDirection === 'Right' ? 'translateX(0)' : 'translateX(100%)'
  };

  const swipeActionLeftStyle = {
    ...swipeActionStyle,
    left: '0',
    width: '100px',
    backgroundColor: '#4CAF50',
    transform: isSwiping && swipeDirection === 'Left' ? 'translateX(0)' : 'translateX(-100%)'
  };

  return (
    <li
      style={{ ...callStyle, ...(isSwiping ? swipingStyle : {}) }}
      onClick={() => onClick(call.id)}
      {...handlers}
    >
      <div className="call-content" style={{ display: 'flex', flexDirection: 'column' }}>
        <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>Call ID: {call.id}</p>
        <p style={{ margin: 0, fontSize: '16px', color: '#888' }}>Direction: {call.direction}</p>
      </div>
      {onUnarchive && <div style={swipeActionRightStyle}>Unarchive</div>}
      {onArchive && <div style={swipeActionLeftStyle}>Archive</div>}
    </li>
  );
}

Call.propTypes = {
  call: PropTypes.object.isRequired,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func,
  onClick: PropTypes.func.isRequired,
};

export default Call;
