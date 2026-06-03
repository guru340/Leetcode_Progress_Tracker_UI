import ActivityHeatmap from "./ActivityHeatmap";
import { streakData } from "../dashboard/constants";

const ConsistencyEngine = () => (
  <div className="bg-[#0f0e0a] border border-[#1e1c13] rounded-xl p-6">
    {/* Header */}
    <div className="flex justify-between items-start mb-2">
      <span className="font-bold text-white font-mono tracking-wide">Consistency Engine</span>
      <span className="text-xs text-[#6b6045] font-mono">{streakData.month}</span>
    </div>

    {/* Streak */}
    <div className="text-3xl font-extrabold text-[#f59e0b] mb-0.5">
      {streakData.current} Day Streak
    </div>
    <div className="text-xs text-[#6b6045] font-mono mb-4">
      Best: {streakData.best} Days
    </div>

    <ActivityHeatmap />
  </div>
);

export default ConsistencyEngine;
