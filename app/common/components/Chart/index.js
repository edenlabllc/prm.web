import React from 'react';
import withStyles from 'withStyles';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';

import styles from './styles.scss';

const data = [
  { name: '01.03.2017', all: 0, closed: 0, open: 246 },
  { name: '01.03.2017', all: 246, closed: -78, open: 187 },
  { name: '01.03.2017', all: 355, closed: -6, open: 192 },
  { name: '01.03.2017', all: 541, closed: -47, open: 245 },
  { name: '01.03.2017', all: 739, closed: -43, open: 209 },
  { name: '01.03.2017', all: 905, closed: -16, open: 159 },
  { name: '01.03.2017', all: 1048, closed: -43, open: 12 },
  { name: '01.03.2017', all: 1017, closed: -34, open: 94 },
  { name: '01.03.2017', all: 1077, closed: -44, open: 178 },
  { name: '01.03.2017', all: 1211, closed: -95, open: 199 },
  { name: '01.03.2017', all: 1315, closed: -91, open: 196 },
  { name: '01.03.2017', all: 1420, closed: -74, open: 152 }];

const CustomizedAxisTick = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={0} fontSize={10} textAnchor="middle" fill="#666" transform="rotate(-35)">{payload.value}</text>
  </g>
);

const CustomizedLabel = ({ x, y, stroke, value }) => (
  <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>
);


@withStyles(styles)
export default class Chart extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.total}>
          {`Декларацій всього ${data[data.length - 1].all}`}
        </div>
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
          stackOffset="sign"
        >
          <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
          <ReferenceLine y={0} stroke="#000" />
          <Bar name="Закрито" dataKey="closed" stackId="a" barSize={20} fill="#fc0f1b" />
          <Bar name="Відкрито" dataKey="open" stackId="a" barSize={20} fill="#17af55" />
          <Line name="Всього" type="monotone" dataKey="all" stroke="#72ab4e" strokeWidth={3} label={<CustomizedLabel />} />
          <Legend />
        </ComposedChart>
      </div>

    );
  }
}
