# PHASE 2: Quick Start Guide
## Database & ORM Configuration - 11 Steps in 30 Minutes

**For the impatient developer:** Follow these exact commands in order. No detours.

---

## PRE-FLIGHT CHECKLIST (2 minutes)

```bash
# 1. Are you in the right directory?
pwd
# Expected: /home/cn/projects/competition/web2/paring/web

# 2. Do you have .env with credentials?
cat .env
# Expected: DATABASE_URL and DIRECT_URL present

# 3. Is your database reachable?
node -e "require('@prisma/client').PrismaClient && console.log('✓ Prisma loaded')"
```

If all pass, proceed. Otherwise, read the full plan.

---

## EXECUTION SEQUENCE (28 minutes)

### STEP 1: Check Migration Status (1 min)
```bash
npx prisma migrate status
```
**You'll see:** Pending migrations or "All migrations applied"  
**Do next:** If pending, go to STEP 2. Otherwise, go to STEP 6.

---

### STEP 2: Apply Migration (2 min)
```bash
npx prisma migrate deploy
```
**You'll see:** Tables being created  
**Expected:** "Your database is now in sync"

---

### STEP 3: Verify Tables (1 min)
```bash
npx prisma db execute --stdin << 'EOF'
SELECT count(*) FROM information_schema.tables WHERE table_schema='public';
EOF
```
**Expected:** 18 tables

---

### STEP 4: Verify Enums (1 min)
```bash
npx prisma db execute --stdin << 'EOF'
SELECT count(*) FROM pg_type t 
WHERE t.typtype = 'e' AND t.typnamespace IN (SELECT oid FROM pg_namespace WHERE nspname='public');
EOF
```
**Expected:** 11 enums

---

### STEP 5: Generate Prisma Client (2 min)
```bash
npx prisma generate
```
**Expected:** "Generated Prisma Client" message

---

### STEP 6: Run Seed (3 min)
```bash
npm run prisma:seed
```
**You'll see:** Admin, patient, nurse records created  
**Expected:** "Database seed completed successfully!"

---

### STEP 7: Verify Seed Data (1 min)
```bash
npx prisma db execute --stdin << 'EOF'
SELECT count(*) as users FROM "User";
EOF
```
**Expected:** 2 or more users

---

### STEP 8: Test Prisma Connection (2 min)
```bash
cat > /tmp/quick-test.js << 'TESTEOF'
const { PrismaClient } = require('@prisma/client');
new PrismaClient().user.count().then(c => {
  console.log('✓ Users:', c);
  process.exit(0);
}).catch(e => {
  console.error('✗ Error:', e.message);
  process.exit(1);
});
TESTEOF

node /tmp/quick-test.js
```
**Expected:** "✓ Users: 2"

---

### STEP 9: Open Prisma Studio (5 min)
```bash
npm run prisma:studio
```
**Then:** Open http://localhost:5555 in browser

**Verify:**
- [ ] See 18 tables in sidebar
- [ ] Click "User" - see records
- [ ] Click "PatientProfile" - see records
- [ ] Click "NurseProfile" - see records

**To stop:** Press Ctrl+C

---

### STEP 10: Run Validation Tests (3 min)
```bash
# Test 1: Tables exist
npx prisma db execute --stdin << 'EOF'
SELECT count(*) as tables FROM information_schema.tables WHERE table_schema='public';
EOF
# Expected: 18

# Test 2: Data exists
npx prisma db execute --stdin << 'EOF'
SELECT COUNT(*) FROM "User";
EOF
# Expected: 2+

# Test 3: Relationships work
npx prisma db execute --stdin << 'EOF'
SELECT COUNT(*) FROM "PatientProfile" p 
LEFT JOIN "User" u ON p."userId"=u.id WHERE u.id IS NULL;
EOF
# Expected: 0 (no orphaned records)
```

---

### STEP 11: Commit Your Work (2 min)
```bash
cd /home/cn/projects/competition/web2/paring/web
git add prisma/
git commit -m "Phase 2: Apply database migrations and seed data"
git push
```

---

## SUCCESS = All 11 Steps Complete

### Final Checklist
- [ ] Migration status shows "applied"
- [ ] 18 tables exist
- [ ] 11 enums exist
- [ ] Prisma Client generated
- [ ] Seed script ran successfully
- [ ] 2+ users in database
- [ ] Prisma Studio shows tables and data
- [ ] Connection test passes
- [ ] All validation tests pass
- [ ] Changes committed to git

---

## IF SOMETHING BREAKS

### Database Connection Won't Work
```bash
# Check credentials
echo $DATABASE_URL

# Test directly
psql $DIRECT_URL -c "SELECT NOW();"
```

### Seed Data Duplicate Error
```bash
# Clear everything and start over
npx prisma migrate reset --force
npm run prisma:seed
```

### Prisma Studio Won't Start
```bash
# Try different port
npx prisma studio --port 5556
# Then open http://localhost:5556
```

### Migration Failed Halfway
```bash
npx prisma migrate resolve --rolled-back 0_init
npx prisma migrate deploy
```

---

## NEXT PHASE

Once STEP 11 is complete, you're ready for Phase 3: Authentication Setup

---

**Total Time:** ~30 minutes  
**Success Rate:** 99% if you follow steps exactly  
**Need Help:** See PHASE_2_IMPLEMENTATION_PLAN.md for detailed troubleshooting

