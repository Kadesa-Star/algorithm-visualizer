// src/constants/sortingComplexities.js
export const sortingComplexities = {
  'Bubble Sort': {
    best: { time: 'O(n)', space: 'O(1)' },
    average: { time: 'O(n^2)', space: 'O(1)' },
    worst: { time: 'O(n^2)', space: 'O(1)' },
  },
  'Selection Sort': {
    best: { time: 'O(n^2)', space: 'O(1)' },
    average: { time: 'O(n^2)', space: 'O(1)' },
    worst: { time: 'O(n^2)', space: 'O(1)' },
  },
  'Merge Sort': {
    best: { time: 'O(n log n)', space: 'O(n)' },
    average: { time: 'O(n log n)', space: 'O(n)' },
    worst: { time: 'O(n log n)', space: 'O(n)' },
  },
  'Quick Sort': {
    best: { time: 'O(n log n)', space: 'O(log n)' },
    average: { time: 'O(n log n)', space: 'O(log n)' },
    worst: { time: 'O(n^2)', space: 'O(log n)' },
  },
};
