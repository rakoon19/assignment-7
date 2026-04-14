import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Call', value: 45, color: '#2D4A3E' }, 
  { name: 'Text', value: 30, color: '#8B3DFF' },  
  { name: 'Video', value: 25, color: '#3BA85C' }, 
];

const FriendshipAnalytics = () => {
  return (
    <div className=" bg-white border border-gray-100 rounded-xl my-10 p-8 w-full max-w-2xl mx-auto">

      <div className="mb-6">
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
          Friendship Analytics
        </h2>
        <p className="text-sm font-medium text-emerald-800/80 mt-2">
          By Interaction Type
        </p>
      </div>


      <div className="h-70 w-full">
        <ResponsiveContainer width="100%" height="100%" >
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={95}
              paddingAngle={6}
              dataKey="value"
              startAngle={90}
              endAngle={450}
            >
            {data.map((entry, index) => (
            <Cell 
                key={`cell-${index}`} 
                fill={entry.color} 
                stroke="none"
                style={{ outline: 'none' }}
            />
            ))}
            </Pie>
            <Legend 
              verticalAlign="bottom" 
              align="center"
              iconType="circle" 
              iconSize={8}
              formatter={(value) => (
                <span className="text-gray-500 text-xs font-medium ml-1">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FriendshipAnalytics;