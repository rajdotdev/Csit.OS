import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState("INITIALIZING BOOT SEQUENCE...");

  useEffect(() => {
    const logs = [
      "LOADING KERNEL MODULES...",
      "MOUNTING VIRTUAL FILESYSTEM...",
      "ESTABLISHING SECURE CONNECTION...",
      "VERIFYING SUBJECT MANIFESTS...",
      "SYNCING ACADEMIC ASSETS...",
      "STARTING UI DAEMON...",
      "SYSTEM READY"
    ];
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Non-linear progress simulation
        const remaining = 100 - prev;
        const jump = Math.random() * (remaining > 20 ? 15 : 5); 
        const next = Math.min(prev + jump, 100);
        
        // Update log based on progress milestones
        const logIndex = Math.floor((next / 100) * (logs.length - 1));
        setLog(logs[logIndex]);

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400); // Short delay at 100% before unmounting
        }
        return next;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-obsidian flex flex-col items-center justify-center font-mono text-white overflow-hidden selection:bg-cyber selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[320px] flex flex-col items-center p-4">
        
        {/* Animated Icon */}
        <div className="relative mb-10">
            <div className="absolute inset-0 bg-cyber/20 blur-xl rounded-full animate-pulse"></div>
            <div className="relative p-4 border border-cyber/20 bg-black/40 backdrop-blur-sm rounded-xl">
                <Terminal className="w-10 h-10 text-cyber" />
            </div>
        </div>

        {/* Progress Container */}
        <div className="w-full space-y-3">
            <div className="flex justify-between items-end text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                <span>System Boot</span>
                <span className="text-cyber font-mono">{Math.floor(progress)}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-gray-800/50 rounded-full overflow-hidden border border-white/5">
                <div 
                    className="h-full bg-cyber shadow-[0_0_15px_#00FF9C] transition-all duration-200 ease-out relative"
                    style={{ width: `${progress}%` }}
                >
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
                </div>
            </div>

            {/* Log Output */}
            <div className="h-6 flex items-center justify-center">
                <p className="text-[10px] text-cyber/80 font-mono truncate animate-pulse">
                    &gt; {log}<span className="inline-block w-1.5 h-3 bg-cyber/80 ml-1 align-middle animate-glitch"></span>
                </p>
            </div>
        </div>
      </div>

      {/* Footer Details */}
      <div className="absolute bottom-8 flex flex-col items-center gap-1 opacity-50">
        <div className="text-[10px] text-gray-600 tracking-[0.3em] font-sans font-bold">CSIT.OS</div>
        <div className="text-[9px] text-gray-800 font-mono">SECURE PORTAL v2.4.1</div>
      </div>
    </div>
  );
};

export default LoadingScreen;