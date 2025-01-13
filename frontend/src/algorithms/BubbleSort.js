export const bubbleSort = (arr) => {
  const steps = [];
  let swapped;

  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        steps.push([...arr]); // Save the current state as a step
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return steps;
};
