import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchModal from './components/SearchModal';
import SubjectDashboard from './components/SubjectDashboard';
import BottomDock from './components/BottomDock';
import LoadingScreen from './components/LoadingScreen';
import Onboarding from './components/Onboarding';
import { SEMESTERS } from './constants';
import { Semester, UserProfile } from './types';
import { Layers, Sparkles, BookOpen } from 'lucide-react';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  
  const [activeSemester, setActiveSemester] = useState<Semester | null>(null);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Initialize App Data
  useEffect(() => {
    // Check local storage for user profile
    const savedProfile = localStorage.getItem('csit_user_profile');
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile));
    }
    
    // Simulate initial loading sequence logic handled by LoadingScreen callback
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    if (!localStorage.getItem('csit_user_profile')) {
      setShowOnboarding(true);
    }
  };

  const handleOnboardingComplete = (profile: UserProfile) => {
    localStorage.setItem('csit_user_profile', JSON.stringify(profile));
    setUserProfile(profile);
    setShowOnboarding(false);
  };

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectSemester = (sem: Semester) => {
    setActiveSemester(sem);
    setSelectedSubjectId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSubject = (semesterId: number, subjectId: string) => {
    const sem = SEMESTERS.find(s => s.id === semesterId);
    if (sem) {
        setActiveSemester(sem);
        setSelectedSubjectId(subjectId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectSubjectFromSearch = (semesterId: number, subjectId: string) => {
    handleSelectSubject(semesterId, subjectId);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  // Get Personalized Semester Data
  const mySemester = userProfile ? SEMESTERS.find(s => s.id === userProfile.semesterId) : null;

  return (
    <div className="min-h-screen bg-obsidian text-gray-200 grid-bg selection:bg-cyber/30 selection:text-cyber font-sans animate-fade-in">
      <Navbar onSearchClick={() => setIsSearchOpen(true)} />
      
      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onSelectSubject={handleSelectSubjectFromSearch}
      />

      {/* Main Content Router */}
      {activeSemester ? (
        <SubjectDashboard 
          semester={activeSemester} 
          onBack={() => setActiveSemester(null)}
          selectedSubjectId={selectedSubjectId}
          onSelectSubject={setSelectedSubjectId}
        />
      ) : (
        <>
          <Hero user={userProfile} />

          <main className="max-w-7xl mx-auto px-4 md:px-8 pb-32">
            
            {/* Personalized Section */}
            {mySemester && (
                <div className="mb-16 animate-fade-in">
                    <div className="flex items-center gap-3 mb-6">
                        <Sparkles className="text-cyan w-5 h-5" />
                        <h2 className="text-xl font-bold text-white tracking-tight">MY SEMESTER ({mySemester.name})</h2>
                        <div className="h-px flex-1 bg-border ml-4"></div>
                        <button 
                            onClick={() => handleSelectSemester(mySemester)}
                            className="text-xs font-mono text-cyan hover:text-white transition-colors"
                        >
                            VIEW ALL RESOURCES &rarr;
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {mySemester.subjects.map((sub) => (
                             <div 
                                key={sub.id}
                                onClick={() => handleSelectSubject(mySemester.id, sub.id)}
                                className="group p-4 bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-cyan/50 rounded-lg cursor-pointer transition-all hover:-translate-y-1"
                             >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-mono text-cyan/70">{sub.code}</span>
                                    {sub.difficulty === 'High' && <span className="text-[10px] text-red-400 border border-red-500/20 px-1 rounded">HARD</span>}
                                </div>
                                <h4 className="font-bold text-gray-200 group-hover:text-cyan transition-colors truncate">{sub.name}</h4>
                                <div className="mt-4 flex items-center gap-2 text-[10px] text-gray-500 font-mono">
                                    <BookOpen className="w-3 h-3" />
                                    <span>{sub.creditHours} CREDITS</span>
                                </div>
                             </div>
                        ))}
                    </div>
                </div>
            )}
            
            {/* Semester Grid */}
            <div className="flex items-center gap-3 mb-8">
                <Layers className="text-cyber w-5 h-5" />
                <h2 className="text-xl font-bold text-white tracking-tight">ACADEMIC MODULES</h2>
                <div className="h-px flex-1 bg-border ml-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SEMESTERS.map((sem) => (
                <div 
                  key={sem.id}
                  onClick={() => handleSelectSemester(sem)}
                  className="group relative bg-white/5 border border-border rounded-xl p-6 cursor-pointer hover:border-cyber/50 transition-colors duration-200 overflow-hidden"
                >
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-mono text-4xl font-bold text-white/10 group-hover:text-cyber/20 transition-colors">
                        0{sem.id}
                      </span>
                      <div className="px-2 py-1 rounded bg-black/20 border border-white/10 text-[10px] font-mono text-gray-400 group-hover:border-cyber/30 transition-colors">
                        {sem.subjects.length} Subjects
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-100 group-hover:text-cyber transition-colors mb-2">
                      {sem.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-mono line-clamp-2 group-hover:text-gray-400">
                      {sem.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="w-0 group-hover:w-full h-0.5 bg-cyber mt-6 transition-all duration-300 ease-out" />
                  </div>
                </div>
              ))}
            </div>
          </main>
        </>
      )}

      <BottomDock 
        onHome={() => setActiveSemester(null)} 
        onSearch={() => setIsSearchOpen(true)}
      />

      <footer className="py-8 text-center text-xs text-gray-600 font-mono border-t border-border mt-auto bg-obsidian relative z-10">
        <p>CSIT.OS © {new Date().getFullYear()} // BUILD 2.4.2 (PERSISTENT)</p>
      </footer>
    </div>
  );
};

export default App;
