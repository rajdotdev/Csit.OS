import React, { useState, useEffect } from 'react';
import { Clock, Cpu, UserCheck } from 'lucide-react';
import { UserProfile } from '../types';

interface HeroProps {
  user: UserProfile | null;
}

const Hero: React.FC<HeroProps> = ({ user }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 17) return "Good Afternoon";
    if (hour >= 17 && hour < 22) return "Good Evening";
    return "Late Night Protocol";
  };

  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 px-4 md:px-8 text-center overflow-hidden">
      
      {/* Decorative Glow - Optimized with Radial Gradient */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at center, #00FF9C 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber/20 bg-cyber/5 mb-6 animate-fade-in">
          {user ? <UserCheck className="w-3 h-3 text-cyber" /> : <Cpu className="w-3 h-3 text-cyber" />}
          <span className="font-mono text-xs text-cyber tracking-wide">
            {user ? `IDENTITY VERIFIED: ${user.lastName.toUpperCase()}` : 'CSIT OPERATING SYSTEM v2.4'}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-7xl font-bold font-sans tracking-tight text-white mb-6 relative">
            {user ? (
                <div className="flex flex-col items-center gap-1 md:gap-3">
                    <span className="block text-xl md:text-3xl font-light text-gray-400 tracking-widest uppercase opacity-80 animate-fade-in">
                        {getGreeting()}
                    </span>
                    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyber via-cyan to-cyber bg-300% animate-pulse-slow">
                        {user.firstName}
                    </span>
                </div>
            ) : (
                <>
                    <span className="block md:inline">The Definitive</span>{' '}
                    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyber via-cyan to-cyber bg-300% animate-pulse-slow">
                        CSIT Portal
                    </span>
                </>
            )}
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base font-mono mb-8 leading-relaxed">
            {user 
                ? `Dashboard synchronized for Semester ${user.semesterId}. All systems nominal.` 
                : "Access verified notes, past questions, and interactive syllabi for all 8 semesters. Engineered for the modern student."
            }
        </p>

        {/* Live Clock */}
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-obsidian/50 border border-border rounded-md font-mono text-sm text-cyan backdrop-blur-sm">
          <Clock className="w-4 h-4" />
          <span>
            {time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </span>
          <span className="text-gray-600">|</span>
          <span>KATHMANDU, NP</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;