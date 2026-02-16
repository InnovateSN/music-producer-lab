// Script to execute database schema on Neon
const fs = require('fs');
const path = require('path');

// For Neon, we'll use the native postgres driver
// If pg is not installed, we'll use a simple HTTP approach

async function executeSchema() {
  try {
    const { Client } = require('pg');

    const connectionString = 'postgresql://neondb_owner:npg_gBk8LyJOL3iu@ep-plain-glitter-agslh0bn-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require';

    const client = new Client({
      connectionString,
      ssl: {
        rejectUnauthorized: false
      }
    });

    console.log('🔌 Connecting to Neon database...');
    await client.connect();
    console.log('✅ Connected successfully!');

    const schemaPath = path.join(__dirname, 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');

    console.log('📝 Executing schema...');
    await client.query(schema);
    console.log('✅ Schema executed successfully!');

    // Verify tables were created
    const result = await client.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `);

    console.log('\n📊 Tables created:');
    result.rows.forEach(row => {
      console.log(`  - ${row.table_name}`);
    });

    await client.end();
    console.log('\n🎉 Database setup complete!');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

executeSchema();
