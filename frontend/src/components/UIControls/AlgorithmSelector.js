import React from 'react';

const AlgorithmSelector = ({ setAlgorithm }) => {
  const algorithms = ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Selection Sort'];
  
  return (
    <div className="algorithm-selector">
      <label>Choose Algorithm:</label>
      <select onChange={(e) => setAlgorithm(e.target.value)}>
        {algorithms.map((algo, index) => (
          <option key={index} value={algo}>
            {algo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AlgorithmSelector;

