export interface Chapter {
  id: string;
  title: string;
  description?: string;
  isCompleted?: boolean;
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  creditHours: number;
  difficulty: 'Low' | 'Mid' | 'High';
  syllabusCompletion: number; // Percentage 0-100
  chapters?: Chapter[];
}

export interface Semester {
  id: number;
  name: string;
  description: string;
  subjects: Subject[];
}

export type ResourceType = 'notes' | 'past_questions' | 'syllabus' | 'youtube';

export interface ResourceLink {
  type: ResourceType;
  label: string;
  url: string;
}

// For Search
export interface SearchResult {
  semesterId: number;
  subject: Subject;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  semesterId: number;
}
