import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const index = ({ chartData }) => {

    const dataset = Array.from({ length: 12 }, (_, index) => ({
        london: chartData[index],
        month: `${index + 1}월`
    }));

    const chartSetting = {
        yAxis: [
            {
                label: 'rainfall (mm)',
            },
        ],
        width: 500,
        height: 300,
        sx: {
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translate(-20px, 0)',
            },
        },
    };

    const valueFormatter = (value) => `${value}명`;

    return (
        <BarChart
            dataset={dataset}
            xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
            series={[
                { dataKey: 'london', valueFormatter, color: "#00D4EA" },
            ]}
            {...chartSetting}
        />
    )
}

export default index