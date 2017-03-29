import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: '01.03.2017', all: 0, closed: -100, open: 500 },
  { name: '02.03.2017', all: 400, closed: -267, open: 407 },
  { name: '03.03.2017', all: 200, closed: -598, open: 209 },
  { name: '04.03.2017', all: 600, closed: -500, open: 320 },
  { name: '05.03.2017', all: 200, closed: -308, open: 110 },
  { name: '06.03.2017', all: 100, closed: -680, open: 280 },
  { name: '07.03.2017', all: 290, closed: -200, open: 200 },
  { name: '08.03.2017', all: 368, closed: -137, open: 67 },
  { name: '09.03.2017', all: 297, closed: -498, open: 109 },
  { name: '10.03.2017', all: 180, closed: -300, open: 120 },
  { name: '11.03.2017', all: 420, closed: -108, open: 110 },
  { name: '12.03.2017', all: 500, closed: -380, open: 280 }];

const CustomizedAxisTick = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={0} fontSize={10} textAnchor="middle" fill="#666" transform="rotate(-35)">{payload.value}</text>
  </g>
);

export default class Chart extends React.Component {
  render() {
    return (
      <ComposedChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
        <Bar name="Закрито" dataKey="closed" stackId="a" barSize={20} fill="#fc0f1b" />
        <Bar name="Відкрито" dataKey="open" stackId="a" barSize={20} fill="#17af55" />
        <Line name="Всього" type="monotone" dataKey="all" stroke="#72ab4e" strokeWidth={3} />
        <Legend />
      </ComposedChart>
    );
  }
}
