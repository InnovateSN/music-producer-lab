import { NextResponse } from 'next/server';
import { requireRole } from '@/lib/clerk';
import { query } from '@/lib/db';

/**
 * GET /api/schools
 * Get all schools (super admin only)
 */
export async function GET() {
  try {
    const user = await requireRole(['super_admin', 'school_admin']);

    let schools;

    if (user.role === 'super_admin') {
      // Super admin can see all schools
      schools = await query(
        'SELECT * FROM schools ORDER BY created_at DESC'
      );
    } else {
      // School admin can only see their own school
      schools = await query(
        'SELECT * FROM schools WHERE id = $1',
        [user.school_id]
      );
    }

    return NextResponse.json({ schools });
  } catch (error: any) {
    if (error.message === 'Unauthorized' || error.message.includes('Forbidden')) {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }

    console.error('Error fetching schools:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/schools
 * Create a new school (super admin only)
 */
export async function POST(request: Request) {
  try {
    await requireRole('super_admin');

    const body = await request.json();
    const {
      name,
      domain,
      country = 'GB',
      license_tier = 'small',
      max_students = 50,
      license_start,
      license_end,
      monthly_price_gbp,
      billing_email,
      billing_address,
      vat_number,
      notes,
    } = body;

    if (!name || !license_start || !license_end) {
      return NextResponse.json(
        { error: 'name, license_start, and license_end are required' },
        { status: 400 }
      );
    }

    const schools = await query(
      `INSERT INTO schools (
        name, domain, country, license_tier, max_students,
        license_start, license_end, monthly_price_gbp,
        billing_email, billing_address, vat_number, notes
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING *`,
      [
        name,
        domain,
        country,
        license_tier,
        max_students,
        license_start,
        license_end,
        monthly_price_gbp,
        billing_email,
        billing_address,
        vat_number,
        notes,
      ]
    );

    return NextResponse.json({ school: schools[0] });
  } catch (error: any) {
    if (error.message === 'Unauthorized' || error.message.includes('Forbidden')) {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }

    console.error('Error creating school:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
