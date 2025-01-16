import React, { useState, useEffect } from 'react';
import './App.css';
import Visualizer from './components/Visualizer/Visualizer';
import AlgorithmSelector from './components/UIControls/AlgorithmSelector';
import ArraySizeControl from './components/UIControls/ArraySizeControl';
import SpeedControl from './components/UIControls/SpeedControl';

const App = () => {
  const [algorithm, setAlgorithm] = useState('');
  const [arraySize, setArraySize] = useState(20);
  const [speed, setSpeed] = useState(500); // Initial speed in ms
  const [key, setKey] = useState(0); // Key to force re-render
  const [complexities, setComplexities] = useState({});

  // Handle Algorithm Change
  const handleAlgorithmChange = (newAlgorithm) => {
    setAlgorithm(newAlgorithm);
    setKey((prevKey) => prevKey + 1); // Force re-render of Visualizer
  };

  // Reset everything if array size or speed changes
  const handleArraySizeChange = (newSize) => {
    setArraySize(newSize);
    setKey((prevKey) => prevKey + 1); // Force re-render of Visualizer
  };

  const handleSpeedChange = (newSpeed) => {
    setSpeed(1000 / newSpeed); // Convert slider value to milliseconds
  };

  return (
    <div className="app">
      <h1>Sorting Algorithm Visualizer</h1>
      <div className="controls">
        <AlgorithmSelector setAlgorithm={handleAlgorithmChange} setComplexities={setComplexities} />
        <ArraySizeControl setArraySize={handleArraySizeChange} />
        <SpeedControl setSpeed={handleSpeedChange} />
      </div>
      <Visualizer key={key} algorithm={algorithm} arraySize={arraySize} speed={speed} complexities={complexities} />
    </div>
  );
};

export default App;

