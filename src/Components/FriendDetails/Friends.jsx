import { HiOutlineBellSnooze } from "react-icons/hi2";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { RiMessage2Line } from "react-icons/ri";
import { IoVideocamOutline } from "react-icons/io5";



const FriendDetail = ({ friend, onBack }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "on-track":
        return "bg-[#2D6A4F] text-white";
      case "almost due":
        return "bg-[#F59E0B] text-white";
      case "overdue":
        return "bg-[#EF4444] text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      
      <button className="btn btn-sm mb-4" onClick={onBack}>
        ← Back
      </button>

      <div className="grid md:grid-cols-3 gap-6">
        
        <div className="card bg-base-100 shadow-md p-4">
          <div className="flex flex-col items-center text-center">
            <img
              src={friend.picture}
              className="w-20 h-20 rounded-full"
            />

            <h2 className="text-lg font-semibold mt-2">
              {friend.name}
            </h2>

            <span className={`badge ${getStatusStyle(friend.status)} mt-2`}>
              {friend.status}
            </span>

            <div className="flex flex-wrap gap-1 mt-2">
              {friend.tags.map((tag, i) => (
                <span key={i} className="badge badge-outline text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-3 italic">
              {friend.bio}
            </p>

            <p className="text-xs mt-2 text-gray-400">
              {friend.email}
            </p>
          </div>

          <div className="mt-4 space-y-2">
            <button className="btn btn-outline w-full">
              <HiOutlineBellSnooze /> Snooze 2 Weeks
            </button>
            <button className="btn btn-outline w-full">
                <FiArchive /> Archive
            </button>
            <button className="btn btn-outline text-red-500 w-full">
              <RiDeleteBin5Line /> Delete
            </button>
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          
          <div className="grid grid-cols-3 gap-4">
            <div className="card bg-base-100 p-4 text-center shadow">
              <p className="text-[#244D3F] text-3xl font-semibold text-center">
                {friend.days_since_contact}
              </p>
              <p className="text-[#64748B] text-center">
                Days Since Contact
              </p>
            </div>

            <div className="card bg-base-100 p-4 text-center shadow">
              <p className="text-[#244D3F] text-3xl font-semibold text-center">
                {friend.goal}
              </p>
              <p className="text-[#64748B] text-center">
                Goal (Days)
              </p>
            </div>

            <div className="card bg-base-100 p-4 text-center shadow">
              <p className="text-[#244D3F] text-3xl font-semibold text-center">
                {friend.next_due_date}
              </p>
              <p className="text-[#64748B] text-center">
                Next Due
              </p>
            </div>
          </div>

          <div className="card bg-base-100 p-4 shadow">
            <div className="flex justify-between">
              <h3 className="font-semibold text-[#244D3F]">Relationship Goal</h3>
              <button className="btn btn-xs">Edit</button>
            </div>
            <p className="text-sm mt-2">
              Connect every <b>{friend.goal} days</b>
            </p>
          </div>

          <div className="card bg-base-100 p-4 shadow">
            <h3 className="font-semibold mb-3 text-[#244D3F]">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4">
            
            <div className="card bg-[#fafafa] shadow-sm hover:shadow-md cursor-pointer p-6 flex flex-col items-center justify-center gap-2 transition">
                <FiPhoneCall size={24} />
                <p className="text-sm font-medium">Call</p>
            </div>

            <div className="card bg-[#fafafa] shadow-sm hover:shadow-md cursor-pointer p-6 flex flex-col items-center justify-center gap-2 transition">
                <RiMessage2Line size={24} />
                <p className="text-sm font-medium">Text</p>
            </div>

            <div className="card bg-[#fafafa] shadow-sm hover:shadow-md cursor-pointer p-6 flex flex-col items-center justify-center gap-2 transition">
                <IoVideocamOutline size={24} />
                <p className="text-sm font-medium">Video</p>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetail;