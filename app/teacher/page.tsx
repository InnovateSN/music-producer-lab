import { requireRole } from '@/lib/clerk';
import { query } from '@/lib/db';
import { redirect } from 'next/navigation';
import { SignOutButton } from '@/components/SignOutButton';

export default async function TeacherDashboard() {
  try {
    const user = await requireRole(['teacher', 'school_admin', 'super_admin']);

    // Get teacher's classes
    const classes = await query(
      `SELECT
        c.id,
        c.name,
        c.class_code,
        c.academic_year,
        COUNT(DISTINCT ce.student_id) as student_count,
        COUNT(DISTINCT lp.id) FILTER (WHERE lp.status = 'completed') as total_completed,
        ROUND(AVG(lp.completion_percentage), 1) as avg_progress
      FROM classes c
      LEFT JOIN class_enrollments ce ON ce.class_id = c.id AND ce.status = 'active'
      LEFT JOIN lesson_progress lp ON lp.user_id = ce.student_id
      WHERE c.teacher_id = $1 AND c.is_archived = false
      GROUP BY c.id, c.name, c.class_code, c.academic_year
      ORDER BY c.created_at DESC`,
      [user.id]
    );

    // Get overall stats for teacher
    const stats = await query(
      `SELECT
        COUNT(DISTINCT ce.student_id) as total_students,
        COUNT(DISTINCT c.id) as total_classes,
        COUNT(DISTINCT lp.id) FILTER (WHERE lp.status = 'completed') as lessons_completed,
        ROUND(AVG(lp.completion_percentage), 1) as avg_completion
      FROM classes c
      LEFT JOIN class_enrollments ce ON ce.class_id = c.id AND ce.status = 'active'
      LEFT JOIN lesson_progress lp ON lp.user_id = ce.student_id
      WHERE c.teacher_id = $1 AND c.is_archived = false`,
      [user.id]
    );

    const teacherStats = stats[0] || {
      total_students: 0,
      total_classes: 0,
      lessons_completed: 0,
      avg_completion: 0,
    };

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Teacher Dashboard
                </h1>
                <p className="text-gray-600 mt-1">
                  Welcome back, {user.first_name || user.email}
                </p>
              </div>
              <SignOutButton className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50" />
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Students"
              value={teacherStats.total_students || 0}
              icon="👥"
              color="blue"
            />
            <StatCard
              title="Active Classes"
              value={teacherStats.total_classes || 0}
              icon="📚"
              color="green"
            />
            <StatCard
              title="Lessons Completed"
              value={teacherStats.lessons_completed || 0}
              icon="✅"
              color="purple"
            />
            <StatCard
              title="Avg. Progress"
              value={`${teacherStats.avg_completion || 0}%`}
              icon="📊"
              color="orange"
            />
          </div>

          {/* Classes List */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">
                Your Classes
              </h2>
              <a
                href="/teacher/create-class"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                + New Class
              </a>
            </div>

            {classes.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <p className="text-gray-500 text-lg">No classes yet</p>
                <p className="text-gray-400 mt-2">
                  Create your first class to get started
                </p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {classes.map((classItem: any) => (
                  <a
                    key={classItem.id}
                    href={`/teacher/class/${classItem.id}`}
                    className="block px-6 py-4 hover:bg-gray-50 transition"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {classItem.name}
                        </h3>
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span>
                            📝 Code: <strong>{classItem.class_code}</strong>
                          </span>
                          <span>
                            👥 {classItem.student_count || 0} students
                          </span>
                          {classItem.academic_year && (
                            <span>📅 {classItem.academic_year}</span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-indigo-600">
                          {classItem.avg_progress || 0}%
                        </div>
                        <div className="text-sm text-gray-500">
                          avg progress
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full transition-all"
                          style={{
                            width: `${classItem.avg_progress || 0}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ActionCard
              title="View All Students"
              description="See progress across all your classes"
              icon="👥"
              href="/teacher/students"
            />
            <ActionCard
              title="Export Reports"
              description="Download CSV reports for school records"
              icon="📥"
              href="/teacher/reports"
            />
            <ActionCard
              title="Curriculum Guide"
              description="View lesson plans and teaching resources"
              icon="📖"
              href="/teacher/curriculum"
            />
          </div>
        </main>
      </div>
    );
  } catch (error: any) {
    if (error.message.includes('Forbidden')) {
      redirect('/');
    }
    throw error;
  }
}

// Stat Card Component
function StatCard({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: string | number;
  icon: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
}) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div
          className={`text-4xl ${colorClasses[color]} rounded-full w-16 h-16 flex items-center justify-center`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

// Action Card Component
function ActionCard({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </a>
  );
}
