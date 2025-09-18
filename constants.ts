

import { User, UserRole, TimetableEntry, Task, TaskStatus, Notice, Query, QueryStatus, AcademicCalendarEvent, EventType, Exam, Result, Attendance, ClassroomMaterial, Syllabus } from './types';

// NOTE: In a real application, passwords would be securely hashed.
// For this demo, we are using plain text passwords.
export const USERS: User[] = [
  { id: 'admin01', name: 'Dr. Evelyn Reed', role: UserRole.ADMIN, email: 'admin@ssifs.edu', password: 'password123' },
  { id: 'staff01', name: 'Prof. Liam Chen', role: UserRole.STAFF, email: 'liam.c@ssifs.edu', password: 'password123' },
  { id: 'staff02', name: 'Ms. Ava Patel', role: UserRole.STAFF, email: 'ava.p@ssifs.edu', password: 'password123' },
  { id: 'student01', name: 'Chloe Davis', role: UserRole.STUDENT, email: 'chloe.d@ssifs.edu', password: 'password123' },
  { id: 'student02', name: 'Noah Miller', role: UserRole.STUDENT, email: 'noah.m@ssifs.edu', password: 'password123' },
  { id: 'student03', name: 'Sophia Wilson', role: UserRole.STUDENT, email: 'sophia.w@ssifs.edu', password: 'password123' },
];

export const TIMETABLE: TimetableEntry[] = [
    { id: 'tt01', day: 'Monday', time: '10:00 - 11:30', subject: 'Fashion History', assignedTo: 'staff01', type: 'class' },
    { id: 'tt02', day: 'Monday', time: '12:00 - 13:30', subject: 'Pattern Making I', assignedTo: 'staff02', type: 'lab' },
    { id: 'tt03', day: 'Tuesday', time: '09:00 - 10:30', subject: 'Textile Science', assignedTo: 'staff02', type: 'class' },
    { id: 'tt04', day: 'Wednesday', time: '11:00 - 12:30', subject: 'Fashion Illustration', assignedTo: 'staff01', type: 'lab' },
];

export const TASKS: Task[] = [
    { id: 'task01', title: 'Research Essay: 20th Century Couturiers', description: 'Write a 1500-word essay on the impact of two major 20th-century couturiers.', dueDate: '2024-08-15', status: TaskStatus.APPROVED, createdBy: 'staff01', creatorName: 'Prof. Liam Chen' },
    { id: 'task02', title: 'Mood Board: "Urban Oasis"', description: 'Create a physical or digital mood board for a collection inspired by the theme "Urban Oasis".', dueDate: '2024-08-20', status: TaskStatus.PENDING, createdBy: 'staff02', creatorName: 'Ms. Ava Patel' },
    { id: 'task03', title: 'Pattern Drafting Exercise', description: 'Draft a full-scale pattern for a classic A-line skirt.', dueDate: '2024-08-18', status: TaskStatus.REJECTED, createdBy: 'staff02', creatorName: 'Ms. Ava Patel' },
];

export const NOTICES: Notice[] = [
    { id: 'notice01', title: 'Mid-Term Guest Lecture', content: 'We are pleased to announce a guest lecture by renowned designer Anya Gupta on Friday at 2 PM in the main auditorium.', date: '2024-07-20' },
    { id: 'notice02', title: 'Library Hours Extended', content: 'For the upcoming exam period, the library will be open until 10 PM on weekdays starting next Monday.', date: '2024-07-18' },
];

export const QUERIES: Query[] = [
    { 
        id: 'query01', 
        studentId: 'student01', 
        studentName: 'Chloe Davis', 
        recipientId: 'staff02',
        recipientName: 'Ms. Ava Patel',
        subject: 'Pattern Making I - Question', 
        question: 'Can I use a different type of fabric for the A-line skirt pattern drafting exercise?',
        status: QueryStatus.PENDING,
        createdAt: '2024-07-28',
    },
    { 
        id: 'query02', 
        studentId: 'student02', 
        studentName: 'Noah Miller',
        recipientId: 'admin01',
        recipientName: 'Admin',
        subject: 'Library Hours', 
        question: 'Will the library be open this weekend as well?',
        status: QueryStatus.ANSWERED,
        response: 'Hi Noah, yes, the library will be open from 10 AM to 4 PM on Saturday.',
        createdAt: '2024-07-27',
    },
    { 
        id: 'query03', 
        studentId: 'student03', 
        studentName: 'Sophia Wilson',
        recipientId: 'all_faculty',
        recipientName: 'All Faculty/Admin',
        subject: 'General Question about Final Project', 
        question: 'What are the submission guidelines for the final year project?',
        status: QueryStatus.PENDING,
        createdAt: '2024-07-29',
    }
];

export const ACADEMIC_CALENDAR_EVENTS: AcademicCalendarEvent[] = [
  { id: 'ace01', title: 'Summer Break Begins', date: '2024-08-01', type: EventType.HOLIDAY },
  { id: 'ace02', title: 'Mid-Term Examinations', date: '2024-09-15', type: EventType.EXAM },
  { id: 'ace03', title: 'Annual Design Showcase', date: '2024-10-05', type: EventType.EVENT },
  { id: 'ace04', title: 'Digital Illustration Workshop', date: '2024-10-12', type: EventType.WORKSHOP },
];

export const EXAMS: Exam[] = [
  { id: 'exam01', subject: 'Fashion History', date: '2024-09-15', time: '10:00 AM' },
  { id: 'exam02', subject: 'Textile Science', date: '2024-09-17', time: '10:00 AM' },
  { id: 'exam03', subject: 'Pattern Making I', date: '2024-09-19', time: '01:00 PM' },
];

export const RESULTS: Result[] = [
  { id: 'res01', studentId: 'student01', examId: 'exam01', subject: 'Fashion History', grade: 'A' },
  { id: 'res02', studentId: 'student02', examId: 'exam01', subject: 'Fashion History', grade: 'B+' },
  { id: 'res03', studentId: 'student01', examId: 'exam02', subject: 'Textile Science', grade: 'A-' },
];

export const ATTENDANCE: Attendance[] = [
  { studentId: 'student01', date: '2024-07-29', subject: 'Fashion History', status: 'Present' },
  { studentId: 'student02', date: '2024-07-29', subject: 'Fashion History', status: 'Present' },
  { studentId: 'student03', date: '2024-07-29', subject: 'Fashion History', status: 'Absent' },
  { studentId: 'student01', date: '2024-07-30', subject: 'Textile Science', status: 'Present' },
  { studentId: 'student02', date: '2024-07-30', subject: 'Textile Science', status: 'Absent' },
  { studentId: 'student03', date: '2024-07-30', subject: 'Textile Science', status: 'Present' },
];

export const CLASSROOM_MATERIALS: ClassroomMaterial[] = [
  { id: 'mat01', subject: 'Fashion History', title: 'Lecture 1: The Renaissance', description: 'Presentation slides from the first lecture.', fileUrl: '#', uploadedBy: 'staff01', uploaderName: 'Prof. Liam Chen', uploadDate: '2024-07-25' },
  { id: 'mat02', subject: 'Textile Science', title: 'Lab Guide: Weave Analysis', description: 'Instructions for the first lab session.', fileUrl: '#', uploadedBy: 'staff02', uploaderName: 'Ms. Ava Patel', uploadDate: '2024-07-26' },
];

export const SYLLABUS_DATA: Syllabus[] = [
  { 
    id: 'syl01', 
    subject: 'Fashion History', 
    modules: [
      { title: 'Module 1: Ancient World to Renaissance', topics: ['Ancient Egyptian Dress', 'Greek & Roman Attire', 'The Renaissance Court'] },
      { title: 'Module 2: 18th & 19th Centuries', topics: ['Rococo Fashion', 'The Victorian Era', 'Birth of Haute Couture'] },
    ] 
  },
  { 
    id: 'syl02', 
    subject: 'Textile Science', 
    modules: [
      { title: 'Module 1: Fiber Analysis', topics: ['Natural Fibers', 'Synthetic Fibers', 'Fiber Identification'] },
      { title: 'Module 2: Fabric Construction', topics: ['Weaving', 'Knitting', 'Non-wovens'] },
    ] 
  },
];
