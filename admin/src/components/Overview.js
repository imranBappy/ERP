import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Week 1',
        Result: 4000,
        Attendance: 2400,
        amt: 2400,
    },
    {
        name: 'Week 2',
        Result: 3000,
        Attendance: 1398,
        amt: 2210,
    },
    {
        name: 'Week 3',
        Result: 2000,
        Attendance: 9800,
        amt: 2290,
    },
    {
        name: 'Week 4',
        Result: 2780,
        Attendance: 3908,
        amt: 2000,
    },
    {
        name: 'Week 5',
        Result: 1890,
        Attendance: 4800,
        amt: 2181,
    },
    {
        name: 'Week 6',
        Result: 2390,
        Attendance: 3800,
        amt: 2500,
    },
    {
        name: 'Week 7',
        Result: 3490,
        Attendance: 4300,
        amt: 2100,
    },
];

const Overview = () => {

    return (
        <ResponsiveContainer width="95%" height="83%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Attendance" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Result" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Overview;
