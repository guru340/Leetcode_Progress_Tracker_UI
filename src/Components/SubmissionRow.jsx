import { diffColors } from "../dashboard/constants";

const SubmissionRow = ({ name, time, ms, diff }) => (
  <div className="flex items-center justify-between py-3 border-b border-[#1a180f] last:border-0 group hover:bg-[#141310] -mx-2 px-2 rounded-lg transition-colors cursor-pointer">
    {/* Left */}
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full border-2 border-[#00c9a7] flex items-center justify-center flex-shrink-0">
        <span className="text-[#00c9a7] text-[9px]">✓</span>
      </div>
      <div>
        <div className="text-sm font-mono font-medium text-[#e8d99a] group-hover:text-white transition-colors">
          {name}
        </div>
        <div className="text-[11px] text-[#4a4232] font-mono">{time}</div>
      </div>
    </div>

    {/* Right */}
    <div className="flex items-center gap-2 flex-shrink-0">
      <span className="text-xs font-mono text-[#00c9a7]">{ms}</span>
      <span
        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border tracking-widest"
        style={{
          background: diffColors[diff].bg,
          color: diffColors[diff].text,
          borderColor: diffColors[diff].border,
        }}
      >
        {diff}
      </span>
    </div>
  </div>
);

export default SubmissionRow;
