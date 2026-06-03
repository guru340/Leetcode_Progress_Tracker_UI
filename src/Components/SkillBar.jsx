const SkillBar = ({ name, pct, color }) => (
  <div>
    <div className="flex justify-between mb-1.5">
      <span className="text-sm font-mono text-[#c8b97a]">{name}</span>
      <span className="text-sm font-mono font-bold" style={{ color }}>{pct}%</span>
    </div>
    <div className="h-1.5 rounded-full bg-[#1e1c13] overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000"
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
  </div>
);

export default SkillBar;
