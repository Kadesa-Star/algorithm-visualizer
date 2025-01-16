export const insertionSort = (array) => {
  const steps = [];
  let arr = [...array];
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      steps.push([...arr]); // Capture step
      j = j - 1;
    }
    arr[j + 1] = key;
    steps.push([...arr]); // Capture step
  }
  return steps;
};

