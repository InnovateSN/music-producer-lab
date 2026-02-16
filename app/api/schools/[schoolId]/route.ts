import { NextResponse } from 'next/server';
import { requireRole, getCurrentUser } from '@/lib/clerk';
import { validateOrigin } from '@/lib/security';
import db, { query } from '@/lib/db';

/**
 * GET /api/schools/[schoolId]
 * Get school details
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ schoolId: string }> }
) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { schoolId } = await params;

    // Check permissions
    if (user.role !== 'super_admin' && user.school_id !== schoolId) {
      return NextResponse.json(
        { error: 'Forbidden: You can only view your own school' },
        { status: 403 }
      );
    }

    const school = await db.getSchoolById(schoolId);

    if (!school) {
      return NextResponse.json({ error: 'School not found' }, { status: 404 });
    }

    return NextResponse.json({ school });
  } catch (error) {
    console.error('Error fetching school:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/schools/[schoolId]
 * Update school details (super admin only)
 */
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ schoolId: string }> }
) {
  try {
    // CSRF protection
    const originError = validateOrigin(request);
    if (originError) return originError;

    await requireRole('super_admin');

    const { schoolId } = await params;
    const body = await request.json();

    const allowedFields = [
      'name',
      'domain',
      'country',
      'license_tier',
      'max_students',
      'license_start',
      'license_end',
      'status',
      'monthly_price_gbp',
      'billing_email',
      'billing_address',
      'vat_number',
      'notes',
    ];

    const updates = Object.keys(body).filter((key) =>
      allowedFields.includes(key)
    );

    if (updates.length === 0) {
      return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 });
    }

    const values = updates.map((key) => body[key]);
    const setClause = updates.map((key, i) => `${key} = $${i + 2}`).join(', ');

    const schools = await query(
      `UPDATE schools SET ${setClause}, updated_at = NOW() WHERE id = $1 RETURNING *`,
      [schoolId, ...values]
    );

    if (schools.length === 0) {
      return NextResponse.json({ error: 'School not found' }, { status: 404 });
    }

    return NextResponse.json({ school: schools[0] });
  } catch (error: any) {
    if (error.message === 'Unauthorized' || error.message.includes('Forbidden')) {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }

    console.error('Error updating school:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/schools/[schoolId]/students
 * Get all students in a school
 */
export async function getStudents(schoolId: string) {
  return db.getSchoolStudents(schoolId);
}
