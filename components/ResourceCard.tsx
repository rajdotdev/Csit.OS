import React from 'react';
import { FileText, Clock, BookOpen, Youtube, ArrowUpRight } from 'lucide-react';
import { ResourceType } from '../types';

interface ResourceCardProps {
  type: ResourceType;
  title: string;
  subtitle: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ type, title, subtitle }) => {
  const getIcon = () => {
    switch (type) {
      case 'notes': return <FileText className="w-5 h-5 text-blue-400" />;
      case 'past_questions': return <Clock className="w-5 h-5 text-orange-400" />;
      case 'syllabus': return <BookOpen className="w-5 h-5 text-cyber" />;
      case 'youtube': return <Youtube className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <div className="group relative p-4 bg-white/5 border border-border rounded-lg hover:border-cyber/30 hover:bg-white/10 transition-colors cursor-pointer overflow-hidden">
        <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-black/20 rounded-md group-hover:scale-105 transition-transform duration-300">
                {getIcon()}
            </div>
            <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
        </div>
        
        <h4 className="text-sm font-semibold text-gray-200 mb-1 font-sans">{title}</h4>
        <p className="text-xs text-gray-500 font-mono">{subtitle}</p>
    </div>
  );
};

export default ResourceCard;