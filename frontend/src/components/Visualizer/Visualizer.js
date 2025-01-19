import React, { useState, useEffect, useCallback } from 'react';
import { bubbleSort } from '../../algorithms/BubbleSort';
import { selectionSort } from '../../algorithms/SelectionSort';
import { mergeSort } from '../../algorithms/MergeSort';
import { quickSort } from '../../algorithms/QuickSort';
import { insertionSort } from '../../algorithms/InsertionSort';
import { heapSort } from '../../algorithms/HeapSort';
import { sortingComplexities } from '../../constants/sortingComplexities';

const Visualizer = ({ algorithm, arraySize, speed, complexities }) => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  const resetArray = useCallback(() => {
    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(randomIntFromInterval(5, 500));
    }
    setArray(newArray);
    setIsSorting(false);  // Ensure sorting is stopped when resetting
  }, [arraySize]);

  useEffect(() => {
    resetArray();
  }, [arraySize, resetArray]);

  useEffect(() => {
    if (algorithm) {
      resetArray();
    }
  }, [algorithm, resetArray]);

  const visualizeAlgorithm = () => {
    if (isSorting) return; // Prevent multiple sorts at once

    setIsSorting(true);
    let sortingSteps;
    switch (algorithm) {
      case 'Bubble Sort':
        sortingSteps = bubbleSort(array);
        break;
      case 'Selection Sort':
        sortingSteps = selectionSort(array);
        break;
      case 'Merge Sort':
        sortingSteps = mergeSort(array);
        break;
      case 'Quick Sort':
        sortingSteps = quickSort(array);
        break;
      case 'Insertion Sort':
        sortingSteps = insertionSort(array);
        break;
      case 'Heap Sort':
        sortingSteps = heapSort(array);
        break;
      default:
        return;
    }

    animateSortingSteps(sortingSteps);
  };

  const animateSortingSteps = (sortingSteps) => {
    let stepIndex = 0;
    const interval = setInterval(() => {
      if (stepIndex < sortingSteps.length) {
        setArray([...sortingSteps[stepIndex]]);
        stepIndex++;
      } else {
        clearInterval(interval);
        setIsSorting(false);
      }
    }, speed);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getTimeComplexity = (algorithm) => {
    if (!algorithm) return 'N/A';
    const complexities = sortingComplexities[algorithm];
    return `BC: ${complexities.best}, AC: ${complexities.average}, WC: ${complexities.worst}`;
  };

  const getSpaceComplexity = (algorithm) => {
    if (!algorithm) return 'N/A';
    const complexities = sortingComplexities[algorithm];
    return complexities.space || 'O(n)'; // Default to O(n) if space complexity not available
  };

  return (
    <div className="visualizer">
      <div className="array-container">
        {array.map((value, index) => (
          <div
            className="array-bar"
            style={{ height: `${value}px`, width: `${100 / arraySize}%` }}
            key={index}
          ></div>
        ))}
      </div>
      <div className="controls">
        <button onClick={visualizeAlgorithm} disabled={isSorting}>
          {isSorting ? 'Sorting...' : 'Visualize Algorithm'}
        </button>
        <button onClick={resetArray} disabled={isSorting}>
          Reset
        </button>
      </div>
      <div className="algorithm-complexities">
        <h3>Algorithm Complexities</h3>
        <p>Time Complexity: {getTimeComplexity(algorithm)}</p>
        <p>Space Complexity: {getSpaceComplexity(algorithm)}</p>
      </div>
    </div>
  );
};

export default Visualizer;

