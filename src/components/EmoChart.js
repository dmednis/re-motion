import React from 'react';
import { Line } from 'react-chartjs-2';

import emotions from '../emotions'

const emotionsMap = emotions.reduce((acc, val) => {
  acc[val[0]] = val;
  return acc
}, {});

const baseSettings = {
  fill: false,
  lineTension: 0.1,
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: 'rgba(75,192,192,1)',
  pointBackgroundColor: '#fff',
  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
};

function EmoChart({ data1, keys1, data2, keys2 }) {
  const datasets = (user1, keys1, user2, keys2) => {
    return [...Object.keys(user1.self).map(key => {
      return {
        ...baseSettings,
        borderColor: emotionsMap[key][2],
        label: key,
        data: user1.self[key],
        hidden: !keys1.includes(key)
      }
    }),
      ...Object.keys(user2.other).map(key => {
        return {
          ...baseSettings,
          borderColor: emotionsMap[key][3],
          label: key + '-other',
          data: user2.other[key],
          hidden: !keys2.includes(key)
        }
      })]
  };


  return (
    <div className="EmoChart">
      <Line data={{
        labels: data1.labels,
        datasets: datasets(data1, keys1, data2, keys2),
      }} options={{ legend: { display: false } }}/>
    </div>
  );
}

export default EmoChart;
