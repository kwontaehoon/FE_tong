import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const index = ({ chartData }) => {
    return (
        <div className='flex'>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: chartData[0], label: '1월' },
                            { id: 1, value: chartData[1], label: '2월' },
                            { id: 2, value: chartData[2], label: '3월' },
                            { id: 3, value: chartData[3], label: '4월' },
                        ],
                    },
                ]}
                width={300}
                height={200}
            />
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: chartData[4], label: '5월' },
                            { id: 1, value: chartData[5], label: '6월' },
                            { id: 2, value: chartData[6], label: '7월' },
                            { id: 3, value: chartData[7], label: '8월' },
                        ],
                    },
                ]}
                width={300}
                height={200}
            />
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: chartData[8], label: '9월' },
                            { id: 1, value: chartData[9], label: '10월' },
                            { id: 2, value: chartData[10], label: '11월' },
                            { id: 3, value: chartData[11], label: '12월' },
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