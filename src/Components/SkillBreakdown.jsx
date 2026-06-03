import SkillBar from "./SkillBar";
import { skills } from "../dashboard/constants";

const SkillBreakdown = () => (
  <div className="bg-[#0f0e0a] border border-[#1e1c13] rounded-xl p-6">
    <div className="flex items-center gap-2 mb-6">
      <span className="text-[#f59e0b]">▤</span>
      <span className="font-bold text-white font-mono tracking-wide">Skill Breakdown</span>
    </div>
    <div className="flex flex-col gap-5">
      {skills.map((s) => (
        <SkillBar key={s.name} {...s} />
      ))}
    </div>
  </div>
);

export default SkillBreakdown;
