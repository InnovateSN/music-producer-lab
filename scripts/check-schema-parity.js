#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const sqlPath = path.join(repoRoot, 'database', 'schema.sql');
const prismaPath = path.join(repoRoot, 'prisma', 'schema.prisma');

function parseSqlTables(sql) {
  const tables = new Map();
  const createTableRegex = /CREATE TABLE\s+(\w+)\s*\(([^;]*?)\);/gims;

  for (const match of sql.matchAll(createTableRegex)) {
    const tableName = match[1];
    const body = match[2];
    const columns = [];

    for (const rawLine of body.split('\n')) {
      const line = rawLine.trim();
      if (!line || line.startsWith('--')) continue;
      if (/^(UNIQUE|PRIMARY|FOREIGN|CONSTRAINT|CHECK)\b/i.test(line)) continue;

      const colMatch = line.match(/^"?([a-zA-Z_][a-zA-Z0-9_]*)"?\s+/);
      if (colMatch) {
        columns.push(colMatch[1]);
      }
    }

    tables.set(tableName, new Set(columns));
  }

  return tables;
}

function parsePrismaModels(prisma) {
  const models = new Map();
  const modelRegex = /model\s+(\w+)\s*\{([\s\S]*?)\n\}/g;
  const scalarTypes = new Set([
    'String',
    'Boolean',
    'Int',
    'BigInt',
    'Float',
    'Decimal',
    'DateTime',
    'Json',
    'Bytes',
  ]);

  for (const match of prisma.matchAll(modelRegex)) {
    const modelName = match[1];
    const body = match[2];
    const lines = body.split('\n').map((line) => line.trim()).filter(Boolean);

    let tableName = modelName;
    const columns = new Set();

    for (const line of lines) {
      if (line.startsWith('//')) continue;

      const mapMatch = line.match(/^@@map\("([^"]+)"\)/);
      if (mapMatch) {
        tableName = mapMatch[1];
        continue;
      }

      if (line.startsWith('@@')) continue;

      const fieldMatch = line.match(/^(\w+)\s+([\w?\[\]]+)/);
      if (!fieldMatch) continue;

      const fieldName = fieldMatch[1];
      const rawType = fieldMatch[2].replace(/[?\[\]]/g, '');
      if (!scalarTypes.has(rawType)) continue;

      const fieldMapMatch = line.match(/@map\("([^"]+)"\)/);
      columns.add(fieldMapMatch ? fieldMapMatch[1] : fieldName);
    }

    models.set(tableName, columns);
  }

  return models;
}

function sorted(values) {
  return [...values].sort();
}

const sql = fs.readFileSync(sqlPath, 'utf8');
const prisma = fs.readFileSync(prismaPath, 'utf8');

const sqlTables = parseSqlTables(sql);
const prismaModels = parsePrismaModels(prisma);

const errors = [];

for (const table of sorted(sqlTables.keys())) {
  if (!prismaModels.has(table)) {
    errors.push(`Missing Prisma model for SQL table: ${table}`);
    continue;
  }

  const sqlColumns = sqlTables.get(table);
  const prismaColumns = prismaModels.get(table);

  const missingColumns = sorted([...sqlColumns].filter((col) => !prismaColumns.has(col)));
  const extraColumns = sorted([...prismaColumns].filter((col) => !sqlColumns.has(col)));

  if (missingColumns.length > 0) {
    errors.push(`Table ${table} is missing Prisma columns: ${missingColumns.join(', ')}`);
  }

  if (extraColumns.length > 0) {
    errors.push(`Table ${table} has extra Prisma columns not in SQL: ${extraColumns.join(', ')}`);
  }
}

for (const table of sorted(prismaModels.keys())) {
  if (!sqlTables.has(table)) {
    errors.push(`Prisma model maps to non-canonical table not in database/schema.sql: ${table}`);
  }
}

if (errors.length > 0) {
  console.error('Schema parity check failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log('Schema parity check passed: prisma/schema.prisma matches database/schema.sql tables and columns.');
