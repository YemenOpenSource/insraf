"use client";
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

const users = [
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
]
const comments = [
    {id: 11},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10},
    {id: 11},
    {id: 12},
    {id: 13},
    {id: 14},
    {id: 15},
    {id: 16},
    {id: 17},
    {id: 18},
    {id: 19},
    {id: 20},
    {id: 21},
    {id: 22},
    {id: 23},
    {id: 24},
    {id: 25},
    {id: 26},
    {id: 29},
    {id: 30},
]

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels: labels,
    datasets: [
        {
            fill: true,
            label: 'Dataset 2',
            data: users.map(user => user.id),
            borderColor: 'rgb(36, 99, 235)',
            backgroundColor: 'rgb(36, 99, 235, 0.2)',
        },
        {
            fill: true,
            label: 'Datd',
            data: comments.map(user => user.id),
            borderColor: 'rgb(22, 163, 74)',
            backgroundColor: 'rgb(22, 163, 74, 0.1)',
        },

    ],
};

export default function App() {
    return <Line options={options} data={data} />;
}
