import React from 'react';
import { Home, Layers, Search, Settings } from 'lucide-react';

interface BottomDockProps {
  onHome: () => void;
  onSearch: () => void;
}

const BottomDock: React.FC<BottomDockProps> = ({ onHome, onSearch }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <div className="flex items-center gap-1 p-1.5 bg-obsidian/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg">
        <button 
          onClick={onHome}
          className="p-3 text-gray-400 hover:text-cyber hover:bg-white/5 rounded-xl transition-all active:scale-95"
        >
          <Home className="w-5 h-5" />
        </button>
        <div className="w-px h-6 bg-white/10 mx-1"></div>
        <button 
          className="p-3 text-gray-400 hover:text-cyber hover:bg-white/5 rounded-xl transition-all active:scale-95"
        >
          <Layers className="w-5 h-5" />
        </button>
        <button 
          onClick={onSearch}
          className="p-3 text-gray-400 hover:text-cyber hover:bg-white/5 rounded-xl transition-all active:scale-95"
        >
          <Search className="w-5 h-5" />
        </button>
        <button 
           className="p-3 text-gray-400 hover:text-cyber hover:bg-white/5 rounded-xl transition-all active:scale-95"
        >
           <Settings className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default BottomDock;