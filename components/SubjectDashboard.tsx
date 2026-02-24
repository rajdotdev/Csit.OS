import React, { useState } from 'react';
import { ArrowLeft, BarChart2, CheckCircle2, Circle, BookOpen, FileText, PlayCircle, HelpCircle } from 'lucide-react';
import { Semester, Subject, Chapter } from '../types';
import ResourceCard from './ResourceCard';
import GiscusComments from './GiscusComments';

interface SubjectDashboardProps {
  semester: Semester;
  onBack: () => void;
  selectedSubjectId: string | null;
  onSelectSubject: (id: string) => void;
}

const SubjectDashboard: React.FC<SubjectDashboardProps> = ({ semester, onBack, selectedSubjectId, onSelectSubject }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'chapters'>('chapters');
  
  // Default to first subject if none selected
  const activeSubject = selectedSubjectId 
    ? semester.subjects.find(s => s.id === selectedSubjectId) || semester.subjects[0] 
    : semester.subjects[0];

  return (
    <div className="min-h-screen pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto animate-fade-in">
      {/* Header / Breadcrumb */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-cyber mb-8 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="font-mono text-sm">BACK TO SEMESTER GRID</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar: Subject List */}
        <div className="lg:col-span-3 space-y-2">
          <h2 className="text-xl font-bold text-white mb-4 px-2 font-sans">{semester.name}</h2>
          <div className="flex flex-col gap-1">
            {semester.subjects.map((sub) => (
              <button
                key={sub.id}
                onClick={() => onSelectSubject(sub.id)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-mono transition-all border ${
                  activeSubject.id === sub.id
                    ? 'bg-cyber/10 border-cyber text-cyber shadow-sm'
                    : 'bg-transparent border-transparent text-gray-400 hover:bg-white/5 hover:text-gray-200'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{sub.code}</span>
                  {activeSubject.id === sub.id && <div className="w-1.5 h-1.5 rounded-full bg-cyber" />}
                </div>
                <div className={`mt-1 font-sans font-semibold ${activeSubject.id === sub.id ? 'text-white' : 'text-gray-500'}`}>
                  {sub.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Stage: Active Subject Details */}
        <div className="lg:col-span-9">
          <div className="bg-[#0A0A0A] border border-border rounded-xl p-6 md:p-8 relative overflow-hidden">
            {/* Background Decoration */}
            <div 
                className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-10"
                style={{
                    background: 'radial-gradient(circle at top right, #30D5C8 0%, transparent 60%)'
                }}
            />

            {/* Title Section */}
            <div className="relative z-10 mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                 <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                    {activeSubject.code}
                 </span>
                 <span className={`px-2 py-1 rounded text-[10px] font-mono uppercase tracking-wider border ${
                   activeSubject.difficulty === 'High' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
                   activeSubject.difficulty === 'Mid' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' :
                   'bg-green-500/10 border-green-500/20 text-green-400'
                 }`}>
                   Difficulty: {activeSubject.difficulty}
                 </span>
                 <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-[10px] font-mono text-blue-400 uppercase tracking-wider">
                   {activeSubject.creditHours} Credits
                 </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white font-sans mb-6">{activeSubject.name}</h1>
              
              {/* Tabs */}
              <div className="flex gap-6 border-b border-white/10">
                <button 
                  onClick={() => setActiveTab('chapters')}
                  className={`pb-4 text-sm font-mono transition-colors relative ${activeTab === 'chapters' ? 'text-cyber' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  SYLLABUS & CHAPTERS
                  {activeTab === 'chapters' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber" />}
                </button>
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`pb-4 text-sm font-mono transition-colors relative ${activeTab === 'overview' ? 'text-cyber' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  RESOURCES
                  {activeTab === 'overview' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber" />}
                </button>
              </div>
            </div>

            {activeTab === 'overview' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 animate-fade-in">
                <ResourceCard 
                  type="notes" 
                  title="Verified Notes" 
                  subtitle="PDFs curated by top students." 
                />
                <ResourceCard 
                  type="past_questions" 
                  title="TU Past Questions" 
                  subtitle="Archive from 2070 - 2081." 
                />
                <ResourceCard 
                  type="syllabus" 
                  title="Interactive Syllabus" 
                  subtitle="Track your progress topic by topic." 
                />
                <ResourceCard 
                  type="youtube" 
                  title="YouTube Curator" 
                  subtitle="Best playlists for this subject." 
                />
              </div>
            ) : (
              <div className="space-y-4 relative z-10 animate-fade-in">
                {activeSubject.chapters && activeSubject.chapters.length > 0 ? (
                  activeSubject.chapters.map((chapter, index) => (
                    <div 
                      key={chapter.id}
                      className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:border-cyber/30 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          {chapter.isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-cyber" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-600 group-hover:text-cyber/50 transition-colors" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-[10px] font-mono text-gray-500 uppercase">Chapter {index + 1}</span>
                              <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">{chapter.title}</h3>
                            </div>
                            <div className="flex gap-2">
                               <button title="Notes" className="p-1.5 rounded bg-white/5 text-gray-400 hover:text-cyber hover:bg-cyber/10 transition-all">
                                 <FileText className="w-4 h-4" />
                               </button>
                               <button title="Video" className="p-1.5 rounded bg-white/5 text-gray-400 hover:text-cyan hover:bg-cyan/10 transition-all">
                                 <PlayCircle className="w-4 h-4" />
                               </button>
                               <button title="Questions" className="p-1.5 rounded bg-white/5 text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all">
                                 <HelpCircle className="w-4 h-4" />
                               </button>
                            </div>
                          </div>
                          {chapter.description && (
                            <p className="mt-2 text-sm text-gray-500 font-sans">{chapter.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-12 text-center border border-dashed border-white/10 rounded-lg">
                    <BookOpen className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                    <p className="text-gray-500 font-mono">CHAPTER DATA COMING SOON FOR THIS MODULE</p>
                    <p className="text-xs text-gray-600 mt-2">We're currently verifying the syllabus for {activeSubject.code}</p>
                  </div>
                )}
              </div>
            )}

            {/* Progress Section */}
            <div className="mt-8 pt-8 border-t border-border relative z-10">
              <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-2 text-gray-400">
                    <BarChart2 className="w-4 h-4" />
                    <span className="font-mono text-sm">SYLLABUS COMPLETION</span>
                </div>
                <span className="font-mono text-xl font-bold text-cyber">{activeSubject.syllabusCompletion}%</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-cyber shadow-[0_0_10px_#00FF9C]" 
                    style={{ width: `${activeSubject.syllabusCompletion}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-gray-600 font-mono text-right">Based on average student progress</p>
            </div>

            {/* Comments Section */}
            <div className="relative z-10">
              <GiscusComments term={activeSubject.code} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};


export default SubjectDashboard;