import DonutChart from "./DonuChart";

const SolvedProblems = () => (
  <div className="bg-[#0f0e0a] border border-[#1e1c13] rounded-xl p-6">
    <div className="flex items-center gap-2 mb-5">
      <span className="text-[#f59e0b]">⊕</span>
      <span className="font-bold text-white font-mono tracking-wide">Solved Problems</span>
    </div>
    <DonutChart />
  </div>
);

export default SolvedProblems;