import SolvedProblems from "./SolvedProblems";
import ConsistencyEngine from "./ConsistencyEngine";
import SkillBreakdown from "./SkillBreakdown";
import RecentSubmissions from "./RecentSubmissions";

const Dashboard = () => (
  <div className="px-8 py-6">
    <h1 className="text-3xl font-extrabold tracking-tight text-white mb-1">System Performance</h1>
    <p className="text-xs text-[#6b6045] font-mono mb-6">Last updated: Today, 10:42 AM</p>

    {/* Top row */}
    <div className="grid grid-cols-2 gap-5 mb-5">
      <SolvedProblems />
      <ConsistencyEngine />
    </div>

    {/* Bottom row */}
    <div className="grid grid-cols-2 gap-5">
      <SkillBreakdown />
      <RecentSubmissions />
    </div>
  </div>
);

export default Dashboard;