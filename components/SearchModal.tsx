import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';
import { SEMESTERS } from '../constants';
import { SearchResult } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSubject: (semesterId: number, subjectId: string) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectSubject }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const newResults: SearchResult[] = [];

    SEMESTERS.forEach(sem => {
      sem.subjects.forEach(sub => {
        if (sub.name.toLowerCase().includes(lowerQuery) || sub.code.toLowerCase().includes(lowerQuery)) {
          newResults.push({ semesterId: sem.id, subject: sub });
        }
      });
    });

    setResults(newResults);
  }, [query]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-[#0A0A0A] border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col animate-fade-in">
        
        {/* Header */}
        <div className="flex items-center px-4 py-4 border-b border-border gap-3">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-600 font-mono text-sm h-6"
            placeholder="Search subjects (e.g., 'Java', 'CSC110')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query === '' ? (
             <div className="p-8 text-center text-gray-500 font-mono text-sm">
               Type to search across all 8 semesters...
             </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-gray-500 font-mono text-sm">
              No subjects found matching "{query}".
            </div>
          ) : (
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-mono text-gray-500 uppercase tracking-wider">Subjects</div>
              {results.map((res) => (
                <button
                  key={res.subject.id}
                  onClick={() => {
                    onSelectSubject(res.semesterId, res.subject.id);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors group text-left"
                >
                  <div className="flex flex-col">
                    <span className="text-white font-medium group-hover:text-cyber transition-colors">
                      {res.subject.name}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">
                      {res.subject.code} • Semester {res.semesterId}
                    </span>
                  </div>
                  <CornerDownLeft className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#0f0f0f] px-4 py-2 border-t border-border flex items-center justify-between text-[10px] text-gray-500 font-mono">
          <div className="flex gap-4">
            <span><strong className="text-gray-400">↑↓</strong> to navigate</span>
            <span><strong className="text-gray-400">↵</strong> to select</span>
            <span><strong className="text-gray-400">esc</strong> to close</span>
          </div>
          <span className="text-cyber/50">CSIT.OS SEARCH</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
