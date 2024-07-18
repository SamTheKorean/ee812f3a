import React from 'react';
import PropTypes from 'prop-types';
import '../css/components/Call.css';
function Call({ call, onArchive, onUnarchive }) {
  return (
    <li className="call">
      <p>Call ID: {call.id}</p>
      <p>Direction: {call.direction}</p>
      {onArchive && <button onClick={() => onArchive(call.id)}>Archive</button>}
      {onUnarchive && <button onClick={() => onUnarchive(call.id)}>Unarchive</button>}
    </li>
  );
}

Call.propTypes = {
  call: PropTypes.object.isRequired,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func,
};

export default Call;
