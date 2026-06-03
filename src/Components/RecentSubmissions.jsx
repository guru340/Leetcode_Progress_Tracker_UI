import SubmissionRow from "./SubmissionRow";
import { problems } from "../dashboard/constants";

const RecentSubmissions = () => (
  <div className="bg-[#0f0e0a] border border-[#1e1c13] rounded-xl p-6">
    <div className="flex items-center gap-2 mb-5">
      <span className="text-[#f59e0b]">↺</span>
      <span className="font-bold text-white font-mono tracking-wide">Recent Submissions</span>
    </div>

    <div className="flex flex-col gap-1">
      {problems.map((p, i) => (
        <SubmissionRow key={i} {...p} />
      ))}
    </div>

    <button className="w-full text-center text-[#f59e0b] text-sm font-mono mt-4 hover:text-[#d97706] transition-colors">
      View Full Log
    </button>
  </div>
);

export default RecentSubmissions;
