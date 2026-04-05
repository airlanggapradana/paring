# PARING Platform - Phase 2: Database & ORM Configuration
## Comprehensive Step-by-Step Implementation Plan

**Document Version:** 1.0  
**Created:** April 5, 2026  
**Status:** Ready for Execution  
**Target Duration:** 4-5 hours  

---

## Table of Contents
1. [Pre-Execution Checklist](#pre-execution-checklist)
2. [Step-by-Step Execution Plan](#step-by-step-execution-plan)
3. [Validation Tests](#validation-tests)
4. [Rollback Plan](#rollback-plan)
5. [Success Criteria](#success-criteria)
6. [Troubleshooting Reference](#troubleshooting-reference)

---

## Pre-Execution Checklist

### 1. Environment Setup Verification

#### Step 1.1: Verify Node.js and npm Installation
```bash
# Check Node.js version (must be 18.x or higher)
node --version

# Check npm version (must be 9.x or higher)
npm --version
```

**Expected Output:**
- v18.20.0 (or higher)
- 9.6.7 (or higher)

**If Node.js is not installed:**
- Visit https://nodejs.org/
- Install LTS version (18.x or 20.x)
- Verify installation with commands above

#### Step 1.2: Verify Current Working Directory
```bash
# Confirm you're in the web directory
pwd
```

**Expected Output:**
- /home/cn/projects/competition/web2/paring/web

**If not in correct directory:**
```bash
cd /home/cn/projects/competition/web2/paring/web
```

### 2. Environment Variable Validation

#### Step 2.1: Verify Database Connection String
```bash
# Check if .env file exists
ls -la .env

# Display the DATABASE_URL
grep DATABASE_URL .env

# Display the DIRECT_URL
grep DIRECT_URL .env
```

**Format Requirements:**
- DATABASE_URL: postgresql://[user]:[pass]@[host]:6543/postgres with pgbouncer=true
- DIRECT_URL: postgresql://[user]:[pass]@[host]:5432/postgres

### 3. Dependency Verification

#### Step 3.1: Check Prisma Installation
```bash
# List Prisma in dependencies
npm list prisma

# Expected: prisma@5.21.1 and @prisma/client@5.21.1
```

**If node_modules doesn't exist:**
```bash
npm install
```

### 4. Database Connection Readiness

#### Step 4.1: Test Connection to Supabase
```bash
# Using Node.js
cat > /tmp/test-db.js << 'EOFJS'
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.$queryRaw`SELECT NOW()`;
    console.log('Success: Database connected');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main().finally(() => prisma.$disconnect());
EOFJS

node /tmp/test-db.js
```

### 5. Schema Validation

#### Step 5.1: Verify Prisma Schema File
```bash
# Check schema file exists
ls -la prisma/schema.prisma

# Verify it contains all required models
grep "^model " prisma/schema.prisma | wc -l
```

**Expected:** 15 models

### 6. Migration Files Verification

#### Step 6.1: Check Initial Migration Exists
```bash
# Verify migration directory structure
ls -la prisma/migrations/

# Verify initial migration SQL
ls -la prisma/migrations/0_init/
```

### 7. Seed Script Verification

#### Step 7.1: Verify Seed File Exists
```bash
# Check seed file
ls -la prisma/seed.ts

# Verify it imports PrismaClient
grep "PrismaClient" prisma/seed.ts
```

#### Step 7.2: Check package.json for Seed Script
```bash
# Verify seed script is defined
grep "prisma:seed" package.json
```

---

## Step-by-Step Execution Plan

### PHASE 2A: MIGRATION APPLICATION

#### STEP 1: Verify Current Migration Status

**Objective:** Determine current state of database migrations

**Exact Command:**
```bash
npx prisma migrate status
```

**Expected Output:** Should indicate pending migrations or "All migrations have been applied"

**Verification:** Check for migration status message

---

#### STEP 2: Apply Initial Migration (0_init)

**Objective:** Create all tables, enums, and relationships in Supabase database

**Exact Command:**
```bash
npx prisma migrate deploy
```

**Expected Output:**
```
The following migration(s) have been applied:
migrations/
  0_init/ (18 tables)

✓ Your database is now in sync with your schema.
```

**Duration:** 2-5 seconds

**Alternative Command:**
```bash
npx prisma migrate dev --name init
```

**Troubleshooting:**
| Issue | Solution |
|-------|----------|
| Error: database does not exist | Create database in Supabase console |
| Error: role does not exist | Check DATABASE_URL credentials |
| Error: permission denied | Contact Supabase admin |
| Error: timeout | Check network connection |

**Verification:**
- [ ] Command completed without errors
- [ ] Output shows tables being created
- [ ] No permission errors

---

#### STEP 3: Verify Tables Were Created

**Objective:** Confirm all 15 tables exist in the database

**Exact Command:**
```bash
npx prisma db execute --stdin << 'EOF'
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;
EOF
```

**Expected Output:** Should list 18 tables including User, PatientProfile, NurseProfile, etc.

**Verification:**
- [ ] All 18 tables are listed
- [ ] No error messages

---

#### STEP 4: Verify Table Relationships and Indexes

**Objective:** Ensure foreign keys and indexes were created correctly

**Exact Command:**
```bash
npx prisma db execute --stdin << 'EOF'
SELECT constraint_name, table_name
FROM information_schema.referential_constraints
WHERE constraint_schema = 'public'
ORDER BY table_name;
EOF
```

**Expected Output:** Should list 18+ foreign key relationships

**Verification:**
- [ ] Multiple relationships listed
- [ ] No errors

---

#### STEP 5: Verify Database Enums

**Objective:** Confirm all PostgreSQL ENUM types were created

**Exact Command:**
```bash
npx prisma db execute --stdin << 'EOF'
SELECT typname
FROM pg_type t
WHERE t.typnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public')
ORDER BY typname;
EOF
```

**Expected Output:** Should list 11 enums: UserRole, UserStatus, Gender, ServiceType, etc.

**Verification:**
- [ ] All 11 enums listed
- [ ] No errors

---

### PHASE 2B: DATABASE SEEDING

#### STEP 6: Verify Seed Script Dependencies

**Objective:** Ensure seed script can be executed successfully

**Exact Command:**
```bash
npm list ts-node
```

**If ts-node is missing:**
```bash
npm install --save-dev ts-node @types/node
```

**Verification:**
- [ ] ts-node is installed
- [ ] No syntax errors

---

#### STEP 7: Run Database Seed Script

**Objective:** Populate database with sample data

**Exact Command:**
```bash
npm run prisma:seed
```

**Expected Output:**
```
Starting database seed...
Admin user created: [ID]
Patient profile created: [ID]
Nurse profile created: [ID]
Database seed completed successfully!
```

**Duration:** 3-8 seconds

**Alternative Command:**
```bash
npx ts-node prisma/seed.ts
```

**Troubleshooting:**
| Issue | Solution |
|-------|----------|
| Error: PrismaClient not initialized | Ensure DATABASE_URL is set |
| Error: duplicate key value | Database already has seed data |
| Error: foreign key constraint | Check seed.ts logic |
| Script hangs | Check network connection |

**Verification:**
- [ ] Script completes with success message
- [ ] No error messages
- [ ] All user/profile creation messages appear

---

#### STEP 8: Verify Seed Data Was Inserted

**Objective:** Confirm sample data exists in database

**Exact Command:**
```bash
npx prisma db execute --stdin << 'EOF'
SELECT 'User' as table_name, count(*) as count FROM "User"
UNION ALL
SELECT 'PatientProfile', count(*) FROM "PatientProfile"
UNION ALL
SELECT 'NurseProfile', count(*) FROM "NurseProfile"
UNION ALL
SELECT 'Service', count(*) FROM "Service"
ORDER BY table_name;
EOF
```

**Expected Output:** Should show record counts for each table

**Verification:**
- [ ] At least 2 User records
- [ ] At least 1 PatientProfile
- [ ] At least 1 NurseProfile
- [ ] At least 1 Service

---

### PHASE 2C: PRISMA CLIENT & STUDIO

#### STEP 9: Generate Prisma Client

**Objective:** Generate type-safe Prisma Client based on schema

**Exact Command:**
```bash
npx prisma generate
```

**Expected Output:**
```
✔ Generated Prisma Client to ./node_modules/@prisma/client
```

**Duration:** 1-2 seconds

**Verification:**
- [ ] "Generated Prisma Client" message appears
- [ ] No errors

---

#### STEP 10: Test Prisma Client Connection

**Objective:** Verify Prisma can connect to and query the database

**Exact Command:**
```bash
cat > /tmp/test-prisma.js << 'EOFJS'
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const count = await prisma.user.count();
    console.log('Users:', count);
    
    const user = await prisma.user.findFirst();
    if (user) console.log('Sample user:', user.email);
    
    console.log('✓ Prisma Client works');
    process.exit(0);
  } catch (error) {
    console.error('✗ Error:', error.message);
    process.exit(1);
  }
}

main().finally(() => prisma.$disconnect());
EOFJS

node /tmp/test-prisma.js
```

**Expected Output:**
```
Users: 2
Sample user: admin@paring.com
✓ Prisma Client works
```

**Verification:**
- [ ] User count returned
- [ ] Sample user displayed
- [ ] Success message appears

---

#### STEP 11: Start Prisma Studio

**Objective:** Launch graphical database inspector for visual verification

**Exact Command:**
```bash
npm run prisma:studio
```

**Expected Output:**
```
Prisma Studio is running on http://localhost:5555
```

**Action Items:**
1. Open browser to http://localhost:5555
2. Verify all tables visible in sidebar
3. Browse records in User, PatientProfile, NurseProfile tables
4. Verify relationships work by clicking on related records

**Verification Checklist:**
- [ ] All 18 tables visible
- [ ] User records displayable
- [ ] PatientProfile records displayable
- [ ] NurseProfile records displayable
- [ ] Relationships functional

**To Stop:** Press Ctrl+C

---

## Validation Tests

### Test Suite 1: Schema Integrity

#### Test 1.1: Verify All Tables Exist
```bash
npx prisma db execute --stdin << 'EOF'
SELECT count(*) as total_tables 
FROM information_schema.tables 
WHERE table_schema = 'public';
EOF
```

**Success Criteria:** Count = 18

---

#### Test 1.2: Verify All Enums Exist
```bash
npx prisma db execute --stdin << 'EOF'
SELECT count(*) as total_enums
FROM pg_type t
WHERE t.typnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public')
  AND t.typtype = 'e';
EOF
```

**Success Criteria:** Count = 11

---

#### Test 1.3: Verify Foreign Keys
```bash
npx prisma db execute --stdin << 'EOF'
SELECT count(*) as total_fk
FROM information_schema.referential_constraints
WHERE constraint_schema = 'public';
EOF
```

**Success Criteria:** Count >= 18

---

### Test Suite 2: Data Integrity

#### Test 2.1: User Referential Integrity
```bash
npx prisma db execute --stdin << 'EOF'
SELECT count(*) as orphaned
FROM "PatientProfile" p
LEFT JOIN "User" u ON p."userId" = u.id
WHERE u.id IS NULL;
EOF
```

**Success Criteria:** Count = 0

---

#### Test 2.2: Constraint Validation
```bash
npx prisma db execute --stdin << 'EOF'
SELECT COUNT(*) as duplicate_emails
FROM "User" u1
WHERE (SELECT COUNT(*) FROM "User" u2 WHERE u2.email = u1.email) > 1;
EOF
```

**Success Criteria:** Count = 0

---

### Test Suite 3: Connection Test

```bash
cat > /tmp/test-connection.js << 'EOFJS'
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.time('Connection test');
  
  const user = await prisma.user.findFirst({
    include: {
      patientProfile: true,
      nurseProfile: true,
    },
  });
  
  console.timeEnd('Connection test');
  console.log('✓ Connected and queried:', user ? user.email : 'no user');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
EOFJS

node /tmp/test-connection.js
```

**Success Criteria:** Completes in <500ms, returns user data

---

## Rollback Plan

### If Migrations Fail

#### Option 1: Reset Database (Complete Reset)
```bash
npx prisma migrate reset --force
```

**Result:** Database reset to clean state with schema and seed data

---

#### Option 2: Resolve Failed Migration
```bash
npx prisma migrate status
npx prisma migrate resolve --rolled-back 0_init
npx prisma migrate deploy
```

---

#### Option 3: Manual Cleanup
```bash
# Clear all data
npx prisma db execute --stdin << 'EOF'
TRUNCATE TABLE "User" CASCADE;
EOF

# Re-apply schema
npx prisma migrate deploy

# Re-seed
npm run prisma:seed
```

---

## Success Criteria

Phase 2 is complete when:

### Database Schema
- [ ] All 18 tables exist (15 models + 3 bridge tables)
- [ ] All 11 enums created:
  - UserRole, UserStatus, Gender, ServiceType, DocumentType
  - DocumentStatus, BookingStatus, PaymentStatus, PaymentMethod, SessionStatus
- [ ] All foreign keys defined (18+ constraints)
- [ ] All indexes created (15+ indexes)
- [ ] Cascade deletes configured

### Migration Status
- [ ] `npx prisma migrate status` shows "All migrations applied"
- [ ] No pending migrations
- [ ] No migration errors in logs

### Sample Data
- [ ] At least 1 admin user
- [ ] At least 1 patient user with profile
- [ ] At least 1 nurse user with profile
- [ ] At least 1 service record
- [ ] All relationships verified
- [ ] No orphaned data

### Prisma Client
- [ ] `npx prisma generate` completes
- [ ] TypeScript types available
- [ ] Client connects to database
- [ ] CRUD operations work
- [ ] Relationships load correctly

### Verification Tools
- [ ] Prisma Studio launches
- [ ] All tables visible
- [ ] Can browse records
- [ ] Relationships functional

### Testing
- [ ] All validation tests pass
- [ ] Database queries <500ms
- [ ] No security issues identified

---

## Troubleshooting Reference

### Common Errors

#### "Connect ECONNREFUSED"
**Solution:** Verify DATABASE_URL, check Supabase is running, verify firewall

#### "role does not exist"
**Solution:** Verify credentials in DATABASE_URL

#### "database does not exist"
**Solution:** Create database in Supabase console

#### "permission denied for schema public"
**Solution:** Grant permissions or contact Supabase support

#### "duplicate key value violates unique constraint"
**Solution:** Clear seed data and re-run: `npx prisma migrate reset --force`

#### "foreign key constraint failed"
**Solution:** Verify seed.ts creates records in correct order

#### "Prisma Studio port 5555 already in use"
**Solution:** Kill process or use different port: `npx prisma studio --port 5556`

---

## Quick Reference Commands

```bash
# Apply migrations
npx prisma migrate deploy

# Seed database
npm run prisma:seed

# Generate Prisma Client
npx prisma generate

# Start Prisma Studio
npm run prisma:studio

# Check migration status
npx prisma migrate status

# Reset database
npx prisma migrate reset --force

# Test connection
node /tmp/test-prisma.js
```

---

**END OF PHASE 2 IMPLEMENTATION PLAN**

