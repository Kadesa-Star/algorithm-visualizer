export const mergeSort = (arr) => {
  const steps = [];

  const merge = (left, right) => {
    let sorted = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
      steps.push([...sorted, ...left, ...right]);
    }
    return [...sorted, ...left, ...right];
  };

  const sort = (arr) => {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = sort(arr.slice(0, mid));
    const right = sort(arr.slice(mid));
    return merge(left, right);
  };

  sort(arr);
  return steps;
};
