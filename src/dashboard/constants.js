export const problems = [
  { name: "Two Sum", time: "2 minutes ago", ms: "32ms", diff: "EASY" },
  { name: "Longest Palindromic Substring", time: "1 hour ago", ms: "124ms", diff: "MEDIUM" },
  { name: "Median of Two Sorted Arrays", time: "3 hours ago", ms: "88ms", diff: "HARD" },
  { name: "Reverse Integer", time: "5 hours ago", ms: "12ms", diff: "MEDIUM" },
  { name: "Merge Intervals", time: "Yesterday", ms: "56ms", diff: "MEDIUM" },
];

export const skills = [
  { name: "Arrays & Hashing", pct: 82, color: "#00c9a7" },
  { name: "Dynamic Programming", pct: 45, color: "#f59e0b" },
  { name: "Strings", pct: 68, color: "#00c9a7" },
  { name: "Graph Theory", pct: 22, color: "#ef4444" },
];

export const diffColors = {
  EASY:   { bg: "#052e16", text: "#4ade80", border: "#166534" },
  MEDIUM: { bg: "#451a03", text: "#fb923c", border: "#92400e" },
  HARD:   { bg: "#450a0a", text: "#f87171", border: "#991b1b" },
};

export const activityData = [
  [2, 1, 0, 3, 3, 0, 1],
  [1, 3, 0, 1, 0, 2, 3],
  [0, 3, 3, 0, 2, 0, 2],
  [0, 0, 0, 1, 0, 3, 3],
  [3, 0, 0, 0, 0, 0, 0],
];

export const navItems = [
  { icon: "▦", label: "Dashboard" },
  { icon: "<>", label: "Problems" },
  { icon: "⬡", label: "Statistics" },
  { icon: "◎", label: "Profile" },
];

export const solvedStats = {
  total: 742,
  easy:   { val: 412, max: 590,  color: "#4ade80" },
  medium: { val: 285, max: 1204, color: "#f59e0b" },
  hard:   { val: 45,  max: 532,  color: "#f87171" },
};

export const streakData = {
  current: 15,
  best: 42,
  month: "November 2023",
};

export const heatColor = (v) => {
  if (v === 0) return "#1c1a14";
  if (v === 1) return "#78350f";
  if (v === 2) return "#d97706";
  return "#f59e0b";
};
