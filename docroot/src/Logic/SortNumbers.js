import React from 'react';

const SortNumbers = ({ numbers }) => {
  const sortNumbers = (arr) => {
    let len = arr.length;
    let swapped;

    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);

    return arr;
  };

  const ascendingOrder = sortNumbers([...numbers]);
  const descendingOrder = sortNumbers([...numbers]).reverse();

  return (
    <div>
      <h2>Sort Numbers</h2>
      <p>Ascending Order: {ascendingOrder.join(', ')}</p>
      <p>Descending Order: {descendingOrder.join(', ')}</p>
    </div>
  );
};

export default SortNumbers;
