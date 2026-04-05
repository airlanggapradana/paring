# IMPLEMENTATION QUICK START GUIDE

## Overview
This quick start guide provides the essential steps to begin Phase 1 of the PARING transformation. For complete details, see `IMPLEMENTATION_PLAN.md`.

## Prerequisites Checklist

Before starting, ensure you have:

- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm 9+ installed (`npm --version`)
- [ ] Git installed and configured
- [ ] GitHub account with repo access
- [ ] Supabase account created (free tier at https://supabase.com)
- [ ] Vercel account created (free tier at https://vercel.com)
- [ ] Midtrans account (sandbox for testing)
- [ ] Text editor (VS Code recommended)

## Step 1: Local Setup (Day 1)

### 1.1 Clone Repository
```bash
cd /home/cn/projects/competition/web2/paring/web
git status
```

### 1.2 Install Dependencies
```bash
npm install
npm install -D prisma @types/bcryptjs
npm install bcryptjs next-auth zod @supabase/supabase-js
```

### 1.3 Verify Installation
```bash
npm run build
npm run dev # Should start on localhost:3000
```

## Step 2: Create Supabase Project (Day 1)

### 2.1 Create Project
1. Go to https://supabase.com and sign up
2. Click "New Project"
3. Choose name: "paring-dev"
4. Set password and region (closest to you)
5. Wait for project to initialize (~2 minutes)

### 2.2 Get Connection Details
1. Go to Project Settings > Database
2. Copy the "Connection string" (PostgreSQL)
3. Look like: `postgresql://postgres:[PASSWORD]@db.supabase.co:5432/postgres`

### 2.3 Create .env.local File
```bash
# In project root directory
cat > .env.local << 'ENVEOF'
# Database
DATABASE_URL="postgresql://postgres:[YOUR_PASSWORD]@db.supabase.co:5432/postgres"

# NextAuth
NEXTAUTH_SECRET="$(openssl rand -base64 32)"
NEXTAUTH_URL="http://localhost:3000"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://[project-id].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="[copy from Supabase Settings > API]"
SUPABASE_SERVICE_KEY="[copy from Supabase Settings > API > Service Role]"

# Midtrans (use sandbox credentials)
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY="[from Midtrans sandbox account]"
MIDTRANS_SERVER_KEY="[from Midtrans sandbox account]"
MIDTRANS_MERCHANT_ID="[your merchant ID]"
ENVEOF
```

**How to get Supabase keys:**
1. Go to Project Settings > API
2. Copy "Project URL" → NEXT_PUBLIC_SUPABASE_URL
3. Copy "Anon public" key → NEXT_PUBLIC_SUPABASE_ANON_KEY
4. Copy "Service role secret" → SUPABASE_SERVICE_KEY

## Step 3: Database Setup (Days 2-3)

### 3.1 Initialize Prisma
```bash
# Prisma is already configured, just generate client
npx prisma generate
```

### 3.2 Create Initial Migration
```bash
# This pushes the schema to your database
npx prisma migrate dev --name init
```

You should see:
```
✓ Successfully created 15 tables in your database
```

### 3.3 Verify Database
```bash
# Open Prisma Studio to view database
npx prisma studio
# Browser opens at http://localhost:5555
# Verify all 15 models exist with no data
```

### 3.4 Seed Data
```bash
# Create seed file first (copy from IMPLEMENTATION_PLAN.md)
# File: prisma/seed.ts

# Run seed
npm run db:seed

# You should see:
# ✓ Services created
# ✓ Admin user created
# ✓ Nurse users and profiles created
# ✓ Patient users and profiles created
# ✓ Sample booking created
# ✅ Database seeding completed successfully!
```

## Step 4: Authentication Setup (Days 3-4)

### 4.1 Create Auth Config
Create `lib/auth.ts` - copy from IMPLEMENTATION_PLAN.md Phase 3 section

### 4.2 Create Auth Route
Create `app/api/auth/[...nextauth]/route.ts` - copy from IMPLEMENTATION_PLAN.md

### 4.3 Create Register Endpoint
Create `app/api/auth/register/route.ts` - copy from IMPLEMENTATION_PLAN.md

### 4.4 Test Authentication
```bash
# Start dev server
npm run dev

# 1. Go to http://localhost:3000/login
# 2. Try admin user:
#    Email: admin@paring.com
#    Password: admin123
# 3. Should redirect to /dashboard
```

## Testing Key Functionalities

### Test 1: Database Connection
```bash
# Open Prisma Studio
npx prisma studio

# Verify 5 nurses visible:
# - Ners Rina Suryani (rating 4.9)
# - Ners Budiawan (rating 4.8)
# - Ners Siti Aisyah (rating 5.0)
# - Siti Aminah (rating 4.7)
# - Bambang Heru (rating 4.8)
```

### Test 2: Login Works
```bash
# Start dev server
npm run dev

# Test each user type:
1. Patient: budi@example.com / budi123
   - Should redirect to /dashboard
   
2. Nurse: rina@paring.com / rina123
   - Should redirect to /nurse/dashboard
   
3. Admin: admin@paring.com / admin123
   - Should redirect to /dashboard
```

### Test 3: Registration Works
```bash
# Go to http://localhost:3000/register
# Fill form:
- Email: newuser@example.com
- Password: Test123456
- Name: New User
- Phone: 081234567999
- Role: PATIENT

# Should see success message
# Verify in Prisma Studio new user created
```

## Troubleshooting

### Issue: "Error connecting to database"
**Solution:**
1. Check DATABASE_URL in .env.local
2. Verify Supabase project is active
3. Check password doesn't contain special characters (escape them)
4. Test connection: `npx prisma db execute --stdin` then type `SELECT 1`

### Issue: "NextAuth secret not found"
**Solution:**
1. Regenerate secret: `openssl rand -base64 32`
2. Update NEXTAUTH_SECRET in .env.local
3. Restart dev server: `npm run dev`

### Issue: "Prisma client not generated"
**Solution:**
```bash
npx prisma generate
npm run build
```

### Issue: Seed script fails
**Solution:**
```bash
# Check seed.ts syntax
npx prisma db seed

# If still fails, reset database
npx prisma migrate reset --force
npm run db:seed
```

## Next Steps After Phase 1

Once Phase 1 is complete:

1. **Phase 2**: Database & ORM Configuration (Days 4-8)
   - Verify all migrations applied
   - Seed production-like data
   - Optimize queries

2. **Phase 3**: Authentication System (Days 9-12)
   - Session management
   - Protected routes
   - Role-based access

3. **Phase 4**: API Routes & Frontend (Days 13-22)
   - Create API endpoints
   - Update components to use real data
   - Payment integration

4. **Phase 5**: Testing & Deployment (Days 23-27)
   - Write tests
   - Deploy to staging
   - Deploy to production

## Useful Commands

```bash
# Development
npm run dev                    # Start dev server
npm run build                  # Build for production
npm run lint                   # Run linter

# Database
npm run db:push               # Push schema changes
npm run db:migrate            # Create migration
npm run db:seed               # Run seed script
npm run db:studio             # Open Prisma Studio
npm run db:reset              # Reset database (dev only!)

# TypeScript
npm run type-check            # Check for TS errors

# Testing
npm test                      # Run tests
```

## Success Criteria for Phase 1

After Phase 1, verify:

- [ ] All dependencies installed (`npm list | grep prisma`)
- [ ] Database connected (`npx prisma db execute`)
- [ ] Prisma client generated (`ls node_modules/.prisma`)
- [ ] Schema created in database (Prisma Studio shows 15 models)
- [ ] Seed data loaded (5 nurses, 2 patients visible)
- [ ] Auth config created (lib/auth.ts exists)
- [ ] Registration endpoint works (/api/auth/register)
- [ ] Login works (can login with seeded users)
- [ ] Build succeeds (`npm run build`)
- [ ] Dev server runs (`npm run dev`)

## Documentation Links

- [Prisma Documentation](https://www.prisma.io/docs/)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Zod Validation](https://zod.dev/)

## Getting Help

If you encounter issues:

1. Check the troubleshooting section above
2. Review the full `IMPLEMENTATION_PLAN.md`
3. Check error logs in browser console (F12)
4. Check terminal output for error messages
5. Verify all .env.local values are correct

## Timeline

- **Phase 1** (Days 1-3): Project Setup & Dependencies ✅ YOU ARE HERE
- **Phase 2** (Days 4-8): Database & ORM Configuration
- **Phase 3** (Days 9-12): Authentication System
- **Phase 4** (Days 13-22): API Routes & Frontend Integration
- **Phase 5** (Days 23-27): Testing & Deployment

---

**Ready to start? Begin with Step 1 above!** 🚀
