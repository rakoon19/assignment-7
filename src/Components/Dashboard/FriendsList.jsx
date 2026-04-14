import Tracker from "./Tracker";
import { useEffect, useState } from "react";

const FriendsList = () => {
  const [friendsdata, setFriendsdata] = useState([]);

  useEffect(() => {
    const loadFriends = async () => {
      try {
        const response = await fetch('/assets/friendsdata.JSON');
        const data = await response.json();
        setFriendsdata(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    loadFriends();
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'on-track':
        return 'bg-[#2D6A4F] text-white';
      case 'almost due':
        return 'bg-[#F59E0B] text-white';
      case 'overdue':
        return 'bg-[#EF4444] text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getTagStyle = (tag) => {
    const tagLower = tag.toLowerCase();
    if (tagLower.includes('work')) return 'bg-[#D1FAE5] text-[#065F46] border-[#A7F3D0]';
    if (tagLower.includes('family')) return 'bg-[#DBEAFE] text-[#1E40AF] border-[#BFDBFE]';
    if (tagLower.includes('hobby')) return 'bg-[#D1FAE5] text-[#065F46] border-[#A7F3D0]';
    if (tagLower.includes('travel')) return 'bg-[#D1FAE5] text-[#065F46] border-[#A7F3D0]';
    if (tagLower.includes('college') || tagLower.includes('high school')) return 'bg-[#DBEAFE] text-[#1E40AF] border-[#BFDBFE]';
    return 'bg-gray-100 text-gray-700 border-gray-300';
  };

  const formatStatus = (status) => {
    if (status === 'on-track') return 'On Track';
    if (status === 'almost due') return 'Almost Due';
    if (status === 'overdue') return 'Overdue';
    return status;
  };

  return (
    <div className="flex flex-col gap-10 p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <Tracker />
      
      <div className="divider"></div>

      <div className="flex flex-col gap-6">
        <p className="font-semibold text-2xl text-gray-800">Your Friends</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friendsdata.map((friend) => (
            <div 
              key={friend.id} 
              className="bg-white rounded-lg p-6 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                <img 
                  src={friend.picture} 
                  alt={friend.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-semibold text-lg text-gray-900">
                {friend.name}
              </h3>

              <p className="text-sm text-gray-500">
                {friend.days_since_contact}d ago
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                {friend.tags.slice(0, 2).map((tag, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 rounded-full text-xs font-medium uppercase border ${getTagStyle(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-2">
                <span 
                  className={`px-4 py-1.5 rounded-full text-xs font-medium ${getStatusStyle(friend.status)}`}
                >
                  {formatStatus(friend.status)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsList;