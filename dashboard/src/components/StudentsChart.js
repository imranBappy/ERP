
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Month A',
        uv: 4000,
        Income: 2400,
        amt: 2400,
    },
    {
        name: 'Month B',
        uv: 3000,
        Income: 1398,
        amt: 2210,
    },
    {
        name: 'Month C',
        uv: 2000,
        Income: 9800,
        amt: 2290,
    },
    {
        name: 'Month D',
        uv: 2780,
        Income: 3908,
        amt: 2000,
    },
    {
        name: 'Month E',
        uv: 1890,
        Income: 4800,
        amt: 2181,
    },
    {
        name: 'Month F',
        uv: 2390,
        Income: 3800,
        amt: 2500,
    },
    {
        name: 'Month G',
        uv: 3490,
        Income: 4300,
        amt: 2100,
    },
];


const StudentsChart = () => {
    return (
        <ResponsiveContainer width="95%" height="83%">
            <BarChart
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
                <Bar dataKey="Income" fill="#8884d8" background={{ fill: '#eee' }} />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default StudentsChart;