# PARING Platform - Quick Reference Tables

## Static Data Locations Summary

| Data Type | Location | Lines | Count | Key Fields |
|-----------|----------|-------|-------|-----------|
| Services | `/app/page.tsx` | 272-331 | 4 | name, price, duration |
| Nurses | `/app/dashboard/nurses/page.tsx` | 13-64 | 5 | name, rating, location, services |
| Patients | `/app/dashboard/patients/page.tsx` | 9-12 | 2 | name, age, condition |
| Bookings (Active) | `/app/dashboard/bookings/page.tsx` | 12-34 | 2 | invoice, status, nurse, patient |
| Bookings (Completed) | `/app/dashboard/bookings/page.tsx` | 36-59 | 2 | invoice, status, nurse, patient |
| Monitoring Data | `/app/dashboard/monitoring/[sessionId]/page.tsx` | 110-196 | 2 sessions | vitals, timeline, activities |
| Activity Logs | `/app/dashboard/monitoring/[sessionId]/page.tsx` | 206-237 | 4 entries | timestamp, activity, notes |
| Consultations | `/app/dashboard/consultation/page.tsx` | 33-81 | 3 threads | name, message, status |
| Specializations | `/app/register/page.tsx` | 263-275 | 5 | Geriatri, Stroke, Surgery, Wounds, Bedridden |
| Service Types | `/app/register/page.tsx` | 349-367 | 3 | Visit, Live-Out, Live-In |
| AI Suggestions | `/app/dashboard/ai-chat/page.tsx` | 16-21 | 4 | text, icon, suggestions |

## Hardcoded Nurses Data

| Name | Rating | Specialty | Services | Location | Sessions |
|------|--------|-----------|----------|----------|----------|
| Ners Rina Suryani | 4.9 | Spesialis Penyakit Dalam | Visit Care, Live-Out | Solo | 124 |
| Ners Budiawan | 4.8 | Perawatan Geriatri | Live-In Care | Jakarta Selatan | 120+ |
| Ners Siti Aisyah | 5.0 | Perawatan Pasca Stroke | Visit Care, Live-Out | Jakarta Timur | 80+ |
| Siti Aminah | 4.7 | Pendamping Lansia (Non-medis) | Non-medis | Solo | 45+ |
| Bambang Heru | 4.8 | Pendamping & Teman Ngobrol | Non-medis | Sukoharjo | 30+ |

## Services Pricing

| Service | Type | Price | Duration | Best For |
|---------|------|-------|----------|----------|
| Non-medis | Care Support | Rp 50rb-150rb | Per activity | Emotional support, Activity |
| Visit Care | Medical | Rp 150rb | 1-3 Jam | Check-ups, Injections |
| Live-Out Care | Medical+Personal | Rp 200rb | 8-12 Jam | Daily shift work |
| Live-In Care | 24/7 | Rp 3.5jt | Per month | Bedridden, Critical care |

## Database Tables to Create (20 total)

### Core User Tables (3)
- User
- PatientProfile
- NurseProfile

### Supporting Tables (5)
- NurseSpecialization
- NurseServiceType
- NurseDocument
- Service
- NurseReview

### Transaction Tables (5)
- Booking
- Payment
- MonitoringSession
- VitalRecord
- ActivityLog

### Communication Tables (3)
- Consultation
- Message
- EmergencyLog

### System Tables (1)
- SessionReport
- AiRecommendation (optional)

## Authentication Status

| Component | Status | Issue |
|-----------|--------|-------|
| Login Form | Exists | No backend validation |
| Register Form | Exists (5-step Nurse) | No backend processing |
| Password Hashing | None | Needed: Bcrypt |
| Role Storage | localStorage | Needed: JWT or Session |
| Protected Routes | None | All pages accessible |
| Email Verification | None | Needs implementation |

## Booking Workflow States

```
User Selection → Booking Create → Payment Waiting
                      ↓
                      └→ Paid → Confirmed → Active Session
                      
Active Session → Monitoring → Report → Completed
```

## Page Count by Feature

- Landing/Public: 3 pages (Landing, Login, Register)
- Patient Dashboard: 11 pages
- Nurse Dashboard: 1 page (referenced but not shown)
- Admin: 0 pages

**Total Pages: 15 core pages**

## File Statistics

| Category | Count | Total Lines |
|----------|-------|------------|
| App Pages | 18 | ~3,500 |
| Components | 16 | ~1,435 |
| UI Library | Multiple | ~1,000+ |
| Config Files | 5 | ~200 |

## API Endpoints Needed (25+)

### Nurses
- GET /api/nurses
- GET /api/nurses/:id
- POST /api/nurses
- PUT /api/nurses/:id
- GET /api/nurses/:id/availability

### Bookings
- GET /api/bookings
- GET /api/bookings/:id
- POST /api/bookings
- PUT /api/bookings/:id
- DELETE /api/bookings/:id

### Patients
- GET /api/patients
- GET /api/patients/:id
- POST /api/patients
- PUT /api/patients/:id

### Sessions
- GET /api/sessions
- GET /api/sessions/:id
- POST /api/sessions/:id/vitals
- POST /api/sessions/:id/activities

### Payments
- POST /api/payments
- GET /api/payments/:id
- POST /api/payments/:id/verify

### Auth
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout
- POST /api/auth/refresh

### Consultations
- GET /api/consultations
- POST /api/consultations/:id/messages
- GET /api/consultations/:id/messages

## Critical Implementation Order

1. **Week 1:** Database + Schema + Seed Data
2. **Week 2:** User Auth (Register/Login/Password)
3. **Week 3:** Core CRUD APIs (Nurses, Patients, Bookings)
4. **Week 4:** Monitoring & Sessions APIs
5. **Week 5:** Payment Integration (Midtrans)
6. **Week 6:** Real-time Features (WebSocket)

## Data Validation Requirements

### User
- Email: valid format, unique
- Phone: Indonesian format (08xx), unique
- Password: min 8 chars, hash with bcrypt

### Patient
- Age: 1-120
- Weight/Height: positive numbers
- Phone: Indonesian format

### Nurse
- Years: positive integer
- Rating: 0-5
- Services: at least one selected
- Specializations: at least one

### Booking
- Date: future date
- Time: valid format HH:mm
- Patient & Nurse: must exist
- Price: positive number

## Dependencies Needed

```json
{
  "@prisma/client": "^5.x",
  "prisma": "^5.x",
  "bcryptjs": "^2.4.3",
  "jsonwebtoken": "^9.x",
  "next-auth": "^4.x or ^5.x",
  "zod": "^3.x",
  "socket.io": "^4.x",
  "nodemailer": "^6.x"
}
```

## High-Risk Areas

1. **No Authentication** - Anyone can access any page
2. **No Data Persistence** - Data lost on page refresh
3. **No Input Validation** - XSS/Injection vulnerabilities
4. **No Error Handling** - Crashes on invalid data
5. **No Rate Limiting** - API abuse possible
6. **Hardcoded Prices** - No dynamic pricing

## Success Metrics

- [ ] All static data migrated to database
- [ ] Authentication working with JWT
- [ ] All CRUD operations functional
- [ ] Payment integration live
- [ ] Real-time monitoring active
- [ ] 90%+ test coverage
- [ ] Sub-200ms API response time

