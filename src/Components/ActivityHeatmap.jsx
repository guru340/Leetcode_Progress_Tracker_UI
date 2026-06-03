import { activityData, heatColor } from "../dashboard/constants";

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

const ActivityHeatmap = () => (
  <div>
    {/* Day labels */}
    <div className="grid grid-cols-7 gap-1 mb-1">
      {DAYS.map((d, i) => (
        <div key={i} className="text-center text-[10px] text-[#4a4232] font-mono">{d}</div>
      ))}
    </div>

    {/* Grid */}
    <div className="flex flex-col gap-1">
      {activityData.map((row, ri) => (
        <div key={ri} className="grid grid-cols-7 gap-1">
          {row.map((v, ci) => (
            <div
              key={ci}
              className="h-7 rounded-sm transition-all hover:scale-110 cursor-pointer"
              style={{ background: heatColor(v) }}
              title={`${v} submission${v !== 1 ? "s" : ""}`}
            />
          ))}
        </div>
      ))}
    </div>

    {/* Legend */}
    <div className="flex items-center justify-end gap-2 mt-2">
      <span className="text-[10px] text-[#4a4232] font-mono">LESS</span>
      {[1, 2, 3].map((v) => (
        <div key={v} className="w-3.5 h-3.5 rounded-sm" style={{ background: heatColor(v) }} />
      ))}
      <span className="text-[10px] text-[#4a4232] font-mono">MORE</span>
    </div>
  </div>
);

export default ActivityHeatmap;
