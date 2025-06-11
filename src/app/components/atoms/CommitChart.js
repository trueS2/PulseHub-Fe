// src/app/components/molecules/CommitChart.js
import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';

function CommitChart({ data }) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#8cc69f" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default CommitChart;
