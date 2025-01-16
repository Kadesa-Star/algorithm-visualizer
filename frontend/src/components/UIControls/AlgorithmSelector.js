import React from 'react';
import { sortingComplexities } from '../../constants/sortingComplexities';

const AlgorithmSelector = ({ setAlgorithm, setComplexities }) => {
  const algorithms = ['Bubble Sort', 'Selection Sort', 'Merge Sort', 'Quick Sort', 'Insertion Sort', 'Heap Sort'];

  const handleChange = (e) => {
    const selectedAlgorithm = e.target.value;
    setAlgorithm(selectedAlgorithm);
    setComplexities(sortingComplexities[selectedAlgorithm] || {}); // Set complexities for the selected algorithm
  };

  return (
    <div className="algorithm-selector">
      <label>Choose Algorithm:</label>
      <select onChange={handleChange}>
        <option value="">Select an Algorithm</option>
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

