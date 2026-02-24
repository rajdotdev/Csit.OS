import React from 'react';
import { Search, Activity, Terminal } from 'lucide-react';

interface NavbarProps {
  onSearchClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-obsidian/90 backdrop-blur-sm border-b border-border h-16 flex items-center justify-between px-4 md:px-8 supports-[backdrop-filter]:bg-obsidian/80">
      {/* Brand */}
      <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
        <div className="p-2 bg-white/5 rounded border border-border group-hover:border-cyber/50 transition-colors">
            <Terminal className="w-5 h-5 text-cyber" />
        </div>
        <span className="font-mono text-lg font-bold tracking-tight text-white">
          CSIT<span className="text-cyber">.OS</span>
        </span>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* System Status - Desktop Only */}
        <div className="hidden md:flex items-center gap-2 font-mono text-xs text-gray-400">
          <Activity className="w-3 h-3 text-green-500 animate-pulse" />
          <span>SYSTEM: ONLINE</span>
          <span className="text-gray-600">|</span>
          <span>LATENCY: 12ms</span>
        </div>

        {/* Search Trigger */}
        <button 
          onClick={onSearchClick}
          className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-border hover:border-cyber/30 rounded-md px-3 py-1.5 transition-all group"
        >
          <Search className="w-4 h-4 text-gray-400 group-hover:text-cyber transition-colors" />
          <span className="hidden md:inline font-mono text-xs text-gray-400 group-hover:text-gray-200">
            Search subjects...
          </span>
          <div className="hidden md:flex items-center gap-1 ml-2">
            <kbd className="hidden sm:inline-block border border-gray-700 rounded px-1.5 py-0.5 text-[10px] font-mono text-gray-500 bg-black/50">CMD</kbd>
            <kbd className="hidden sm:inline-block border border-gray-700 rounded px-1.5 py-0.5 text-[10px] font-mono text-gray-500 bg-black/50">K</kbd>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;