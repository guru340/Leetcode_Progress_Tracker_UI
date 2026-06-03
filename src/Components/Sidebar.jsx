import { useState } from "react";
import NavItem from "./NavItem";
import { navItems } from "../dashboard/constants";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="w-52 flex-shrink-0 flex flex-col bg-[#0f0e0a] border-r border-[#1e1c13]">
      {/* Logo */}
      <div className="px-5 pt-7 pb-6">
        <div className="text-[#f59e0b] text-xl font-extrabold leading-tight tracking-tight">
          DevStats<br />Pro
        </div>
        <div className="text-[#6b6045] text-xs mt-1 font-mono">Senior Engineer</div>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 px-2 flex-1">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            {...item}
            active={active === item.label}
            onClick={() => setActive(item.label)}
          />
        ))}
      </nav>

      {/* New Session Button */}
      <div className="p-4">
        <button className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-[#0d0c08] font-bold text-sm py-3 rounded-lg transition-colors font-mono tracking-wide">
          + New Session
        </button>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-3 px-4 py-4 border-t border-[#1e1c13]">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center text-xs font-bold text-[#0d0c08]">
          AR
        </div>
        <div>
          <div className="text-sm font-bold text-white font-mono">Alex Rivera</div>
          <div className="text-[10px] text-[#f59e0b] font-mono tracking-widest">PREMIUM MEMBER</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;