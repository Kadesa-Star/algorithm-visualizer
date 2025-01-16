import React from 'react';

const ArraySizeControl = ({ setArraySize }) => {
  const handleSizeChange = (e) => {
    const newSize = Math.max(5, Math.min(50, Number(e.target.value))); // Ensure value is between 5 and 50
    setArraySize(newSize);
  };

  return (
    <div className="array-size-control">
      <label>Array Size:</label>
      <input
        type="number"
        min="5"
        max="50"
        defaultValue="20"
        onChange={handleSizeChange}
      />
    </div>
  );
};

export default ArraySizeControl;
