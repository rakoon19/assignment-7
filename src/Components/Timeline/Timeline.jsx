/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";

const Timeline = () => {
  const [interactions, setInteractions] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const saved = localStorage.getItem("timelineInteractions");
    if (saved) {
      try {
        setInteractions(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load timeline", e);
      }
    }
  }, []);

  const filteredInteractions = interactions.filter((item) => {
    if (filter === "All") return true;
    const title = item.title.toLowerCase();
    if (filter === "Call") return title.includes("call");
    if (filter === "Msg") return title.includes("text") || title.includes("msg");
    if (filter === "Video") return title.includes("video");
    return true;
  });

  const getIconImg = (title) => {
    const t = title.toLowerCase();
    let src = "";
    let alt = "";

    if (t.includes("call")) {
      src = "/assets/call.png";
      alt = "Call";
    } else if (t.includes("text") || t.includes("msg")) {
      src = "/assets/text.png"; 
      alt = "Message";
    } else if (t.includes("video")) {
      src = "/assets/video.png"; 
      alt = "Video";
    }

    if (src) {
      return <img src={src} alt={alt} className="w-6 h-6 object-contain" />;
    }
    return <span className="text-xl">📅</span>;
  };

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 tracking-tight">Timeline</h1>

        <div className="flex gap-8 mb-8 border-b border-gray-300 px-2">
          {["All", "Call", "Msg", "Video"].map((type) => (
            <div
              key={type}
              onClick={() => setFilter(type)}
              className={`pb-3 cursor-pointer text-sm font-semibold transition-all relative ${
                filter === type ? "text-slate-900" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {type}
              {filter === type && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 rounded-full" />
              )}
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {filteredInteractions.length === 0 ? (
            <p className="text-center py-10 text-gray-400">No records for {filter}</p>
          ) : (
            filteredInteractions.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden shrink-0">
                  {getIconImg(item.title)}
                </div>
                
                <div>
                  <p className="font-bold text-gray-900 leading-tight">{item.title}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mt-1.5 font-medium">
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