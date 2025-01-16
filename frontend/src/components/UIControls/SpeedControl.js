import React from 'react';

const SpeedControl = ({ setSpeed }) => {
  const handleSpeedChange = (e) => {
    const newSpeed = Math.max(1, Math.min(10, Number(e.target.value))); // Ensure value is between 1 and 10
    setSpeed(newSpeed * 100); // Scale for delay (e.g., 1 = 100ms delay, 10 = 1000ms delay)
  };

  return (
    <div className="speed-control">
      <label>Speed:</label>
      <input
        type="range"
        min="1"
        max="10"
        defaultValue="5"
        onChange={handleSpeedChange}
      />
    </div>
  );
};

export default SpeedControl;
