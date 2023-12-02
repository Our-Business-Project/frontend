import { FixedCostsData } from '@/core/models/FixedCosts.model';
import React, { useCallback, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const renderActiveShape = (props: any) => {
  const theme = useTheme();
  const matchesSmSize = useMediaQuery(theme.breakpoints.down('sm'));

  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  if (matchesSmSize) {
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {`${(percent * 100).toFixed(2)}%`}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  }

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {`${(percent * 100).toFixed(2)}%`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />

      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
        {payload.name.length > '19' ? payload.name.slice(0, 19) + '...' : payload.name.slice(0, 19)}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`Витрати - ${value}`}
      </text>
    </g>
  );
};

const RenderLegend = ({ payload, COLORS }: { payload: FixedCostsData[]; COLORS: string[] }) => {
  return (
    <Box>
      {payload.map((entry, index) => (
        <Box my="5px" key={index} display="flex" sx={{ alignItems: 'center' }}>
          <Brightness1Icon htmlColor={COLORS[index % COLORS.length]} />
          <Typography ml="10px" variant="body1" color="text.secondary" key={index}>
            {entry.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export function PieChartExample({ data }: { data: FixedCostsData[] }) {
  const COLORS = ['#F45656', '#2A5B7E', '#D5F127', '#3685BF', '#38EE3F', '#3D91DF', '#3DE2BA'];
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = useCallback(
    (entry: any, index: number, event: any) => {
      event.stopPropagation();
      activeIndex !== index && setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <Box sx={{ width: '100%', height: 700, my: '20px' }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            innerRadius={90}
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend content={<RenderLegend payload={data} COLORS={COLORS} />} verticalAlign="top" />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
}
