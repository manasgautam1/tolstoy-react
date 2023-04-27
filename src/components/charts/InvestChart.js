// import { Tooltip } from 'bootstrap';
import React from 'react';
import { Line, LineChart, XAxis } from 'recharts';
import './style.css';

const InvestChart = () => {
  const data = [
    {
      name: 'Q1 22',
      uv: 4000,
      pv: 5000,
      amt: 2400,
    },
    {
      name: 'Q2 22',
      uv: 3000,
      pv: 7000,
      amt: 2210,
    },
    {
      name: 'Q3 22',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Q4 22',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ];
  return (
    <div>
      <LineChart
        width={350}
        height={133.63}
        data={data}
        margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
      >
        <XAxis dataKey='name' />
        <Line type='monotone' dataKey='pv' stroke='#6219F5' />
      </LineChart>
    </div>
  );
};

export default InvestChart;
