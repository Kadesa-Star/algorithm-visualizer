import React from 'react';

const ArraySizeControl = ({ setArraySize }) => {
  return (
    <div className="array-size-control">
      <label>Array Size:</label>
      <input
        type="number"
        min="5"
        max="50"
        defaultValue="20"
        onChange={(e) => setArraySize(Number(e.target.value))}
      />
    </div>
  );
};

export default ArraySizeControl;

