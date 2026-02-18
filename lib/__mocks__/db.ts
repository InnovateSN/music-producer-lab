// Mock for lib/db.ts — no Prisma client
export const query = jest.fn();
export const transaction = jest.fn();
export const db = {
  getUserByClerkId: jest.fn(),
  getUserById: jest.fn(),
  createUser: jest.fn(),
  updateUser: jest.fn(),
  getLessonProgress: jest.fn(),
  getAllUserProgress: jest.fn(),
  upsertLessonProgress: jest.fn(),
  getSchoolById: jest.fn(),
  getSchoolStudents: jest.fn(),
  getSchoolTeachers: jest.fn(),
  getClassById: jest.fn(),
  getTeacherClasses: jest.fn(),
  getClassStudents: jest.fn(),
  getUserPatterns: jest.fn(),
  savePattern: jest.fn(),
  getUserCertificates: jest.fn(),
  generateCertificate: jest.fn(),
};

export default db;
