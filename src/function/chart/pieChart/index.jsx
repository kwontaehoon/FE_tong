import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const index = ({ chartData }) => {
    return (
        <div className='flex'>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: chartData[0], label: 'series A' },
                            { id: 1, value: chartData[1], label: 'series B' },
                            { id: 2, value: chartData[2], label: 'series C' },
                        ],
                    },
                ]}
                width={400}
                height={200}
            />
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: chartData[3], label: 'series A' },
                            { id: 1, value: 1, label: 'series B' },
                            { id: 2, value: chartData[5], label: 'series C' },
                        ],
                    },
                ]}
                width={400}
                height={200}
            />
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 10, label: 'series A' },
                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 20, label: 'series C' },
                        ],
                    },
                ]}
                width={400}
                height={200}
            />
        </div>
    )
}

export default index