import { solvedStats } from "../dashboard/constants";

const DonutChart = () => {
  const { total, easy, medium, hard } = solvedStats;
  const maxPossible = easy.max + medium.max + hard.max;
  const r = 60, cx = 80, cy = 80;
  const circumference = 2 * Math.PI * r;

  const segments = [
    { val: easy.val / maxPossible,   color: easy.color,   offset: 0 },
    { val: medium.val / maxPossible, color: medium.color, offset: easy.val / maxPossible },
    { val: hard.val / maxPossible,   color: hard.color,   offset: (easy.val + medium.val) / maxPossible },
  ];

  const legend = [
    { label: "Easy",   ...easy },
    { label: "Medium", ...medium },
    { label: "Hard",   ...hard },
  ];

  return (
    <div className="flex items-center gap-8">
      {/* SVG Donut */}
      <div className="relative">
        <svg width="160" height="160" viewBox="0 0 160 160">
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1e1c13" strokeWidth="14" />
          {segments.map((s, i) => (
            <circle
              key={i}
              cx={cx} cy={cy} r={r}
              fill="none"
              stroke={s.color}
              strokeWidth="14"
              strokeDasharray={`${s.val * circumference} ${circumference}`}
              strokeDashoffset={-s.offset * circumference}
              strokeLinecap="round"
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "80px 80px",
                transition: "stroke-dasharray 1s ease",
              }}
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-mono font-bold text-white">{total}</span>
          <span className="text-xs text-[#6b6045] font-mono">Total Solved</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-3">
        {legend.map((d) => (
          <div key={d.label} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ background: d.color }} />
            <span className="text-sm font-mono text-[#c8b97a] w-16">{d.label}</span>
            <span className="text-sm font-mono font-bold text-white">{d.val}</span>
            <span className="text-xs font-mono text-[#6b6045]">/{d.max}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;