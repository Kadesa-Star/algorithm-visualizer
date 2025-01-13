import React, { useState, useEffect, useCallback } from 'react';
import './Visualizer.css';
import { bubbleSort } from '../../algorithms/BubbleSort';
import { selectionSort } from '../../algorithms/SelectionSort';
import { mergeSort } from '../../algorithms/MergeSort';
import { quickSort } from '../../algorithms/QuickSort';

const Visualizer = ({ algorithm, arraySize, speed }) => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);

  const generateArray = useCallback(() => {
    const newArray = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 500) + 5);
    setArray(newArray);
    document.documentElement.style.setProperty('--array-size', arraySize); // Update CSS variable
  }, [arraySize]);

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  useEffect(() => {
    generateArray();
    setSorting(false);
  }, [algorithm, generateArray]);

  const visualizeSorting = () => {
    if (!algorithm) {
      alert('Please select a sorting algorithm!');
      return;
    }
    if (sorting) {
      alert('Sorting is already in progress!');
      return;
    }

    setSorting(true);

    let sortingSteps = [];
    switch (algorithm) {
      case 'Bubble Sort':
        sortingSteps = bubbleSort([...array]);
        break;
      case 'Selection Sort':
        sortingSteps = selectionSort([...array]);
        break;
      case 'Merge Sort':
        sortingSteps = mergeSort([...array]);
        break;
      case 'Quick Sort':
        sortingSteps = quickSort([...array]);
        break;
      default:
        console.error('Invalid algorithm selected.');
        setSorting(false);
        return;
    }

    let stepIndex = 0;

    const executeStep = () => {
      if (stepIndex >= sortingSteps.length) {
        setSorting(false);
        return;
      }

      setArray(sortingSteps[stepIndex]);
      stepIndex++;

      setTimeout(executeStep, speed);
    };

    executeStep();
  };

  return (
    <div className="visualizer">
      <div className="controls">
        <button onClick={visualizeSorting} disabled={sorting}>
          {sorting ? 'Sorting...' : 'Visualize Sorting'}
        </button>
        <button onClick={generateArray} disabled={sorting}>
          Reset Array
        </button>
      </div>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="array-bar"
            style={{
              height: `${(value / 500) * 100}%`, // Scale height relative to max value
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Visualizer;

