import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: '01.03.2017', всього: 0, закрито: -100, відкрито: 500, amt: 1400 },
  { name: '02.03.2017', всього: 400, закрито: -267, відкрито: 407, amt: 1506 },
  { name: '03.03.2017', всього: 200, закрито: -598, відкрито: 209, amt: 989 },
  { name: '04.03.2017', всього: 600, закрито: -500, відкрито: 320, amt: 1228 },
  { name: '05.03.2017', всього: 200, закрито: -308, відкрито: 110, amt: 1100 },
  { name: '06.03.2017', всього: 100, закрито: -680, відкрито: 280, amt: 1700 },
  { name: '07.03.2017', всього: 290, закрито: -200, відкрито: 200, amt: 1400 },
  { name: '08.03.2017', всього: 368, закрито: -137, відкрито: 67, amt: 1506 },
  { name: '09.03.2017', всього: 297, закрито: -498, відкрито: 109, amt: 989 },
  { name: '10.03.2017', всього: 180, закрито: -300, відкрито: 120, amt: 1228 },
  { name: '11.03.2017', всього: 420, закрито: -108, відкрито: 110, amt: 1100 },
  { name: '12.03.2017', всього: 500, закрито: -380, відкрито: 280, amt: 1700 }];

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
        <Bar dataKey="закрито" stackId="a" barSize={20} fill="#fc0f1b" />
        <Bar dataKey="відкрито" stackId="a" barSize={20} fill="#17af55" />
        <Line type="monotone" dataKey="всього" stroke="#72ab4e" strokeWidth={3} />
        <Legend />
      </ComposedChart>
    );
  }
}
