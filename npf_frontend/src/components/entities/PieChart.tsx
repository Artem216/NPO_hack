import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ArcElement,
} from 'chart.js';
import { Doughnut, Line, Pie } from 'react-chartjs-2';
import { ILineData } from '@/models';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            display: false,
        },
    },
};


// export const data = {
//     labels,
//     datasets: [
//         {   label: 'Dataset 2',
//             data: [1, 2, 3, 4],
//             borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         },
//         {
//             label: 'Dataset 2',
//             data: [0, 342, 6564, 9],
//             borderColor: 'rgb(53, 162, 235)',
//             backgroundColor: 'rgba(53, 162, 235, 0.5)',
//         },
//     ],
// };

const emptyData: ChartData<"doughnut", number[], string> = {
    labels: [],
    datasets: []
};


export default function PieChart({ lineData, dataTitle }: { lineData: ILineData, dataTitle: string }) {

    const [dataChart, setDataChart] = useState<ChartData<"doughnut", number[], string>>(emptyData);


    useEffect(() => {
        const labels = lineData.labels;

        const data = {
            labels,
            datasets: [
                {
                    label: dataTitle,
                    data: lineData.data,
                    borderColor: ['#2D9BFF', '#536FF9'],
                    backgroundColor: ['#2D9BFF', '#536FF9'],
                },
            ],
        }

        setDataChart(data)

    }, [])




    return <Doughnut options={options} data={dataChart} />;
}
