import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { useInteractions } from './Context';

const FriendshipAnalytics = () => {
  const { interactionStats } = useInteractions();

  const chartData = [
    { name: 'Calls',  value: interactionStats.Call,  color: '#2D4A3E' },
    { name: 'Texts',  value: interactionStats.Text,  color: '#8B3DFF' },
    { name: 'Videos', value: interactionStats.Video, color: '#3BA85C' },
  ];

  const hasData = interactionStats.Call > 0 || interactionStats.Text > 0 || interactionStats.Video > 0;

  return (
    <div className="bg-white border rounded-xl p-8 max-w-2xl mx-auto my-10 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">Friendship Analytics</h2>
      <p className="text-gray-500 mb-6">Visualizing your interaction habits</p>

      <div className="h-64 w-full">
        {hasData ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
              >
                {chartData.map((item, index) => (
                  <Cell key={index} fill={item.color} stroke="none" />
                ))}
              </Pie>
              <Legend iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 italic text-center">
            No interactions recorded yet. <br /> Use the buttons to start tracking!
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendshipAnalytics;