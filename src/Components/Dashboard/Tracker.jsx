
import { useInteractions } from "../Stats/Context";

const Tracker = ({ friends = [] }) => {
  const { interactionStats } = useInteractions();

  const totalFriends = friends.length;
  const onTrack = friends.filter(f => f.status === "on-track").length;
  const needAttention = friends.filter(
    f => f.status === "almost due" || f.status === "overdue"
  ).length;
  const totalInteractions = (interactionStats.Call || 0) + 
                            (interactionStats.Text || 0) + 
                            (interactionStats.Video || 0);

  const statCard = (value, label) => (
    <div className="p-8 flex flex-col gap-2 card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
      <span className="text-[#244D3F] text-3xl font-semibold text-center">
        {value}
      </span>
      <p className="text-[#64748B] text-sm sm:text-base text-center font-medium">
        {label}
      </p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4">
      {statCard(totalFriends, "Total Friends")}
      {statCard(onTrack, "On Track")}
      {statCard(needAttention, "Need Attention")}
      {statCard(totalInteractions, "Interactions This Month")}
    </div>
  );
};

export default Tracker;