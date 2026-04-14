import { useState, useEffect } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { RiMessage2Line } from "react-icons/ri";
import { IoVideocamOutline } from "react-icons/io5";
import { HiOutlineHand } from "react-icons/hi";

const Timeline = () => {
  const [interactions, setInteractions] = useState([]);

  useEffect(() => {
    const loadInteractions = () => {
      const saved = localStorage.getItem("timelineInteractions");
      if (saved) {
        try {
          setInteractions(JSON.parse(saved));
        } catch (e) {
          console.error("Failed to parse timeline data", e);
          setInteractions([]);
        }
      }
    };

    loadInteractions();

    window.addEventListener("storage", loadInteractions);

    return () => {
      window.removeEventListener("storage", loadInteractions);
    };
  }, []);

  const getIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes("meetup") || t.includes("meeting")) {
      return <HiOutlineHand className="w-6 h-6 text-amber-500" />;
    }
    if (t.includes("call")) {
      return <FiPhoneCall className="w-6 h-6 text-blue-600" />;
    }
    if (t.includes("text")) {
      return <RiMessage2Line className="w-6 h-6 text-emerald-600" />;
    }
    if (t.includes("video")) {
      return <IoVideocamOutline className="w-6 h-6 text-purple-600" />;
    }
    return <span className="text-2xl">•</span>;
  };

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Timeline</h1>

        <div className="mb-6">
          <select className="select select-bordered w-full max-w-xs bg-white">
            <option>Filter timeline</option>
            <option>All Interactions</option>
            <option>Meetups</option>
            <option>Calls</option>
            <option>Texts</option>
            <option>Videos</option>
          </select>
        </div>

        <div className="space-y-4">
          {interactions.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
              <p className="text-gray-500 text-lg">
                No interactions yet.<br />
                Go to a friend's detail and use Quick Check-In.
              </p>
            </div>
          ) : (
            interactions.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 hover:border-gray-300 p-5 rounded-2xl flex items-center gap-5 transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-base-100 rounded-xl flex-shrink-0">
                  {getIcon(item.title)}
                </div>

                <div className="flex-1">
                  <p className="font-medium text-lg text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.date}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;