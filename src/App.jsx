import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";

export default function App() {
  return (
    <div
      className="flex h-screen bg-[#0d0c08] text-white overflow-hidden"
      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
    >
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto">
          <Dashboard />
        </div>
      </main>
    </div>
  );
}