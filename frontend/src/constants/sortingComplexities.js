export const sortingComplexities = {
  'Bubble Sort': {
    best: 'O(n)',
    average: 'O(n^2)',
    worst: 'O(n^2)',
    space: 'O(1)', // Bubble Sort is an in-place algorithm
  },
  'Selection Sort': {
    best: 'O(n^2)',
    average: 'O(n^2)',
    worst: 'O(n^2)',
    space: 'O(1)', // Selection Sort is in-place
  },
  'Merge Sort': {
    best: 'O(n log n)',
    average: 'O(n log n)',
    worst: 'O(n log n)',
    space: 'O(n)', // Merge Sort requires additional space
  },
  'Quick Sort': {
    best: 'O(n log n)',
    average: 'O(n log n)',
    worst: 'O(n^2)',
    space: 'O(log n)', // Quick Sort uses recursive stack space
  },
  'Insertion Sort': {
    best: 'O(n)',
    average: 'O(n^2)',
    worst: 'O(n^2)',
    space: 'O(1)', // Insertion Sort is in-place
  },
  'Heap Sort': {
    best: 'O(n log n)',
    average: 'O(n log n)',
    worst: 'O(n log n)',
    space: 'O(1)', // Heap Sort is in-place
  },
};

