import React, { useState } from 'react';
import { Terminal, ChevronRight, User, BookOpen } from 'lucide-react';
import { UserProfile } from '../types';

interface OnboardingProps {
  onComplete: (profile: UserProfile) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [semesterId, setSemesterId] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    if (firstName.trim() && lastName.trim()) {
      setStep(2);
    }
  };

  const handleFinish = () => {
    if (semesterId !== null && firstName && lastName) {
      setIsSubmitting(true);
      // Simulate processing delay for effect
      setTimeout(() => {
        onComplete({
            firstName,
            lastName,
            semesterId
        });
      }, 800);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-obsidian flex flex-col items-center justify-center font-mono text-white p-4 animate-fade-in">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md bg-black/40 border border-border backdrop-blur-md rounded-2xl p-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
            <div className="p-2 bg-cyber/10 rounded-lg">
                <Terminal className="w-5 h-5 text-cyber" />
            </div>
            <div>
                <h2 className="text-sm font-bold tracking-widest text-cyber">SYSTEM INITIALIZATION</h2>
                <p className="text-[10px] text-gray-500">USER PROFILE CONFIGURATION</p>
            </div>
        </div>

        {/* Step 1: Identity */}
        {step === 1 && (
            <div className="space-y-6 animate-fade-in">
                <div className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs text-gray-500 ml-1">FIRST NAME</label>
                        <div className="relative group">
                            <User className="absolute left-3 top-2.5 w-4 h-4 text-gray-600 group-focus-within:text-cyber transition-colors" />
                            <input 
                                type="text" 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:border-cyber focus:outline-none focus:bg-white/10 transition-all placeholder-gray-700"
                                placeholder="Enter first name"
                                autoFocus
                            />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs text-gray-500 ml-1">LAST NAME</label>
                        <div className="relative group">
                            <User className="absolute left-3 top-2.5 w-4 h-4 text-gray-600 group-focus-within:text-cyber transition-colors" />
                            <input 
                                type="text" 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:border-cyber focus:outline-none focus:bg-white/10 transition-all placeholder-gray-700"
                                placeholder="Enter last name"
                                onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                            />
                        </div>
                    </div>
                </div>

                <button 
                    onClick={handleNext}
                    disabled={!firstName.trim() || !lastName.trim()}
                    className="w-full group bg-white/5 hover:bg-cyber hover:text-black border border-white/10 hover:border-cyber text-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span className="text-xs font-bold tracking-wider">PROCEED</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        )}

        {/* Step 2: Academic Calibration */}
        {step === 2 && (
            <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-2">
                    <h3 className="text-lg font-bold text-white">ACADEMIC CALIBRATION</h3>
                    <p className="text-xs text-gray-500">Select your current semester for personalized feed.</p>
                </div>

                <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                        <button
                            key={sem}
                            onClick={() => setSemesterId(sem)}
                            className={`p-3 rounded border text-center transition-all ${
                                semesterId === sem 
                                ? 'bg-cyber text-black border-cyber font-bold shadow-[0_0_15px_rgba(0,255,156,0.3)]' 
                                : 'bg-white/5 border-white/10 text-gray-400 hover:border-cyber/50 hover:text-white'
                            }`}
                        >
                            <div className="text-[10px] opacity-50">SEM</div>
                            <div className="text-lg font-mono">0{sem}</div>
                        </button>
                    ))}
                </div>

                <button 
                    onClick={handleFinish}
                    disabled={semesterId === null || isSubmitting}
                    className="w-full group bg-white/5 hover:bg-cyber hover:text-black border border-white/10 hover:border-cyber text-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <span className="text-xs font-bold tracking-wider animate-pulse">SAVING PROFILE...</span>
                    ) : (
                        <>
                            <BookOpen className="w-4 h-4" />
                            <span className="text-xs font-bold tracking-wider">INITIALIZE DASHBOARD</span>
                        </>
                    )}
                </button>
                
                <button onClick={() => setStep(1)} className="w-full text-center text-[10px] text-gray-600 hover:text-gray-400">
                    BACK TO IDENTITY
                </button>
            </div>
        )}

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-8">
            <div className={`w-1.5 h-1.5 rounded-full transition-colors ${step === 1 ? 'bg-cyber' : 'bg-gray-800'}`} />
            <div className={`w-1.5 h-1.5 rounded-full transition-colors ${step === 2 ? 'bg-cyber' : 'bg-gray-800'}`} />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
