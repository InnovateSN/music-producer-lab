import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teacher Dashboard - Music Producer Lab',
  description: 'Manage your classes and track student progress',
};

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href="/teacher-dashboard.css" />
      {children}
    </>
  );
}
