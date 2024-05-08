import React from 'react'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const index = ({ chartData }) => {

    const data = Array.from({ length: 12 }, (_, index) => ({
        label: `${index+1}월`,
        value: chartData[index],
        color: '#2E35F2'
    }));
      
      const sizing = {
        margin: { right: 5 },
        width: 200,
        height: 200,
        legend: { hidden: true },
      };
      const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);
      
      const getArcLabel = (params) => {
        const percent = params.value / TOTAL;
        return `${(percent * 100).toFixed(0)}%`;
      };

    return chartData.length == 0 ? '' : (
        <div className='flex'>
            <PieChart
      series={[
        {
          outerRadius: 80,
          data,
          arcLabel: getArcLabel,
          innerRadius: 20
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 12,
        },
      }}
      {...sizing}
    />
        </div>
    )
}

export default index