/* eslint-disable react-hooks/purity */
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { FiPhoneCall, FiArchive } from "react-icons/fi";
import { RiMessage2Line, RiDeleteBin5Line } from "react-icons/ri";
import { IoVideocamOutline } from "react-icons/io5";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { useInteractions } from "../Stats/Context";

const FriendDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [friend, setFriend] = useState(null);
  const [localTimeline, setLocalTimeline] = useState([]);
  const { addInteraction } = useInteractions();

  useEffect(() => {
    const loadFriend = async () => {
      try {
        const response = await fetch("/assets/friendsdata.JSON");
        const data = await response.json();
        const foundFriend = data.find(f => f.id === parseInt(id));
        if (foundFriend) {
          setFriend(foundFriend);
        } else {
          navigate('/'); // Redirect to home if friend not found
        }
      } catch (error) {
        console.error("Error loading friend:", error);
        navigate('/');
      }
    };

    if (id) {
      loadFriend();
    }
  }, [id, navigate]);

  const handleQuickCheckIn = (type) => {
    if (!friend) return;

    const title = `${type} with ${friend.name}`;
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString("en-US", {
        month: "long", day: "numeric", year: "numeric",
      }),
      title,
      type,
    };

    const existing = JSON.parse(localStorage.getItem("timelineInteractions") || "[]");
    localStorage.setItem("timelineInteractions", JSON.stringify([newEntry, ...existing]));
    
    setLocalTimeline((prev) => [newEntry, ...prev]);
    addInteraction(type);

    const toast = document.createElement("div");
    toast.className = "toast toast-end toast-end z-50";
    toast.innerHTML = `<div class="alert alert-success shadow-lg text-white"><span>${type} recorded!</span></div>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  };

  if (!friend) {
    return (
      <div className="p-6 bg-base-200 min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  const getStatusBadge = (status) => {
    const statusUpper = status.toUpperCase();
    switch (status) {
      case "on-track":
        return <span className="badge badge-success text-white font-semibold">{statusUpper}</span>;
      case "almost due":
        return <span className="badge" style={{ backgroundColor: "#F59E0B" }}><span className="text-white font-semibold">{statusUpper}</span></span>;
      case "overdue":
        return <span className="badge badge-error text-white font-semibold">{statusUpper}</span>;
      default:
        return <span className="badge badge-neutral text-white font-semibold">{statusUpper}</span>;
    }
  };

  const stats = [
    { label: "Days Since Contact", value: friend.days_since_contact },
    { label: "Goal (Days)", value: friend.goal },
    { label: "Next Due", value: friend.next_due_date },
  ];

  const actions = [
    { type: "Call", icon: <FiPhoneCall size={28} />, color: "hover:bg-blue-50" },
    { type: "Text", icon: <RiMessage2Line size={28} />, color: "hover:bg-emerald-50" },
    { type: "Video", icon: <IoVideocamOutline size={28} />, color: "hover:bg-purple-50" },
  ];

  if (!friend) {
    return (
      <div className="p-6 bg-base-200 min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-base-200 min-h-screen font-sans">
      <button onClick={() => navigate(-1)} className="btn btn-sm mb-6 btn-ghost">← Back</button>

      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4">
          <div className="card bg-base-100 shadow-sm p-6 flex flex-col items-center text-center">
            <img src={friend.picture} className="w-28 h-28 rounded-full object-cover border-2 border-gray-100" alt={friend.name} />
            <h2 className="text-2xl font-bold mt-4 text-slate-800">{friend.name}</h2>
            <div className="mt-2">
              {getStatusBadge(friend.status)}
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {friend.tags?.map((tag, index) => (
                <span key={index} className="badge badge-outline text-[10px] uppercase font-bold text-gray-400">{tag}</span>
              ))}
            </div>
            
            <div className="mt-4 w-full">
              <p className="text-sm text-gray-600 leading-relaxed">{friend.bio}</p>
            </div>

            <div className="divider my-4"></div>

            <div className="w-full space-y-2">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Contact</p>
              <a href={`mailto:${friend.email}`} className="text-sm text-blue-500 hover:underline block truncate">
                {friend.email}
              </a>
            </div>

            <div className="mt-8 w-full space-y-2">
              <button className="btn btn-outline btn-block justify-start gap-3 border-gray-200 text-gray-600 font-medium hover:bg-gray-50">
                <HiOutlineBellSnooze /> Snooze 2 Weeks
              </button>
              <button className="btn btn-outline btn-block justify-start gap-3 border-gray-200 text-gray-600 font-medium hover:bg-gray-50">
                <FiArchive /> Archive Friend
              </button>
              <button className="btn btn-outline btn-block justify-start gap-3 border-gray-200 text-red-500 hover:bg-red-50 hover:border-red-200">
                <RiDeleteBin5Line /> Delete Contact
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="card bg-base-100 p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="text-4xl font-black text-[#244D3F]">{stat.value}</p>
                <p className="text-xs font-bold text-gray-400 uppercase mt-1 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="card bg-base-100 p-6 shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-4">Quick Check-In</h3>
            <p className="text-xs text-gray-500 mb-4">Record your interaction</p>
            <div className="grid grid-cols-3 gap-4">
              {actions.map((act) => (
                <button
                  key={act.type}
                  onClick={() => handleQuickCheckIn(act.type)}
                  className={`btn btn-outline h-28 flex flex-col gap-2 border-gray-100 transition-all duration-300 ${act.color}`}
                >
                  {act.icon}
                  <span className="text-xs font-bold uppercase tracking-widest">{act.type}</span>
                </button>
              ))}
            </div>
          </div>

          {localTimeline.length > 0 && (
            <div className="card bg-base-100 p-6 shadow-sm">
              <h3 className="font-bold text-lg text-slate-800 mb-4">Recent Interactions</h3>
              <div className="space-y-3">
                {localTimeline.map((item) => {
                  const titleLower = item.title.toLowerCase();
                  const isCall = titleLower.includes("call");
                  const isMsg = titleLower.includes("text") || titleLower.includes("msg");
                  const isVideo = titleLower.includes("video");

                  return (
                    <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-100 rounded-2xl transition-all hover:bg-white hover:shadow-md">
                      <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-white rounded-xl shadow-sm">
                        {isCall && <img src="/assets/call.png" alt="Call" className="w-8 h-8 object-contain" />}
                        {isMsg && <img src="/assets/text.png" alt="Msg" className="w-8 h-8 object-contain" />}
                        {isVideo && <img src="/assets/video.png" alt="Video" className="w-8 h-8 object-contain" />}
                        {!isCall && !isMsg && !isVideo && <span className="text-2xl">📅</span>}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-slate-800 leading-tight">{item.title}</p>
                        <p className="text-xs font-semibold text-gray-400 mt-1 uppercase tracking-tighter">{item.date}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendDetail;