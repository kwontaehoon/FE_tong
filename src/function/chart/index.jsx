import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

const index = ({ chartData }) => {
    console.log("chartData: ", chartData);

    const month = Array(12).fill(0).map((_, index) => `${index+1}월`);

    return (
        <LineChart
        xAxis={[
            {
              id: 'Month',
              data: month,
              scaleType: 'point',

            },
          ]}
            series={[
                {
                    data: chartData,
                },
            ]}
            height={200}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
        />
    )
}

export default index