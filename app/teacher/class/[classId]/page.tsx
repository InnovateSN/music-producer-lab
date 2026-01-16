import { requireRole } from '@/lib/clerk';
import { query } from '@/lib/db';
import { redirect } from 'next/navigation';

export default async function ClassDetailPage({
  params,
}: {
  params: Promise<{ classId: string }>;
}) {
  try {
    const user = await requireRole(['teacher', 'school_admin', 'super_admin']);
    const { classId } = await params;

    // Get class details
    const classDetails = await query(
      `SELECT c.*
       FROM classes c
       WHERE c.id = $1 AND c.teacher_id = $2`,
      [classId, user.id]
    );

    if (classDetails.length === 0) {
      redirect('/teacher');
    }

    const classData = classDetails[0];

    // Get students in this class with their progress
    const students = await query(
      `SELECT
        u.id,
        u.email,
        u.first_name,
        u.last_name,
        ce.enrolled_at,
        COUNT(lp.id) as lessons_started,
        COUNT(lp.id) FILTER (WHERE lp.status = 'completed') as lessons_completed,
        ROUND(AVG(lp.completion_percentage), 1) as avg_completion,
        SUM(lp.time_spent_seconds) as total_time_seconds,
        MAX(lp.last_accessed) as last_active
      FROM class_enrollments ce
      JOIN users u ON u.id = ce.student_id
      LEFT JOIN lesson_progress lp ON lp.user_id = u.id
      WHERE ce.class_id = $1 AND ce.status = 'active'
      GROUP BY u.id, u.email, u.first_name, u.last_name, ce.enrolled_at
      ORDER BY u.last_name, u.first_name`,
      [classId]
    );

    // Get class statistics
    const classStats = await query(
      `SELECT
        COUNT(DISTINCT ce.student_id) as total_students,
        COUNT(DISTINCT lp.id) as total_lessons_started,
        COUNT(DISTINCT lp.id) FILTER (WHERE lp.status = 'completed') as total_completed,
        ROUND(AVG(lp.completion_percentage), 1) as avg_completion
      FROM class_enrollments ce
      LEFT JOIN lesson_progress lp ON lp.user_id = ce.student_id
      WHERE ce.class_id = $1 AND ce.status = 'active'`,
      [classId]
    );

    const stats = classStats[0] || {
      total_students: 0,
      total_lessons_started: 0,
      total_completed: 0,
      avg_completion: 0,
    };

    // Module breakdown
    const moduleBreakdown = await query(
      `SELECT
        lp.module_name,
        COUNT(DISTINCT lp.user_id) as students_started,
        COUNT(*) FILTER (WHERE lp.status = 'completed') as lessons_completed,
        ROUND(AVG(lp.completion_percentage), 1) as avg_progress
      FROM class_enrollments ce
      JOIN lesson_progress lp ON lp.user_id = ce.student_id
      WHERE ce.class_id = $1 AND ce.status = 'active' AND lp.module_name IS NOT NULL
      GROUP BY lp.module_name
      ORDER BY lp.module_name`,
      [classId]
    );

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-4">
              <a
                href="/teacher"
                className="text-gray-400 hover:text-gray-600"
              >
                ← Back
              </a>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900">
                  {classData.name}
                </h1>
                <p className="text-gray-600 mt-1">
                  Class Code: <strong>{classData.class_code}</strong>
                  {classData.academic_year && ` • ${classData.academic_year}`}
                </p>
              </div>
              <ExportButton classId={classId} className={classData.name} />
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Class Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Students"
              value={stats.total_students}
              icon="👥"
            />
            <StatCard
              title="Lessons Started"
              value={stats.total_lessons_started}
              icon="📖"
            />
            <StatCard
              title="Completed"
              value={stats.total_completed}
              icon="✅"
            />
            <StatCard
              title="Avg. Progress"
              value={`${stats.avg_completion || 0}%`}
              icon="📊"
            />
          </div>

          {/* Module Breakdown */}
          {moduleBreakdown.length > 0 && (
            <div className="bg-white rounded-lg shadow mb-8 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Module Progress
              </h2>
              <div className="space-y-4">
                {moduleBreakdown.map((module: any) => (
                  <div key={module.module_name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-900">
                        {module.module_name}
                      </span>
                      <span className="text-sm text-gray-600">
                        {module.students_started} students •{' '}
                        {module.avg_progress}% avg
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${module.avg_progress || 0}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Students List */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Students ({students.length})
              </h2>
            </div>

            {students.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <p className="text-gray-500 text-lg">No students enrolled yet</p>
                <p className="text-gray-400 mt-2">
                  Share the class code with your students
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Progress
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Lessons
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time Spent
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Active
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {students.map((student: any) => (
                      <tr key={student.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="font-medium text-gray-900">
                              {student.first_name && student.last_name
                                ? `${student.first_name} ${student.last_name}`
                                : student.email}
                            </div>
                            <div className="text-sm text-gray-500">
                              {student.email}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-full max-w-[200px]">
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-indigo-600">
                                  {student.avg_completion || 0}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-indigo-600 h-2 rounded-full"
                                  style={{
                                    width: `${student.avg_completion || 0}%`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {student.lessons_completed || 0} / 175 completed
                          </div>
                          <div className="text-sm text-gray-500">
                            {student.lessons_started || 0} started
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatTime(student.total_time_seconds || 0)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {student.last_active
                            ? formatDate(student.last_active)
                            : 'Never'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  } catch (error: any) {
    if (error.message.includes('Forbidden')) {
      redirect('/teacher');
    }
    throw error;
  }
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  );
}

function ExportButton({
  classId,
  className,
}: {
  classId: string;
  className: string;
}) {
  return (
    <a
      href={`/api/teacher/class/${classId}/export`}
      download={`${className.replace(/\s+/g, '-')}-progress.csv`}
      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
    >
      <span>📥</span>
      <span>Export CSV</span>
    </a>
  );
}

// Helper functions
function formatTime(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;

  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
