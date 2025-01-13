export const quickSort = (arr) => {
  const steps = [];

  const sort = (arr, low, high) => {
    if (low < high) {
      const pivotIndex = partition(arr, low, high);
      sort(arr, low, pivotIndex - 1);
      sort(arr, pivotIndex + 1, high);
    }
  };

  const partition = (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        steps.push([...arr]); // Save the current state as a step
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    steps.push([...arr]); // Save the current state as a step
    return i + 1;
  };

  sort(arr, 0, arr.length - 1);
  return steps;
};
