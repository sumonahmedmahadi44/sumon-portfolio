import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const useSkill = ({ name, percentage }) => {
  return (
    <div className="flex items-center mb-6">
      <div className="w-20 h-20 relative">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={8}
          styles={buildStyles({
            pathColor: `#7C3AED`,
            textColor: '#7C3AED',
            trailColor: 'rgba(124, 58, 237, 0.1)',
            strokeLinecap: 'round',
          })}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-semibold text-white">{percentage}%</span>
        </div>
      </div>
      <div className="ml-6">
        <h3 className="text-xl font-semibold text-pink-300">{name}</h3>
        <div className="bg-gray-200 h-2 w-48 mt-2">
          <div
            className="h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default useSkill;