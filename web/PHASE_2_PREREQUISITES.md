# PHASE 2: Prerequisites & Dependency Verification
## Pre-Implementation Checklist

**Version:** 1.0  
**Last Updated:** April 5, 2026  
**Status:** Use before starting Phase 2 implementation  

---

## Quick Verification (5 minutes)

Run this command to verify you're ready to proceed:

```bash
#!/bin/bash

echo "=== PHASE 2 PREREQUISITES CHECK ==="
echo

# 1. Check Node.js
NODE_VERSION=$(node -v)
echo "✓ Node.js: $NODE_VERSION"
[[ "$NODE_VERSION" < "v18" ]] && echo "  WARNING: Need 18.x or higher"

# 2. Check npm
NPM_VERSION=$(npm -v)
echo "✓ npm: $NPM_VERSION"

# 3. Check directory
PWD=$(pwd)
echo "✓ Directory: $PWD"
[[ "$PWD" != *"/paring/web" ]] && echo "  WARNING: Not in paring/web directory"

# 4. Check .env exists
if [ -f .env ]; then
  echo "✓ .env file: EXISTS"
else
  echo "✗ .env file: MISSING"
fi

# 5. Check Prisma
if npm list prisma > /dev/null 2>&1; then
  PRISMA_VERSION=$(npm list prisma | grep prisma@ | head -1)
  echo "✓ Prisma: Installed"
else
  echo "✗ Prisma: NOT INSTALLED"
fi

# 6. Check schema
if [ -f prisma/schema.prisma ]; then
  MODELS=$(grep "^model " prisma/schema.prisma | wc -l)
  echo "✓ Schema: EXISTS ($MODELS models)"
else
  echo "✗ Schema: MISSING"
fi

# 7. Check migration
if [ -f prisma/migrations/0_init/migration.sql ]; then
  echo "✓ Migration: EXISTS"
else
  echo "✗ Migration: MISSING"
fi

# 8. Check seed
if [ -f prisma/seed.ts ]; then
  echo "✓ Seed script: EXISTS"
else
  echo "✗ Seed script: MISSING"
fi

echo
echo "=== PREREQUISITE CHECK COMPLETE ==="
```

Save and run this script:
```bash
chmod +x /tmp/check-prerequisites.sh
/tmp/check-prerequisites.sh
```

---

## Detailed Prerequisites Checklist

### 1. Runtime Environment

#### Node.js Installation
**Requirement:** v18.x or higher (v20.x recommended)

**Verify:**
```bash
node --version
```

**Expected:** v18.20.0 (or higher)

**If Missing:**
```bash
# macOS with Homebrew
brew install node

# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Windows
# Visit: https://nodejs.org/
```

**Verify Installation:**
```bash
node -e "console.log('✓ Node.js works')"
```

---

#### npm Installation
**Requirement:** 9.x or higher (automatically installed with Node.js 18+)

**Verify:**
```bash
npm --version
```

**Expected:** 9.0.0 or higher

**If Version is Old:**
```bash
npm install -g npm@latest
npm --version  # Verify upgrade
```

---

### 2. Project Setup

#### Working Directory
**Requirement:** Must be in `/home/cn/projects/competition/web2/paring/web`

**Verify:**
```bash
pwd
```

**Expected Output:**
```
/home/cn/projects/competition/web2/paring/web
```

**If Wrong Directory:**
```bash
cd /home/cn/projects/competition/web2/paring/web
```

---

#### Git Repository
**Requirement:** Project must be a git repository

**Verify:**
```bash
git status
```

**Expected:** Shows branch and commit information

**If Not a Git Repo:**
```bash
# This should already be set up, but if needed:
git init
git remote add origin <repo-url>
```

---

#### Node Modules
**Requirement:** Dependencies must be installed

**Verify:**
```bash
ls node_modules/@prisma/client > /dev/null && echo "✓ node_modules exists"
```

**If Missing:**
```bash
npm install
# This will take 2-3 minutes
```

**Verify Installation:**
```bash
npm list prisma
# Should show: @prisma/client and prisma with version numbers
```

---

### 3. Database Configuration

#### Environment File
**Requirement:** `.env` file with database credentials

**Verify:**
```bash
[ -f .env ] && echo "✓ .env exists" || echo "✗ .env missing"
```

**File Location:** `/home/cn/projects/competition/web2/paring/web/.env`

**If Missing, Create:**
```bash
cat > .env << 'EOF'
# Supabase Database Connection (with pooling for application)
DATABASE_URL="postgresql://postgres.YOUR_PROJECT:YOUR_PASSWORD@aws-1-ap-northeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct database connection (for migrations only)
DIRECT_URL="postgresql://postgres.YOUR_PROJECT:YOUR_PASSWORD@aws-1-ap-northeast-2.pooler.supabase.com:5432/postgres"
EOF
```

**Note:** Replace YOUR_PROJECT and YOUR_PASSWORD with actual Supabase credentials

---

#### Database URL Format
**Requirement:** Proper PostgreSQL connection string

**Expected Format:**
```
postgresql://username:password@host:port/database?options
```

**Verify Content:**
```bash
grep DATABASE_URL .env
grep DIRECT_URL .env
```

**Both should output complete connection strings** (may be long lines)

**If URLs are Missing or Incorrect:**
1. Log in to Supabase Dashboard: https://supabase.com/dashboard
2. Select your project
3. Go to Settings > Database
4. Copy connection string
5. Update .env file

---

#### Environment Variables Loaded
**Requirement:** Environment variables must be loaded before running commands

**Verify:**
```bash
echo "DATABASE_URL: $DATABASE_URL"
echo "DIRECT_URL: $DIRECT_URL"
```

**Expected:** Both should output full connection strings

**If Empty:**
```bash
# Reload environment
source .env

# Verify again
echo $DATABASE_URL
```

---

### 4. Prisma Configuration

#### Prisma Schema File
**Requirement:** Schema file exists with all models

**Verify:**
```bash
ls -la prisma/schema.prisma
```

**Check Model Count:**
```bash
grep "^model " prisma/schema.prisma | wc -l
```

**Expected:** 15 models (User, PatientProfile, NurseProfile, Service, etc.)

**List All Models:**
```bash
grep "^model " prisma/schema.prisma
```

**Expected Output:**
```
model User
model PatientProfile
model NurseProfile
model NurseSpecialization
model NurseServiceType
model NurseDocument
model Service
model Booking
model Payment
model MonitoringSession
model VitalRecord
model ActivityLog
model SessionReport
model Consultation
model Message
model AiRecommendation
model NurseReview
model EmergencyLog
```

---

#### Prisma Client
**Requirement:** Prisma Client package installed

**Verify:**
```bash
npm list @prisma/client
```

**Expected:** Shows `@prisma/client@5.21.1` or similar

**If Missing:**
```bash
npm install @prisma/client@5.21.1
```

---

#### Prisma CLI
**Requirement:** Prisma CLI available

**Verify:**
```bash
npx prisma --version
```

**Expected:** Shows version 5.21.1 or higher

**If Missing:**
```bash
npm install --save-dev prisma@5.21.1
```

---

### 5. Migration Files

#### Migration Lock File
**Requirement:** Must exist and specify PostgreSQL

**Verify:**
```bash
cat prisma/migrations/migration_lock.toml
```

**Expected Output:**
```
# Please do not edit this file manually
# It should be added in your version-control system (i.e. Git)
provider = "postgresql"
```

**If Missing or Wrong:**
```bash
cat > prisma/migrations/migration_lock.toml << 'EOF'
# Please do not edit this file manually
# It should be added in your version-control system (i.e. Git)
provider = "postgresql"
EOF
```

---

#### Initial Migration File
**Requirement:** 0_init migration exists

**Verify:**
```bash
ls -la prisma/migrations/0_init/migration.sql
```

**Check Content:**
```bash
head -20 prisma/migrations/0_init/migration.sql
```

**Expected:** Should show CREATE TYPE and CREATE TABLE statements

**If Missing:**
```bash
# This is generated from schema.prisma
# Regenerate it:
npx prisma migrate dev --name init
```

---

### 6. Seed Script

#### Seed File Exists
**Requirement:** Seed script must exist and be valid TypeScript

**Verify:**
```bash
ls -la prisma/seed.ts
```

**Check Content:**
```bash
head -10 prisma/seed.ts
```

**Expected:** Should have `import { PrismaClient } from "@prisma/client"`

---

#### Seed Dependencies
**Requirement:** ts-node installed for running seed

**Verify:**
```bash
npm list ts-node
```

**If Missing:**
```bash
npm install --save-dev ts-node @types/node
```

---

#### Package.json Seed Script
**Requirement:** npm script defined for seeding

**Verify:**
```bash
grep "prisma:seed" package.json
```

**Expected:** Should show `"prisma:seed": "ts-node prisma/seed.ts"`

**If Missing:**
```bash
# Add to package.json scripts section:
"prisma:seed": "ts-node prisma/seed.ts"
```

---

### 7. Database Connection Test

#### Network Connectivity
**Requirement:** Can reach Supabase database host

**Verify:**
```bash
# Try to connect with psql (if installed)
psql $DIRECT_URL -c "SELECT NOW();"

# Or use Node.js test:
node << 'EOF'
const { PrismaClient } = require('@prisma/client');
new PrismaClient().$queryRaw`SELECT NOW()`.then(
  r => { console.log('✓ Database reachable:', r[0].now); process.exit(0); }
).catch(
  e => { console.error('✗ Database unreachable:', e.message); process.exit(1); }
);
EOF
```

**Expected:** Should return current timestamp

**If Connection Fails:**
1. Check DATABASE_URL in .env is correct
2. Verify Supabase database is running
3. Check if your IP is whitelisted in Supabase firewall
4. Check network connectivity: `ping` the host

---

#### Database User Permissions
**Requirement:** Database user can create tables

**Verify:**
```bash
npx prisma db execute --stdin << 'EOF'
SELECT database_name FROM pg_database LIMIT 1;
EOF
```

**Expected:** Should return database name

**If Permission Denied:**
1. Check user in DATABASE_URL has creation privileges
2. Contact Supabase: may need to grant permissions
3. Or use superuser credentials for migration

---

### 8. TypeScript Configuration

#### tsconfig.json
**Requirement:** TypeScript config file exists

**Verify:**
```bash
ls -la tsconfig.json
```

**Check Prisma Types:**
```bash
grep -i prisma tsconfig.json || echo "Prisma types auto-included"
```

**If tsconfig.json is Missing:**
```bash
npx tsc --init
```

---

#### Type Definitions
**Requirement:** TypeScript types are available for Node.js

**Verify:**
```bash
npm list @types/node
```

**If Missing:**
```bash
npm install --save-dev @types/node
```

---

### 9. System Requirements

#### Disk Space
**Requirement:** At least 2GB free disk space

**Verify:**
```bash
# macOS/Linux
df -h

# Look for available space on your filesystem
# Should show 2GB+ available in "/" or relevant mount
```

---

#### RAM
**Requirement:** At least 512MB available RAM

**Verify:**
```bash
# macOS
vm_stat

# Linux
free -h

# Windows
wmic OS get TotalVisibleMemorySize,FreePhysicalMemory
```

---

### 10. Documentation

#### Implementation Plan
**Requirement:** Full implementation plan available

**Verify:**
```bash
ls -la PHASE_2_IMPLEMENTATION_PLAN.md
```

**If Missing:**
```bash
# You should have downloaded it, but if not:
# See project documentation folder
```

---

#### Quick Start Guide
**Requirement:** Quick start guide available

**Verify:**
```bash
ls -la PHASE_2_QUICK_START.md
```

---

## Prerequisites Verification Checklist

### Critical (Must Have)
- [ ] Node.js 18.x or higher installed
- [ ] npm 9.x or higher installed
- [ ] Working directory is `/home/cn/projects/competition/web2/paring/web`
- [ ] `.env` file exists with DATABASE_URL and DIRECT_URL
- [ ] Prisma 5.21.1 installed
- [ ] Prisma schema exists with 15 models
- [ ] Migration files exist in `prisma/migrations/0_init/`
- [ ] Seed script exists at `prisma/seed.ts`
- [ ] Can connect to Supabase database
- [ ] Database user has create permissions

### Important (Should Have)
- [ ] ts-node installed for seed script
- [ ] npm script `prisma:seed` defined in package.json
- [ ] Migration lock file configured
- [ ] TypeScript configuration exists
- [ ] node_modules directory is installed

### Documentation (Reference)
- [ ] PHASE_2_IMPLEMENTATION_PLAN.md available
- [ ] PHASE_2_QUICK_START.md available
- [ ] PHASE_2_EXECUTIVE_SUMMARY.md available
- [ ] PHASE_2_PREREQUISITES.md available (this file)

---

## Installation Commands Quick Reference

### Install All Dependencies
```bash
npm install
```

### Install Prisma Only
```bash
npm install @prisma/client prisma ts-node
```

### Install Type Definitions
```bash
npm install --save-dev @types/node
```

### Update Node.js
```bash
# Using nvm (recommended)
nvm install 18
nvm use 18

# Or visit nodejs.org and download directly
```

---

## Troubleshooting Prerequisites

### "Node.js not found"
```bash
# Install Node.js from https://nodejs.org/
# Verify: node --version
```

### "npm not found"
```bash
# npm comes with Node.js
# Reinstall Node.js
# Verify: npm --version
```

### "Prisma not installed"
```bash
npm install @prisma/client prisma
```

### ".env file not found"
```bash
# Ask team lead for .env file
# Or create with credentials:
# Contact Supabase dashboard for connection strings
```

### "Cannot connect to database"
```bash
# Verify DATABASE_URL is correct
echo $DATABASE_URL

# Test with psql if available
psql $DIRECT_URL -c "SELECT NOW();"

# Check firewall/IP whitelist in Supabase
```

### "Permission denied on database"
```bash
# Check database user permissions
# Contact Supabase: database user may need CREATEDB privilege

# Or use superuser credentials in DATABASE_URL
```

---

## Approval Sign-Off

**Before starting Phase 2 implementation:**

- [ ] All critical prerequisites verified
- [ ] Team confirmed they can run Phase 2 commands
- [ ] Database connection tested successfully
- [ ] .env credentials are secure and available
- [ ] Documentation is accessible

**Signed by:** _______________  
**Date:** _______________

---

## Next Steps

Once all prerequisites are verified:

1. Read PHASE_2_QUICK_START.md (5 minutes)
2. Follow the 11-step quick start (30 minutes)
3. Run validation tests (5 minutes)
4. Report completion

---

**Total Prerequisite Check Time:** 10-15 minutes  
**If all pass:** Ready for Phase 2 implementation!

