import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const index = () => {

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
    const dataset = [
        {
            london: 59,
            month: '1월',
        },
        {
            london: 50,
            month: '2월',
        },
        {
            london: 47,
            month: '3월',
        },
        {
            london: 54,
            month: '4월',
        },
        {
            london: 57,
            month: '5월',
        },
        {
            london: 60,
            month: '6월',
        },
        {
            london: 59,
            month: '7월',
        },
        {
            london: 65,
            month: '8월',
        },
        {
            london: 51,
            month: '9월',
        },
        {
            london: 60,
            month: '10월',
        },
        {
            london: 67,
            month: '11월',
        },
        {
            london: 61,
            month: '12월',
        },
    ];

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