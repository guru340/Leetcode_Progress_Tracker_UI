const NavItem = ({ icon, label, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer transition-all ${
      active
        ? "bg-[#1e1c13] text-[#f59e0b] border-l-2 border-[#f59e0b]"
        : "text-[#9a8c6e] hover:text-[#f59e0b] hover:bg-[#1a180f]"
    }`}
  >
    <span className="text-sm">{icon}</span>
    <span className="text-sm font-mono font-medium tracking-wide">{label}</span>
  </div>
);

export default NavItem;