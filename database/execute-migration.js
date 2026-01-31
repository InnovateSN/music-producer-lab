/**
 * Execute database migration for NextAuth password authentication
 * Run: npm run db:migrate
 */

const { neon } = require('@neondatabase/serverless');
const fs = require('fs');
const path = require('path');

async function runMigration() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    console.error('ERROR: DATABASE_URL environment variable is not set');
    console.log('Set it in your .env file or environment:');
    console.log('  DATABASE_URL=postgresql://user:password@host/database');
    process.exit(1);
  }

  const sql = neon(databaseUrl);

  try {
    console.log('Running NextAuth password migration...');

    // Read migration SQL
    const migrationPath = path.join(__dirname, 'add-password-hash.sql');
    const migrationSql = fs.readFileSync(migrationPath, 'utf8');

    // Split by semicolons and execute each statement
    const statements = migrationSql
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'));

    for (const statement of statements) {
      console.log('Executing:', statement.substring(0, 50) + '...');
      await sql`${sql.raw(statement)}`;
    }

    console.log('\\n✅ Migration completed successfully!');
    console.log('\\nNext steps:');
    console.log('1. Add NEXTAUTH_SECRET to your environment variables');
    console.log('   Generate one with: openssl rand -base64 32');
    console.log('2. Add NEXTAUTH_URL to your environment (e.g., https://music-producer-lab.vercel.app)');

  } catch (error) {
    console.error('Migration failed:', error.message);
    process.exit(1);
  }
}

runMigration();
