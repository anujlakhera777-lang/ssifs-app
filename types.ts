

export enum UserRole {
  STUDENT = 'Student',
  STAFF = 'Staff',
  ADMIN = 'Admin',
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  password: string;
}

export interface TimetableEntry {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  time: string;
  subject: string;
  assignedTo: string; // User ID
  type: 'class' | 'lab' | 'break';
}

export enum TaskStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: TaskStatus;
  createdBy: string; // Staff User ID
  creatorName: string; 
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
}

export enum QueryStatus {
  PENDING = 'Pending',
  ANSWERED = 'Answered',
}

export interface Query {
  id:string;
  studentId: string;
  studentName: string;
  recipientId: string; // 'admin', 'all_faculty', or a specific user ID
  recipientName: string;
  subject: string;
  question: string;
  status: QueryStatus;
  response?: string;
  createdAt: string;
}

export enum EventType {
  HOLIDAY = 'Holiday',
  EXAM = 'Exam',
  EVENT = 'Event',
  WORKSHOP = 'Workshop',
}

export interface AcademicCalendarEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  type: EventType;
}

export interface Exam {
  id: string;
  subject: string;
  date: string; // YYYY-MM-DD
  time: string;
}

export interface Result {
  id: string;
  studentId: string;
  examId: string;
  subject: string;
  grade: string; // e.g. "A+", "85%"
}

export interface Attendance {
  studentId: string;
  date: string; // YYYY-MM-DD
  subject: string;
  status: 'Present' | 'Absent';
}

export interface ClassroomMaterial {
  id: string;
  subject: string;
  title: string;
  description: string;
  fileUrl: string; // for demo, can be a dummy link
  uploadedBy: string; // staffId
  uploaderName: string;
  uploadDate: string;
}

export interface Syllabus {
  id: string;
  subject: string;
  modules: { title: string; topics: string[] }[];
}
