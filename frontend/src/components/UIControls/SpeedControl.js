import React from 'react';

const SpeedControl = ({ setSpeed }) => {
  return (
    <div className="speed-control">
      <label>Speed:</label>
      <input
        type="range"
        min="1"
        max="10"
        defaultValue="5"
        onChange={(e) => setSpeed(Number(e.target.value))}
      />
    </div>
  );
};

export default SpeedControl;
