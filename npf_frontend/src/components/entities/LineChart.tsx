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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ILineData } from '@/models';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

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

const emptyData: ChartData<"line", number[], string> = {
    labels: [],
    datasets: []
};


export default function LineChart({ lineData, dataTitle }: { lineData: ILineData, dataTitle: string }) {

    const [dataChart, setDataChart] = useState<ChartData<"line", number[], string>>(emptyData);


    useEffect(() => {
        const labels = lineData.labels;

        const data = {
            labels,
            datasets: [
                {
                    label: dataTitle,
                    data: lineData.data,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],
        }

        setDataChart(data)

    }, [])




    return <Line options={options} data={dataChart} />;
}
