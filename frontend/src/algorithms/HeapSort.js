export const heapSort = (array) => {
  const steps = [];
  let arr = [...array];

  const heapify = (arr, n, i) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      steps.push([...arr]);
      heapify(arr, n, largest);
    }
  };

  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) heapify(arr, arr.length, i);
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    steps.push([...arr]);
    heapify(arr, i, 0);
  }
  return steps;
};

