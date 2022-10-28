import React from 'react';

const ScoreCounter = ({ count, total, streak }) => {
  const percentage = ((count / total) * 100).toFixed(0);

  return (
    <div className="text-primary text-2xl absolute right-0 top-0 m-8 flex-col text-right">
      <p>🔥 {streak}</p>
      <p>
        {count} / {total}
      </p>
      {!isNaN(percentage) && <p>{percentage}%</p>}
      {isNaN(percentage) && <p>0%</p>}
    </div>
  );
};
export { ScoreCounter };
