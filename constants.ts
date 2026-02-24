import { Semester } from './types';

export const SEMESTERS: Semester[] = [
  {
    id: 1,
    name: "Semester 1",
    description: "Foundations of Computer Science & Mathematics",
    subjects: [
      { 
        id: 's1-1', 
        code: 'CSC109', 
        name: 'Introduction to IT', 
        creditHours: 3, 
        difficulty: 'Low', 
        syllabusCompletion: 100,
        chapters: [
          { id: 'c1-1-1', title: 'Introduction to Computer' },
          { id: 'c1-1-2', title: 'Computer Hardware' },
          { id: 'c1-1-3', title: 'Computer Software' },
          { id: 'c1-1-4', title: 'Data Representation' },
          { id: 'c1-1-5', title: 'Database Management System' },
          { id: 'c1-1-6', title: 'Data Communication and Networking' },
          { id: 'c1-1-7', title: 'Internet and World Wide Web' },
          { id: 'c1-1-8', title: 'Multimedia' },
          { id: 'c1-1-9', title: 'Information Security' },
        ]
      },
      { 
        id: 's1-2', 
        code: 'CSC110', 
        name: 'C Programming', 
        creditHours: 3, 
        difficulty: 'High', 
        syllabusCompletion: 85,
        chapters: [
          { id: 'c1-2-1', title: 'Introduction to C' },
          { id: 'c1-2-2', title: 'Data Types, Operators and Expressions' },
          { id: 'c1-2-3', title: 'Input and Output' },
          { id: 'c1-2-4', title: 'Control Statements' },
          { id: 'c1-2-5', title: 'Functions' },
          { id: 'c1-2-6', title: 'Arrays and Strings' },
          { id: 'c1-2-7', title: 'Pointers' },
          { id: 'c1-2-8', title: 'Structure and Union' },
          { id: 'c1-2-9', title: 'File Handling' },
        ]
      },
      { 
        id: 's1-3', 
        code: 'CSC111', 
        name: 'Digital Logic', 
        creditHours: 3, 
        difficulty: 'Mid', 
        syllabusCompletion: 90,
        chapters: [
          { id: 'c1-3-1', title: 'Number Systems' },
          { id: 'c1-3-2', title: 'Boolean Algebra and Logic Gates' },
          { id: 'c1-3-3', title: 'Simplification of Boolean Functions' },
          { id: 'c1-3-4', title: 'Combinational Logic' },
          { id: 'c1-3-5', title: 'Sequential Logic' },
          { id: 'c1-3-6', title: 'Registers and Counters' },
          { id: 'c1-3-7', title: 'Memory and Programmable Logic' },
        ]
      },
      { 
        id: 's1-4', 
        code: 'MTH112', 
        name: 'Mathematics I', 
        creditHours: 3, 
        difficulty: 'High', 
        syllabusCompletion: 70,
        chapters: [
          { id: 'c1-4-1', title: 'Set Theory and Real Number System' },
          { id: 'c1-4-2', title: 'Functions and Graphs' },
          { id: 'c1-4-3', title: 'Limit and Continuity' },
          { id: 'c1-4-4', title: 'Derivatives' },
          { id: 'c1-4-5', title: 'Applications of Derivatives' },
          { id: 'c1-4-6', title: 'Integration' },
          { id: 'c1-4-7', title: 'Applications of Integration' },
          { id: 'c1-4-8', title: 'Differential Equations' },
        ]
      },
      { id: 's1-5', code: 'PHY113', name: 'Physics', creditHours: 3, difficulty: 'Mid', syllabusCompletion: 60 },
    ]
  },
  {
    id: 2,
    name: "Semester 2",
    description: "Hardware Basics & Advanced Math",
    subjects: [
      { 
        id: 's2-1', 
        code: 'CSC160', 
        name: 'Discrete Structures', 
        creditHours: 3, 
        difficulty: 'High', 
        syllabusCompletion: 50,
        chapters: [
          { id: 'c2-1-1', title: 'Logic and Proof' },
          { id: 'c2-1-2', title: 'Induction and Recursion' },
          { id: 'c2-1-3', title: 'Counting and Discrete Probability' },
          { id: 'c2-1-4', title: 'Relations and Functions' },
          { id: 'c2-1-5', title: 'Graphs and Trees' },
        ]
      },
      { 
        id: 's2-2', 
        code: 'CSC161', 
        name: 'Object Oriented Programming', 
        creditHours: 3, 
        difficulty: 'Mid', 
        syllabusCompletion: 80,
        chapters: [
          { id: 'c2-2-1', title: 'Introduction to OOP' },
          { id: 'c2-2-2', title: 'Classes and Objects' },
          { id: 'c2-2-3', title: 'Inheritance' },
          { id: 'c2-2-4', title: 'Polymorphism' },
          { id: 'c2-2-5', title: 'Templates and Exception Handling' },
        ]
      },
      { id: 's2-3', code: 'CSC162', name: 'Microprocessor', creditHours: 3, difficulty: 'High', syllabusCompletion: 40 },
      { id: 's2-4', code: 'MTH163', name: 'Mathematics II', creditHours: 3, difficulty: 'Mid', syllabusCompletion: 65 },
      { id: 's2-5', code: 'STA164', name: 'Statistics I', creditHours: 3, difficulty: 'Mid', syllabusCompletion: 75 },
    ]
  },
  {
    id: 3,
    name: "Semester 3",
    description: "Algorithms & Graphics",
    subjects: [
      { 
        id: 's3-1', 
        code: 'CSC205', 
        name: 'Data Structures & Algorithms', 
        creditHours: 3, 
        difficulty: 'High', 
        syllabusCompletion: 30,
        chapters: [
          { id: 'c3-1-1', title: 'Introduction to DSA' },
          { id: 'c3-1-2', title: 'Linear Data Structures' },
          { id: 'c3-1-3', title: 'Recursion' },
          { id: 'c3-1-4', title: 'Trees' },
          { id: 'c3-1-5', title: 'Graphs' },
          { id: 'c3-1-6', title: 'Sorting and Searching' },
          { id: 'c3-1-7', title: 'Hashing' },
        ]
      },
      { 
        id: 's3-2', 
        code: 'CSC206', 
        name: 'Numerical Method', 
        creditHours: 3, 
        difficulty: 'Mid', 
        syllabusCompletion: 55,
        chapters: [
          { id: 'c3-2-1', title: 'Solution of Non-linear Equations' },
          { id: 'c3-2-2', title: 'Interpolation and Approximation' },
          { id: 'c3-2-3', title: 'Numerical Differentiation and Integration' },
          { id: 'c3-2-4', title: 'Solution of Linear Algebraic Equations' },
          { id: 'c3-2-5', title: 'Solution of Ordinary Differential Equations' },
        ]
      },
      { id: 's3-3', code: 'CSC207', name: 'Computer Architecture', creditHours: 3, difficulty: 'Mid', syllabusCompletion: 45 },
      { id: 's3-4', code: 'CSC208', name: 'Computer Graphics', creditHours: 3, difficulty: 'High', syllabusCompletion: 20 },
      { id: 's3-5', code: 'STA209', name: 'Statistics II', creditHours: 3, difficulty: 'Low', syllabusCompletion: 90 },
    ]
  },
  {
    id: 4,
    name: "Semester 4",
    description: "Systems & Theory",
    subjects: [
      { id: 's4-1', code: 'CSC257', name: 'Theory of Computation', creditHours: 3, difficulty: 'High', syllabusCompletion: 10 },
      { id: 's4-2', code: 'CSC258', name: 'Computer Networks', creditHours: 3, difficulty: 'Mid', syllabusCompletion: 60 },
      { id: 's4-3', code: 'CSC259', name: 'Operating Systems', creditHours: 3, difficulty: 'Mid', syllabusCompletion: 50 },
      { id: 's4-4', code: 'CSC260', name: 'Database Management System', creditHours: 3, difficulty: 'Low', syllabusCompletion: 95 },
      { id: 's4-5', code: 'CSC261', name: 'Artificial Intelligence', creditHours: 3, difficulty: 'High', syllabusCompletion: 40 },
    ]
  },
  {
    id: 5,
    name: "Semester 5",
    description: "Applied Computing & Security",
    subjects: [
      { id: 's5-1', code: 'CSC314', name: 'Design and Analysis of Algorithms', creditHours: 3, difficulty: 'High', syllabusCompletion: 25 },
      { id: 's5-2', code: 'CSC315', name: 'System Analysis and Design', creditHours: 3, difficulty: 'Low', syllabusCompletion: 80 },
      { id: 's5-3', code: 'CSC316', name: 'Cryptography', creditHours: 3, difficulty: 'Mid', syllabusCompletion: 60 },
      { id: 's5-4', code: 'CSC317', name: 'Simulation and Modeling', creditHours: 3, difficulty: 'Mid', syllabusCompletion: 50 },
      { id: 's5-5', code: 'CSC318', name: 'Web Technology', creditHours: 3, difficulty: 'Low', syllabusCompletion: 90 },
    ]
  },
  {
    id: 6,
    name: "Semester 6",
    description: "Software Engineering & Compilers",
    subjects: [
      { id: 's6-1', code: 'CSC364', name: 'Software Engineering', creditHours: 3, difficulty: 'Low', syllabusCompletion: 85 },
      { id: 's6-2', code: 'CSC365', name: 'Compiler Design', creditHours: 3, difficulty: 'High', syllabusCompletion: 15 },
      { id: 's6-3', code: 'CSC366', name: 'E-Governance', creditHours: 3, difficulty: 'Low', syllabusCompletion: 95 },
      { id: 's6-4', code: 'CSC367', name: 'NET Centric Computing', creditHours: 3, difficulty: 'Mid', syllabusCompletion: 70 },
      { id: 's6-5', code: 'CSC368', name: 'Technical Writing', creditHours: 3, difficulty: 'Low', syllabusCompletion: 100 },
    ]
  },
  {
    id: 7,
    name: "Semester 7",
    description: "Advanced Development & Project",
    subjects: [
      { id: 's7-1', code: 'CSC409', name: 'Advanced Java Programming', creditHours: 3, difficulty: 'Mid', syllabusCompletion: 60 },
      { id: 's7-2', code: 'CSC410', name: 'Data Warehousing and Data Mining', creditHours: 3, difficulty: 'Mid', syllabusCompletion: 50 },
      { id: 's7-3', code: 'CSC411', name: 'Principles of Management', creditHours: 3, difficulty: 'Low', syllabusCompletion: 90 },
      { id: 's7-4', code: 'CSC412', name: 'Project Work', creditHours: 6, difficulty: 'High', syllabusCompletion: 10 },
    ]
  },
  {
    id: 8,
    name: "Semester 8",
    description: "Industry Integration",
    subjects: [
      { id: 's8-1', code: 'CSC461', name: 'Advanced Database', creditHours: 3, difficulty: 'Mid', syllabusCompletion: 40 },
      { id: 's8-2', code: 'CSC462', name: 'Internship', creditHours: 6, difficulty: 'Low', syllabusCompletion: 0 },
      { id: 's8-3', code: 'CSC463', name: 'Elective (Cloud Computing)', creditHours: 3, difficulty: 'Mid', syllabusCompletion: 30 },
    ]
  }
];
