// import { Tooltip } from 'bootstrap';
import React from 'react';
import { Line, LineChart, XAxis } from 'recharts';
import './style.css';

const SocialChart = () => {
  const data = [
    {
      name: 'Jan 22',
      uv: 4000,
      pv: 5000,
      amt: 2400,
    },
    {
      name: 'Feb 22',
      uv: 3000,
      pv: 7000,
      amt: 2210,
    },
    {
      name: 'March 22',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'April 22',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May 22',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'June 22',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];
  return (
    <div>
      <LineChart
        width={225}
        height={133.63}
        data={data}
        margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
      >
        <defs>
          <linearGradient id='colorUv' x1='0%' y1='0' x2='100%' y2='0'>
            <stop offset='0%' stopColor='#6219F5' />
            <stop offset='33.33%' stopColor='#C23776' />
            <stop offset='66.66%' stopColor='#8A46A5' />
          </linearGradient>
        </defs>
        <XAxis dataKey='name' />
        <Line type='monotone' dataKey='pv' stroke='url(#colorUv)' />
        <Line type='monotone' dataKey='uv' stroke='#1CB7EB' />
      </LineChart>
    </div>
  );
};

export default SocialChart;
