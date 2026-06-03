const Header = () => (
  <header className="flex items-center justify-between px-8 py-4 border-b border-[#1e1c13] sticky top-0 bg-[#0d0c08] z-10">
    <span className="text-[#f59e0b] font-bold text-lg font-mono tracking-wider">LeetTracker</span>
    <div className="flex items-center gap-2 bg-[#141310] border border-[#1e1c13] rounded-lg px-3 py-2 w-56">
      <span className="text-[#6b6045] text-sm">⌕</span>
      <input
        placeholder="Search problems..."
        className="bg-transparent text-sm text-[#9a8c6e] placeholder-[#4a4232] outline-none font-mono w-full"
      />
    </div>
  </header>
);

export default Header;