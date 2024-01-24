import React from 'react';

const FishBash = ({ count }) => {
  const printFishBash = (count) => {
    for (let i = 1; i <= count; i++) {
      if (i % 15 === 0) {
        console.log('fish bash');
      } else if (i % 3 === 0) {
        console.log('fish');
      } else if (i % 5 === 0) {
        console.log('bash');
      } else {
        console.log(i);
      }
    }
  };

  return (
    <div>
      <h2>Print Fish Bash</h2>
      {printFishBash(count)}
    </div>
  );
};

export default FishBash;
