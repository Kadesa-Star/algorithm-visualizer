import React from 'react';
import { Line } from 'react-chartjs-2';

const PerformanceChart = ({ bubbleData, mergeData, quickData, insertionData, heapData }) => {
  const data = {
    labels: [...Array(bubbleData.length).keys()],
    datasets: [
      {
        label: 'Bubble Sort',
        data: bubbleData,
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.1,
      },
      {
        label: 'Merge Sort',
        data: mergeData,
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.1,
      },
      {
        label: 'Quick Sort',
        data: quickData,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
      {
        label: 'Insertion Sort',
        data: insertionData,
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
      },
      {
        label: 'Heap Sort',
        data: heapData,
        fill: false,
        borderColor: 'rgba(255, 159, 64, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default PerformanceChart;

