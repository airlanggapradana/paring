# PARING Homecare Platform - 5-Phase Implementation Plan
## Transforming Static Data to Dynamic Database (Supabase + Prisma)

**Document Version:** 1.0  
**Last Updated:** April 5, 2026  
**Status:** Ready for Implementation  

---

## Executive Summary

### Transformation Overview
This document outlines a comprehensive 5-phase implementation plan to transform the PARING Homecare Platform from a **static, hardcoded data application** into a **fully dynamic platform** powered by **Supabase (PostgreSQL)** and **Prisma ORM**.

#### Current State
- All data is hardcoded in React components (nurses, services, bookings, patients)
- No authentication system beyond localStorage role storage
- No persistent data storage
- Mock payment system (Midtrans integration incomplete)
- Frontend-only validation and business logic

#### Target State
- PostgreSQL database on Supabase with complete relational schema
- Prisma ORM for type-safe database operations
- NextAuth.js v5 for session-based authentication
- API routes for all CRUD operations
- Real-time monitoring and emergency alert system
- Complete payment integration with Midtrans
- Role-based access control (Patient, Nurse, Admin)

### Technology Stack

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Database** | PostgreSQL (Supabase) | Latest | Data persistence & real-time queries |
| **ORM** | Prisma | ^5.0.0 | Type-safe database queries |
| **Authentication** | NextAuth.js | ^5.0.0 | Session & credential management |
| **Frontend Framework** | Next.js | 16.2.1 | Server/Client components |
| **Backend** | Next.js API Routes | 16.2.1 | RESTful endpoints |
| **UI Library** | React | 19.2.4 | Component rendering |
| **Styling** | Tailwind CSS | ^4 | Utility-first styling |
| **Payment** | Midtrans SDK | Latest | Payment processing |
| **Real-time Updates** | Supabase Realtime | Built-in | Live monitoring |
| **File Storage** | Supabase Storage | Built-in | Document/image uploads |
| **Validation** | Zod | ^3.0.0 | Schema validation |
| **Email** | Resend/SendGrid | Latest | Transactional emails |

### Expected Timeline Per Phase

| Phase | Duration | Key Deliverable |
|-------|----------|-----------------|
| **Phase 1** | 3-4 days | Project setup, dependencies, folder structure |
| **Phase 2** | 4-5 days | Database creation, migrations, initial seed |
| **Phase 3** | 3-4 days | Authentication system complete |
| **Phase 4** | 7-10 days | API routes + component updates |
| **Phase 5** | 4-5 days | Testing, optimization, deployment |
| **Total** | ~25 days | Production-ready platform |

---

## Current State Analysis

### All Static Data Sources with File Paths

#### 1. **Nurses & Services Data**
**File:** `/home/cn/projects/competition/web2/paring/web/app/dashboard/nurses/page.tsx` (lines 13-64)
```
5 hardcoded nurses:
- Ners Rina Suryani (ID: 1) - Rating 4.9, Spesialis Penyakit Dalam
- Ners Budiawan (ID: 2) - Rating 4.8, Perawatan Geriatri
- Ners Siti Aisyah (ID: 3) - Rating 5.0, Perawatan Pasca Stroke
- Siti Aminah (ID: 4) - Rating 4.7, Pendamping Lansia
- Bambang Heru (ID: 5) - Rating 4.8, Pendamping & Teman Ngobrol

Services: Visit Care, Live-Out Care, Live-In Care, Non-medis
Pricing: 150k-3.5M IDR per session/month
```

#### 2. **Patient Data**
**File:** `/home/cn/projects/competition/web2/paring/web/app/dashboard/patients/page.tsx`
```
Hardcoded patient list structure:
- Patient names
- Health conditions
- Emergency contacts
```

#### 3. **Bookings & Sessions**
**File:** `/home/cn/projects/competition/web2/paring/web/app/dashboard/bookings/page.tsx`
```
Booking statuses: Menunggu Bayaran, Dikonfirmasi, Selesai, Dibatalkan
Multiple tab-based filtering:
- All bookings
- By status
- By service type
```

#### 4. **Nurse Dashboard Data**
**File:** `/home/cn/projects/competition/web2/paring/web/app/nurse/dashboard/page.tsx` (lines 9-32)
```
- Upcoming visits (2 hardcoded)
- Stats: 124 sessions, 4.9 rating, 4.2M earnings
```

#### 5. **Services Catalog**
**File:** `/home/cn/projects/competition/web2/paring/web/app/page.tsx` (lines 272-333)
```
4 Service Categories:
- Non-medis: Rp 50rb-150rb
- Visit Care: Rp 150rb/kunjungan
- Live-Out Care: Rp 200rb/shift
- Live-In Care: Rp 3.5jt/bulan
```

#### 6. **Landing Page Features**
**File:** `/home/cn/projects/competition/web2/paring/web/app/page.tsx` (lines 67-72, 214-245, 353-373, 393-421)
```
- Navigation items (hardcoded)
- Value propositions (3 features)
- How it works (4 steps)
- Testimonials (3 static)
- FAQ (4 items)
```

#### 7. **Nurse Availability Slots**
**File:** `/home/cn/projects/competition/web2/paring/web/app/nurse/availability/page.tsx`
```
Weekly availability schedule (hardcoded slots)
```

#### 8. **Earnings/Transactions**
**File:** `/home/cn/projects/competition/web2/paring/web/app/nurse/earnings/page.tsx`
```
Transaction history (hardcoded)
Earnings summary
```

### Current Page Structure & Components

#### Patient Flow (30+ pages)
```
/app
├── page.tsx (Landing)
├── login/page.tsx
├── register/page.tsx
├── nurse-register/page.tsx
├── mobile-only/page.tsx
└── /dashboard (Patient)
    ├── page.tsx (Dashboard Home)
    ├── /patients
    │   ├── page.tsx
    │   ├── [id]/page.tsx
    │   ├── [id]/analytics/page.tsx
    │   └── new/page.tsx
    ├── /nurses
    │   ├── page.tsx
    │   └── [id]/page.tsx
    ├── /bookings
    │   ├── page.tsx
    │   ├── new/page.tsx
    │   └── [id]/page.tsx
    ├── /sessions
    │   └── [sessionId]/report/page.tsx
    ├── /monitoring
    │   └── [sessionId]/page.tsx
    ├── /consultation
    │   └── [id]/page.tsx
    ├── /payment
    │   ├── [bookingId]/page.tsx
    │   └── success/page.tsx
    └── /ai-chat/page.tsx
```

#### Nurse Flow
```
/app/nurse
├── layout.tsx
├── dashboard/page.tsx
├── /appointments
│   └── [id]/page.tsx
├── /profile/page.tsx
├── /availability/page.tsx
├── /earnings/page.tsx
├── /inbox/page.tsx
└── /session
    └── [id]
        ├── checklist/page.tsx
        └── non-medical/page.tsx
```

#### UI Components
```
/components/ui
├── Button.tsx
├── Input.tsx
├── Textarea.tsx
├── Modal.tsx
├── Sheet.tsx
├── Dropdown.tsx
├── Radio.tsx
├── Toggle.tsx
├── Checkbox.tsx
├── DataTable.tsx
├── Navbar.tsx
└── Drawer.tsx

/components
├── HomeScreen.tsx
├── AppointmentScreen.tsx
├── VisitScreen.tsx
├── UIKitScreen.tsx
└── MobileCheck.tsx
```

### Authentication System (Current)
- **Status:** Non-existent (client-side only)
- **Current Implementation:** 
  - localStorage for role storage (`userRole: 'PATIENT' | 'NURSE'`)
  - No actual login validation
  - No session management
  - No password hashing
- **Pages Affected:**
  - `/login/page.tsx` - Mock login form
  - `/register/page.tsx` - Mock registration with role selection
  - `/nurse-register/page.tsx` - Multi-step nurse registration

---

## Database Schema Design

### Prisma Schema Overview

Complete schema with all models, relationships, and constraints:

```prisma
// This is your Prisma schema file for PARING Homecare Platform
// Database: PostgreSQL (Supabase)
// ORM: Prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ===== USERS & AUTHENTICATION =====

model User {
  id                String    @id @default(cuid())
  email             String    @unique
  password          String    // Will be hashed with bcrypt
  name              String
  phone             String    @unique
  role              UserRole
  status            UserStatus @default(ACTIVE)
  
  // Relations
  patientProfile    PatientProfile?
  nurseProfile      NurseProfile?
  consultations     Consultation[] @relation("UserConsultations")
  receivedMessages  Consultation[] @relation("ConsultationRecipient")
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  @@index([email])
  @@index([role])
}

enum UserRole {
  PATIENT
  NURSE
  ADMIN
}

enum UserStatus {
  ACTIVE
  INACTIVE
  SUSPENDED
  PENDING_VERIFICATION
}

// ===== PATIENT PROFILE =====

model PatientProfile {
  id                String    @id @default(cuid())
  userId            String    @unique
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  // Basic Info
  fullName          String
  age               Int
  gender            Gender
  weight            Float?
  height            Float?
  address           String
  
  // Medical History
  bloodPressureNormal String?
  bloodSugarAverage   Float?
  hasDiabetes       Boolean   @default(false)
  isBedridden       Boolean   @default(false)
  drugAllergies     String?
  notes             String?
  
  // AI Consent
  aiConsentGiven    Boolean   @default(false)
  
  // Emergency Contact
  emergencyName     String
  emergencyPhone    String
  
  // Relations
  bookings          Booking[]
  sessions          MonitoringSession[]
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
}

enum Gender {
  MALE
  FEMALE
}

// ===== NURSE PROFILE =====

model NurseProfile {
  id                String    @id @default(cuid())
  userId            String    @unique
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  yearsExperience   Int
  biography         String    @db.Text
  
  specializations   NurseSpecialization[]
  serviceTypes      NurseServiceType[]
  
  availability      String
  serviceArea       String
  
  strNumber         String?   @unique
  strExpiry         DateTime?
  strVerified       Boolean   @default(false)
  documents         NurseDocument[]
  
  rating            Float     @default(0.0)
  totalReviews      Int       @default(0)
  completedSessions Int       @default(0)
  
  visitCarePricing  Float     @default(150000)
  liveOutPricing    Float     @default(250000)
  liveInPricing     Float     @default(3500000)
  
  bookings          Booking[]
  sessions          MonitoringSession[]
  consultations     Consultation[]
  reviews           NurseReview[]
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  @@index([serviceArea])
  @@index([rating])
}

model NurseSpecialization {
  id                String    @id @default(cuid())
  nurseId           String
  nurse             NurseProfile @relation(fields: [nurseId], references: [id], onDelete: Cascade)
  specialization    String
  
  @@unique([nurseId, specialization])
}

model NurseServiceType {
  id                String    @id @default(cuid())
  nurseId           String
  nurse             NurseProfile @relation(fields: [nurseId], references: [id], onDelete: Cascade)
  serviceType       ServiceType
  
  @@unique([nurseId, serviceType])
}

enum ServiceType {
  NON_MEDIS
  VISIT_CARE
  LIVE_OUT_CARE
  LIVE_IN_CARE
}

model NurseDocument {
  id                String    @id @default(cuid())
  nurseId           String
  nurse             NurseProfile @relation(fields: [nurseId], references: [id], onDelete: Cascade)
  
  documentType      DocumentType
  fileUrl           String
  verificationStatus DocumentStatus @default(PENDING)
  uploadedAt        DateTime  @default(now())
  verifiedAt        DateTime?
  
  @@unique([nurseId, documentType])
}

enum DocumentType {
  STR
  KTP
  CERTIFICATION
}

enum DocumentStatus {
  PENDING
  VERIFIED
  REJECTED
}

// ===== SERVICES & PRICING =====

model Service {
  id                String    @id @default(cuid())
  name              String    @unique
  type              ServiceType
  description       String    @db.Text
  basePrice         Float
  maxDurationHours  Int?
  
  bookings          Booking[]
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
}

// ===== BOOKINGS =====

model Booking {
  id                String    @id @default(cuid())
  invoiceNumber     String    @unique
  
  patientId         String
  patient           PatientProfile @relation(fields: [patientId], references: [id], onDelete: Cascade)
  
  nurseId           String
  nurse             NurseProfile @relation(fields: [nurseId], references: [id], onDelete: Cascade)
  
  serviceId         String
  service           Service   @relation(fields: [serviceId], references: [id])
  
  userId            String
  
  requestedDate     DateTime
  requestedTime     String
  duration          Int?
  notes             String?   @db.Text
  
  basePrice         Float
  totalPrice        Float
  
  status            BookingStatus @default(WAITING_PAYMENT)
  paymentStatus     PaymentStatus @default(UNPAID)
  
  payment           Payment?
  sessions          MonitoringSession[]
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  completedAt       DateTime?
  
  @@index([patientId])
  @@index([nurseId])
  @@index([status])
}

enum BookingStatus {
  WAITING_PAYMENT
  CONFIRMED
  ACTIVE
  COMPLETED
  CANCELLED
}

enum PaymentStatus {
  UNPAID
  PENDING
  PAID
  FAILED
  REFUNDED
}

// ===== PAYMENTS =====

model Payment {
  id                String    @id @default(cuid())
  
  bookingId         String    @unique
  booking           Booking   @relation(fields: [bookingId], references: [id], onDelete: Cascade)
  
  amount            Float
  method            PaymentMethod
  
  midtransOrderId   String?   @unique
  midtransSnapshot  String?   @db.Text
  
  status            PaymentStatus @default(UNPAID)
  paidAt            DateTime?
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
}

enum PaymentMethod {
  BANK_TRANSFER
  CREDIT_CARD
  E_WALLET
}

// ===== MONITORING SESSIONS =====

model MonitoringSession {
  id                String    @id @default(cuid())
  
  bookingId         String
  booking           Booking   @relation(fields: [bookingId], references: [id], onDelete: Cascade)
  
  patientId         String
  patient           PatientProfile @relation(fields: [patientId], references: [id], onDelete: Cascade)
  
  nurseId           String
  nurse             NurseProfile @relation(fields: [nurseId], references: [id], onDelete: Cascade)
  
  serviceType       ServiceType
  
  departureTime     DateTime?
  arrivalTime       DateTime?
  startTime         DateTime
  endTime           DateTime?
  
  status            SessionStatus @default(SCHEDULED)
  
  vitals            VitalRecord[]
  activities        ActivityLog[]
  report            SessionReport?
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
}

enum SessionStatus {
  SCHEDULED
  IN_PROGRESS
  COMPLETED
  CANCELLED
}

// ===== VITAL RECORDS =====

model VitalRecord {
  id                String    @id @default(cuid())
  
  sessionId         String
  session           MonitoringSession @relation(fields: [sessionId], references: [id], onDelete: Cascade)
  
  bloodPressureSys  Int?
  bloodPressureDias Int?
  bloodSugar        Float?
  temperature       Float?
  heartRate         Int?
  
  notes             String?   @db.Text
  recordedAt        DateTime  @default(now())
}

// ===== ACTIVITY LOGS =====

model ActivityLog {
  id                String    @id @default(cuid())
  
  sessionId         String
  session           MonitoringSession @relation(fields: [sessionId], references: [id], onDelete: Cascade)
  
  emotionalState    String?
  activityType      String
  activityDuration  Int?
  appetite          String?
  mood              String?
  notes             String?   @db.Text
  
  recordedAt        DateTime  @default(now())
}

// ===== SESSION REPORTS =====

model SessionReport {
  id                String    @id @default(cuid())
  
  sessionId         String    @unique
  session           MonitoringSession @relation(fields: [sessionId], references: [id], onDelete: Cascade)
  
  summary           String    @db.Text
  observations      String?   @db.Text
  recommendations   String?   @db.Text
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
}

// ===== CONSULTATIONS & MESSAGING =====

model Consultation {
  id                String    @id @default(cuid())
  
  userId            String
  user              User      @relation("UserConsultations", fields: [userId], references: [id], onDelete: Cascade)
  
  recipientId       String
  recipient         User      @relation("ConsultationRecipient", fields: [recipientId], references: [id], onDelete: Cascade)
  
  nurseId           String?
  nurse             NurseProfile? @relation(fields: [nurseId], references: [id], onDelete: SetNull)
  
  messages          Message[]
  isActive          Boolean   @default(true)
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
}

model Message {
  id                String    @id @default(cuid())
  
  consultationId    String
  consultation      Consultation @relation(fields: [consultationId], references: [id], onDelete: Cascade)
  
  senderId          String
  content           String    @db.Text
  
  isRead            Boolean   @default(false)
  readAt            DateTime?
  
  createdAt         DateTime  @default(now())
}

// ===== AI RECOMMENDATIONS =====

model AiRecommendation {
  id                String    @id @default(cuid())
  patientId         String
  recommendedNurseIds String[]
  matchScore        Float
  reasoning         String    @db.Text
  
  createdAt         DateTime  @default(now())
  expiresAt         DateTime
}

// ===== REVIEWS =====

model NurseReview {
  id                String    @id @default(cuid())
  
  nurseId           String
  nurse             NurseProfile @relation(references: [id], fields: [nurseId], onDelete: Cascade)
  
  bookingId         String
  rating            Int
  review            String?   @db.Text
  createdBy         String
  
  createdAt         DateTime  @default(now())
}

// ===== EMERGENCY LOGS =====

model EmergencyLog {
  id                String    @id @default(cuid())
  patientId         String
  nurseId           String
  severity          String
  location          String?
  status            String
  notificationsSent String[]
  responseTime      Int?
  
  createdAt         DateTime  @default(now())
}
```

### Entity Relationships (ER Diagram)

```
┌─────────────┐
│    User     │
├─────────────┤
│ id (PK)     │
│ email       │
│ password    │
│ name        │
│ phone       │
│ role        │
│ status      │
└──┬──────┬──┘
   │      │
   │      └─────────────────────┐
   │                            │
   │ 1:1                        │ 1:1
   ▼                            ▼
┌─────────────┐        ┌──────────────────┐
│PatientProf.─┼◄────◄┤ 1:N ├────────┐
│ (PatientProf Bookings)
│                       │ 1:N │     
│                       └────┬──────────────┘
│                            │
│                      ┌─────▼────────┐
│                      │  Booking     │
│                      ├──────────────┤
│                      │ id           │
│                      │ patientId (FK)
│                      │ nurseId (FK) │
│                      │ serviceId    │
│                      │ status       │
│                      │ totalPrice   │
│                      └─────┬────┬──┘
│                            │    │
│                      1:1   │    │  1:1
│                           ▼    ▼
│                      ┌────────────────┐
│                      │    Payment     │
│                      ├────────────────┤
│                      │ bookingId (FK) │
│                      │ amount         │
│                      │ method         │
│                      │ status         │
│                      └────────────────┘

┌──────────────┐          ┌──────────────┐
│NurseProfile  │──────────│ Service      │
├──────────────┤   N:M    ├──────────────┤
│ id           │          │ id           │
│ userId (FK)  │          │ name         │
│ rating       │          │ type         │
│ strVerified  │          │ basePrice    │
└────┬─────┬──┘          └──────────────┘
     │     │
 1:N │     │ 1:N
     │     │
     ▼     ▼
┌─────────────────────┐  ┌──────────────────────┐
│MonitoringSession    │  │NurseSpecialization  │
├─────────────────────┤  ├──────────────────────┤
│ id                  │  │ nurseId (FK)         │
│ bookingId (FK)      │  │ specialization       │
│ patientId (FK)      │  └──────────────────────┘
│ nurseId (FK)        │
│ status              │  ┌──────────────────────┐
│ startTime           │  │NurseServiceType      │
└────┬────┬───────┬──┘  ├──────────────────────┤
     │    │       │     │ nurseId (FK)         │
 1:N │    │       │     │ serviceType          │
     │    │       │     └──────────────────────┘
     ▼    ▼       ▼
┌─────────────────────┐  ┌──────────────────────┐
│VitalRecord          │  │SessionReport         │
├─────────────────────┤  ├──────────────────────┤
│ id                  │  │ sessionId (FK) UNIQUE│
│ sessionId (FK)      │  │ summary              │
│ bloodPressure       │  │ observations         │
│ temperature         │  │ recommendations      │
│ recordedAt          │  └──────────────────────┘
└─────────────────────┘

┌─────────────────────┐
│ActivityLog          │
├─────────────────────┤
│ id                  │
│ sessionId (FK)      │
│ activityType        │
│ mood                │
│ recordedAt          │
└─────────────────────┘
```

### Key Design Decisions

1. **User-Role Split**: Single `User` table with `role` enum + separate Profile models for polymorphism
2. **Service Types**: Enum for consistency and validation
3. **Pricing Strategy**: Per-nurse pricing stored in NurseProfile + baseline Service prices
4. **Session Tracking**: Complete audit trail with times (departure, arrival, start, end)
5. **Emergency System**: Separate `EmergencyLog` for crisis handling with notification tracking
6. **AI Recommendations**: Cacheable with expiration for performance
7. **Payment Integration**: `midtransOrderId` and `midtransSnapshot` for webhook verification

---

## Phase 1: Project Setup & Dependencies

### Objectives
1. Install required dependencies (Prisma, NextAuth, Supabase client, etc.)
2. Create folder structure for API routes and utilities
3. Configure environment variables
4. Set up TypeScript paths and compiler options
5. Initialize Prisma client

### Timeline
**Duration:** 3-4 days  
**Start Date:** Day 1  
**Completion Target:** End of Day 3

### Files to Create/Modify

#### 1. **package.json** (UPDATE)
```json
{
  "name": "web",
  "version": "0.2.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate dev",
    "db:seed": "node prisma/seed.js",
    "db:studio": "prisma studio",
    "db:reset": "prisma migrate reset"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.38.0",
    "@prisma/client": "^5.7.0",
    "next-auth": "^5.0.0",
    "bcryptjs": "^2.4.3",
    "zod": "^3.22.0",
    "zustand": "^4.4.0",
    "swr": "^2.2.0",
    "@midtrans/snap": "^1.3.0",
    "framer-motion": "^12.38.0",
    "lucide-react": "^0.577.0",
    "motion": "^12.38.0",
    "next": "16.2.1",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "recharts": "^3.8.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/bcryptjs": "^2.4.6",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@types/next-auth": "^4.3.10",
    "eslint": "^9",
    "eslint-config-next": "16.2.1",
    "prisma": "^5.7.0",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

#### 2. **.env.local** (CREATE - EXAMPLE)
```env
# Database
DATABASE_URL="postgresql://user:password@db.supabase.co:5432/postgres"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here-min-32-chars"
NEXTAUTH_URL="http://localhost:3000"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_KEY="your-service-key"

# Midtrans Payment
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY="your-client-key"
MIDTRANS_SERVER_KEY="your-server-key"
MIDTRANS_MERCHANT_ID="your-merchant-id"

# Email Service (Optional - Resend)
RESEND_API_KEY="re_xxxxx"

# File Storage
SUPABASE_STORAGE_BUCKET="documents"
```

#### 3. **tsconfig.json** (UPDATE)
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"],
      "@/lib/*": ["./lib/*"],
      "@/types/*": ["./types/*"],
      "@/db/*": ["./lib/db/*"],
      "@/api/*": ["./lib/api/*"],
      "@/utils/*": ["./lib/utils/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```

#### 4. **Folder Structure** (CREATE)
```
/lib
├── /db
│   ├── client.ts (Prisma client instance)
│   └── seed.ts (Seed functions)
├── /api
│   ├── auth.ts (Authentication helpers)
│   ├── users.ts (User CRUD operations)
│   ├── nurses.ts (Nurse operations)
│   ├── patients.ts (Patient operations)
│   ├── bookings.ts (Booking operations)
│   └── payments.ts (Payment operations)
├── /utils
│   ├── validators.ts (Zod schemas)
│   ├── formatters.ts (Date/currency formatting)
│   ├── errors.ts (Custom error classes)
│   └── constants.ts (App constants)
├── auth.ts (NextAuth configuration)
└── supabase.ts (Supabase client)

/types
├── db.ts (Database type definitions)
├── api.ts (API response types)
└── auth.ts (Authentication types)

/app/api
├── /auth
│   ├── [...nextauth]/route.ts
│   ├── register/route.ts
│   └── logout/route.ts
├── /users
│   ├── route.ts
│   └── [id]/route.ts
├── /nurses
│   ├── route.ts
│   └── [id]/route.ts
├── /patients
│   ├── route.ts
│   └── [id]/route.ts
├── /bookings
│   ├── route.ts
│   └── [id]/route.ts
├── /payments
│   ├── route.ts
│   └── webhook/route.ts
└── /sessions
    └── [id]/route.ts

/hooks
├── useAuth.ts (Auth context hook)
├── useUser.ts (User data hook)
└── useApi.ts (Generic API hook)
```

### Commands to Run

```bash
# Install dependencies
npm install

# Initialize Prisma
npx prisma init

# Create Supabase project and get credentials
# (Manual step - visit supabase.com)

# Set environment variables in .env.local
# (Create .env.local file with values from setup)

# Verify database connection
npx prisma db execute --stdin < "SELECT version();"

# Generate Prisma client
npx prisma generate
```

### Key Dependencies to Install

| Package | Purpose | Install Command |
|---------|---------|-----------------|
| `@prisma/client` | Database ORM | `npm install @prisma/client` |
| `prisma` | Prisma CLI | `npm install -D prisma` |
| `next-auth` | Authentication | `npm install next-auth` |
| `@supabase/supabase-js` | Supabase client | `npm install @supabase/supabase-js` |
| `bcryptjs` | Password hashing | `npm install bcryptjs` |
| `zod` | Validation | `npm install zod` |
| `@midtrans/snap` | Payment gateway | `npm install @midtrans/snap` |

### Success Criteria

- [ ] All dependencies installed without conflicts
- [ ] `.env.local` file created with all required variables
- [ ] Prisma client generates successfully (`npx prisma generate`)
- [ ] Database connection verified with test query
- [ ] Folder structure created in `/lib`, `/types`, `/app/api`
- [ ] TypeScript paths working correctly
- [ ] No build errors: `npm run build`
- [ ] Dev server starts: `npm run dev`

---

## Phase 2: Database & ORM Configuration

### Objectives
1. Connect Supabase PostgreSQL database to Prisma
2. Generate database migrations from schema
3. Create database tables and indexes
4. Set up seed script for initial data
5. Migrate all hardcoded data to database

### Timeline
**Duration:** 4-5 days  
**Start Date:** Day 4 (after Phase 1)  
**Completion Target:** Day 8

### Steps

#### Step 1: Supabase Setup
```bash
# Create Supabase project at supabase.com
# - Get DATABASE_URL from Project Settings > Database
# - Get ANON_KEY and SERVICE_KEY from Project Settings > API

# Update .env.local with these values
```

#### Step 2: Initialize Prisma & Create Schema
```bash
# Already provided in Phase 1 - Prisma schema is ready
# File: /home/cn/projects/competition/web2/paring/web/prisma/schema.prisma
```

#### Step 3: Create Initial Migration
```bash
# Generate migration from schema
npx prisma migrate dev --name init

# This will:
# 1. Create all tables
# 2. Create indexes
# 3. Set up foreign key relationships
# 4. Generate migration files in /prisma/migrations
```

#### Step 4: Create Seed Data File

**File:** `prisma/seed.ts`
```typescript
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seed...');

  // Clear existing data (if needed)
  await prisma.$executeRawUnsafe('TRUNCATE TABLE "User" CASCADE;');

  // ===== CREATE SERVICES =====
  const services = [
    {
      name: 'Non-medis',
      type: 'NON_MEDIS',
      description: 'Layanan pendampingan non-medis untuk aktivitas harian, dukungan emosional, dan kebugaran lansia.',
      basePrice: 50000,
    },
    {
      name: 'Visit Care',
      type: 'VISIT_CARE',
      description: 'Perawatan medis berkala ke rumah untuk pengecekan rutin, injeksi, infus, atau perawatan luka.',
      basePrice: 150000,
      maxDurationHours: 3,
    },
    {
      name: 'Live-Out Care',
      type: 'LIVE_OUT_CARE',
      description: 'Pendampingan lansia selama jam kerja. Cocok bagi keluarga yang bekerja di siang hari.',
      basePrice: 200000,
      maxDurationHours: 12,
    },
    {
      name: 'Live-In Care',
      type: 'LIVE_IN_CARE',
      description: 'Pendampingan penuh 24 jam dengan perawat yang tinggal bersama pasien di rumah.',
      basePrice: 3500000,
    },
  ];

  for (const service of services) {
    await prisma.service.create({ data: service });
  }
  console.log('✓ Services created');

  // ===== CREATE ADMIN USER =====
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@paring.com',
      password: await bcrypt.hash('admin123', 10),
      name: 'Admin PARING',
      phone: '081234567890',
      role: 'ADMIN',
      status: 'ACTIVE',
    },
  });
  console.log('✓ Admin user created');

  // ===== CREATE NURSE USERS & PROFILES =====
  const nursesData = [
    {
      user: {
        email: 'rina@paring.com',
        password: await bcrypt.hash('rina123', 10),
        name: 'Ners Rina Suryani',
        phone: '081234567891',
        role: 'NURSE',
        status: 'ACTIVE',
      },
      profile: {
        yearsExperience: 8,
        biography: 'Perawat berpengalaman dengan spesialisasi penyakit dalam. Telah menangani 124+ pasien lansia.',
        strNumber: 'STR-1234567890',
        strExpiry: new Date('2026-12-31'),
        strVerified: true,
        rating: 4.9,
        totalReviews: 95,
        completedSessions: 124,
        serviceArea: 'Solo, Sukoharjo, Boyolali',
        availability: 'Setiap hari',
        visitCarePricing: 150000,
        liveOutPricing: 250000,
        liveInPricing: 3500000,
      },
      specializations: ['Spesialis Penyakit Dalam', 'Perawatan Lansia'],
      services: ['VISIT_CARE', 'LIVE_OUT_CARE'],
    },
    {
      user: {
        email: 'budiawan@paring.com',
        password: await bcrypt.hash('budiawan123', 10),
        name: 'Ners Budiawan',
        phone: '081234567892',
        role: 'NURSE',
        status: 'ACTIVE',
      },
      profile: {
        yearsExperience: 10,
        biography: 'Spesialis perawatan geriatri dengan pengalaman di rumah sakit dan home care.',
        strNumber: 'STR-1234567891',
        strExpiry: new Date('2026-12-31'),
        strVerified: true,
        rating: 4.8,
        totalReviews: 120,
        completedSessions: 120,
        serviceArea: 'Jakarta Selatan',
        availability: 'Senin-Minggu',
        visitCarePricing: 160000,
        liveOutPricing: 280000,
        liveInPricing: 3800000,
      },
      specializations: ['Perawatan Geriatri', 'Perawatan Pasca Operasi'],
      services: ['LIVE_IN_CARE'],
    },
    {
      user: {
        email: 'siti@paring.com',
        password: await bcrypt.hash('siti123', 10),
        name: 'Ners Siti Aisyah',
        phone: '081234567893',
        role: 'NURSE',
        status: 'ACTIVE',
      },
      profile: {
        yearsExperience: 6,
        biography: 'Ahli perawatan pasien stroke dengan metode rehabilitasi modern.',
        strNumber: 'STR-1234567892',
        strExpiry: new Date('2026-12-31'),
        strVerified: true,
        rating: 5.0,
        totalReviews: 80,
        completedSessions: 80,
        serviceArea: 'Jakarta Timur',
        availability: 'Senin-Sabtu',
        visitCarePricing: 180000,
        liveOutPricing: 300000,
        liveInPricing: 3800000,
      },
      specializations: ['Perawatan Pasca Stroke', 'Fisioterapi'],
      services: ['VISIT_CARE', 'LIVE_OUT_CARE'],
    },
    {
      user: {
        email: 'siti.aminah@paring.com',
        password: await bcrypt.hash('siti.aminah123', 10),
        name: 'Siti Aminah',
        phone: '081234567894',
        role: 'NURSE',
        status: 'ACTIVE',
      },
      profile: {
        yearsExperience: 4,
        biography: 'Pendamping lansia dengan keahlian komunikasi dan emotional support.',
        strNumber: 'STR-1234567893',
        strExpiry: new Date('2026-12-31'),
        strVerified: false,
        rating: 4.7,
        totalReviews: 45,
        completedSessions: 45,
        serviceArea: 'Solo, Karanganyar',
        availability: 'Senin-Jumat',
        visitCarePricing: 0,
        liveOutPricing: 0,
        liveInPricing: 0,
      },
      specializations: ['Pendamping Lansia', 'Emotional Support'],
      services: ['NON_MEDIS'],
    },
    {
      user: {
        email: 'bambang@paring.com',
        password: await bcrypt.hash('bambang123', 10),
        name: 'Bambang Heru',
        phone: '081234567895',
        role: 'NURSE',
        status: 'ACTIVE',
      },
      profile: {
        yearsExperience: 5,
        biography: 'Teman ngobrol dan pendamping aktivitas untuk lansia yang butuh dampingan sosial.',
        strNumber: null,
        strExpiry: null,
        strVerified: false,
        rating: 4.8,
        totalReviews: 30,
        completedSessions: 30,
        serviceArea: 'Sukoharjo',
        availability: 'Setiap hari',
        visitCarePricing: 0,
        liveOutPricing: 0,
        liveInPricing: 0,
      },
      specializations: ['Pendamping Sosial', 'Aktivitas Rekreasi'],
      services: ['NON_MEDIS'],
    },
  ];

  for (const nurseData of nursesData) {
    const user = await prisma.user.create({
      data: nurseData.user,
    });

    const profile = await prisma.nurseProfile.create({
      data: {
        ...nurseData.profile,
        userId: user.id,
      },
    });

    // Create specializations
    for (const spec of nurseData.specializations) {
      await prisma.nurseSpecialization.create({
        data: {
          nurseId: profile.id,
          specialization: spec,
        },
      });
    }

    // Create service types
    for (const service of nurseData.services) {
      await prisma.nurseServiceType.create({
        data: {
          nurseId: profile.id,
          serviceType: service as any,
        },
      });
    }
  }
  console.log('✓ Nurse users and profiles created');

  // ===== CREATE PATIENT USERS & PROFILES =====
  const patientUsers = [
    {
      email: 'budi@example.com',
      password: await bcrypt.hash('budi123', 10),
      name: 'Budi Santoso',
      phone: '081234567896',
      role: 'PATIENT',
    },
    {
      email: 'susi@example.com',
      password: await bcrypt.hash('susi123', 10),
      name: 'Susi Hartini',
      phone: '081234567897',
      role: 'PATIENT',
    },
  ];

  for (const patientData of patientUsers) {
    const user = await prisma.user.create({
      data: patientData,
    });

    await prisma.patientProfile.create({
      data: {
        userId: user.id,
        fullName: 'Ibu Kartini (Elderly)',
        age: 72,
        gender: 'FEMALE',
        weight: 58,
        height: 155,
        address: 'Jl. Slamet Riyadi No. 123, Solo',
        bloodPressureNormal: '120/80',
        bloodSugarAverage: 120,
        hasDiabetes: true,
        isBedridden: false,
        drugAllergies: 'Penisilin',
        notes: 'Pasien dengan riwayat hipertensi, butuh monitoring tensi harian',
        aiConsentGiven: true,
        emergencyName: 'Anak Kandung',
        emergencyPhone: '081234567896',
      },
    });
  }
  console.log('✓ Patient users and profiles created');

  // ===== CREATE SAMPLE BOOKINGS =====
  const nurse1 = await prisma.nurseProfile.findFirst({
    where: { user: { name: 'Ners Rina Suryani' } },
    include: { user: true },
  });

  const patient1 = await prisma.patientProfile.findFirst({
    include: { user: true },
  });

  const visitService = await prisma.service.findFirst({
    where: { type: 'VISIT_CARE' },
  });

  if (nurse1 && patient1 && visitService) {
    const booking = await prisma.booking.create({
      data: {
        invoiceNumber: `INV-${Date.now()}`,
        patientId: patient1.id,
        nurseId: nurse1.id,
        serviceId: visitService.id,
        userId: patient1.userId,
        requestedDate: new Date(Date.now() + 86400000), // Tomorrow
        requestedTime: '09:00',
        duration: 2,
        basePrice: visitService.basePrice,
        totalPrice: visitService.basePrice,
        status: 'CONFIRMED',
        paymentStatus: 'PAID',
      },
    });
    console.log('✓ Sample booking created');
  }

  console.log('✅ Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

#### Step 5: Create Prisma Client Wrapper

**File:** `lib/db/client.ts`
```typescript
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  });

if (process.env.NODE_ENV !== 'production')
  globalForPrisma.prisma = prisma;

export default prisma;
```

### Files to Create

#### 1. **prisma/schema.prisma** (ALREADY PROVIDED)
- Location: `/home/cn/projects/competition/web2/paring/web/prisma/schema.prisma`
- No changes needed

#### 2. **prisma/seed.ts** (CREATE)
- Seed all static data from components

#### 3. **lib/db/client.ts** (CREATE)
- Prisma client wrapper with singleton pattern

#### 4. **prisma/.env** (UPDATE - if needed)
- Should mirror .env.local

### Commands to Run

```bash
# Connect Supabase database
# Update DATABASE_URL in .env.local

# Create initial migration
npx prisma migrate dev --name init

# Run seed script
npm run db:seed

# Verify data was created
npx prisma studio
```

### Success Criteria

- [ ] Supabase PostgreSQL database created
- [ ] All tables created in database (verified in Supabase UI)
- [ ] Prisma client generates without errors
- [ ] Initial migration file created in `/prisma/migrations`
- [ ] Seed script runs successfully
- [ ] All 5 nurses visible in Prisma Studio
- [ ] Sample patient and booking created
- [ ] All services (4) created in database
- [ ] Foreign key relationships working (verified in Prisma Studio)
- [ ] Indexes created for performance queries
- [ ] No TypeScript errors: `npx tsc --noEmit`

---

## Phase 3: Authentication System

### Objectives
1. Implement NextAuth.js v5 with credentials provider
2. Create registration endpoint with validation
3. Create login endpoint with password verification
4. Create protected route middleware
5. Create logout functionality
6. Set up session/user context for client components
7. Update landing, login, and register pages with real auth

### Timeline
**Duration:** 3-4 days  
**Start Date:** Day 9 (after Phase 2)  
**Completion Target:** Day 12

### Files to Create/Modify

#### 1. **lib/auth.ts** (NextAuth Configuration)
```typescript
import NextAuth, { type NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/db/client';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const config = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        try {
          const { email, password } = credentialsSchema.parse(credentials);

          const user = await prisma.user.findUnique({
            where: { email },
            include: {
              patientProfile: true,
              nurseProfile: true,
            },
          });

          if (!user) {
            throw new Error('Invalid email or password');
          }

          // Verify password
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            throw new Error('Invalid email or password');
          }

          // Check if user is active
          if (user.status !== 'ACTIVE') {
            throw new Error('User account is not active');
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            status: user.status,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  trustHost: true,
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
```

#### 2. **app/api/auth/[...nextauth]/route.ts**
```typescript
import { handlers } from '@/lib/auth';

export const { GET, POST } = handlers;
```

#### 3. **app/api/auth/register/route.ts** (NEW ENDPOINT)
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/client';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const registerSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Invalid phone number'),
  role: z.enum(['PATIENT', 'NURSE']),
});

export async function POST(req: NextRequest) {
  try {
    const data = registerSchema.parse(await req.json());

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email: data.email }, { phone: data.phone }],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email or phone already registered' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name,
        phone: data.phone,
        role: data.role,
        status: data.role === 'NURSE' ? 'PENDING_VERIFICATION' : 'ACTIVE',
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Registration successful. Please log in.',
        userId: user.id,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    );
  }
}
```

#### 4. **lib/utils/validators.ts** (VALIDATION SCHEMAS)
```typescript
import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain uppercase letter')
    .regex(/[0-9]/, 'Password must contain number'),
  confirmPassword: z.string(),
  name: z.string().min(2, 'Name is required'),
  phone: z.string().regex(/^\d{10,}$/, 'Invalid phone number'),
  role: z.enum(['PATIENT', 'NURSE']),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Invalid password'),
});

export const patientProfileSchema = z.object({
  fullName: z.string().min(2),
  age: z.number().min(1).max(150),
  gender: z.enum(['MALE', 'FEMALE']),
  weight: z.number().positive().optional(),
  height: z.number().positive().optional(),
  address: z.string().min(5),
  emergencyName: z.string().min(2),
  emergencyPhone: z.string().regex(/^\d{10,}$/),
});

export const nurseProfileSchema = z.object({
  yearsExperience: z.number().min(1),
  biography: z.string().min(20),
  serviceArea: z.string().min(3),
  specializations: z.array(z.string()).min(1),
  services: z.array(z.enum(['NON_MEDIS', 'VISIT_CARE', 'LIVE_OUT_CARE', 'LIVE_IN_CARE'])).min(1),
});
```

#### 5. **lib/auth/session.ts** (SESSION HELPERS)
```typescript
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function getSession() {
  const session = await auth();
  return session;
}

export async function requireAuth() {
  const session = await getSession();
  if (!session?.user) {
    redirect('/login');
  }
  return session;
}

export async function requireRole(role: string) {
  const session = await requireAuth();
  if (session.user?.role !== role) {
    redirect('/unauthorized');
  }
  return session;
}
```

#### 6. **hooks/useAuth.ts** (CLIENT-SIDE AUTH HOOK)
```typescript
'use client';

import { useSession } from 'next-auth/react';
import { signOut as nextAuthSignOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const signOut = async () => {
    await nextAuthSignOut({ redirect: false });
    router.push('/login');
  };

  return {
    user: session?.user,
    isLoading: status === 'loading',
    isAuthenticated: status === 'authenticated',
    signOut,
  };
}
```

#### 7. **app/login/page.tsx** (UPDATE - WITH REAL AUTH)
```typescript
'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Heart, Mail, Lock, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError('Invalid email or password');
      setLoading(false);
      return;
    }

    if (result?.ok) {
      // Redirect based on user role will be handled by middleware
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F6] flex flex-col font-sans">
      <div className="flex-1 max-w-md w-full mx-auto px-6 py-8 flex flex-col justify-center">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-[#37A47C] rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-6 transform -rotate-6">
            <Heart size={32} />
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#1B4332] mb-2">Selamat Datang</h1>
          <p className="text-slate-500 font-light text-sm">Masuk ke akun PARING Anda.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Email</label>
            <Input
              type="email"
              icon={<Mail size={18} />}
              placeholder="Email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5 px-1">
              <label className="block text-xs font-bold text-slate-700">Kata Sandi</label>
              <Link href="/forgot-password" className="text-xs font-medium text-[#37A47C] hover:underline">
                Lupa Sandi?
              </Link>
            </div>
            <Input
              type="password"
              icon={<Lock size={18} />}
              placeholder="Kata Sandi Anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="pt-8">
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-14 justify-center text-lg bg-[#37A47C] hover:bg-[#1B4332] rounded-2xl shadow-lg shadow-[#37A47C]/20 disabled:opacity-50"
            >
              {loading ? 'Memproses...' : 'Masuk'}
            </Button>

            <p className="text-center text-sm text-slate-500 mt-8 font-light">
              Belum punya akun?{' '}
              <Link href="/register" className="text-[#37A47C] font-bold hover:underline">
                Daftar
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
```

#### 8. **app/register/page.tsx** (UPDATE - WITH REAL AUTH)
- Update registration to call `/api/auth/register` endpoint
- Add form validation with Zod
- Show success/error messages

#### 9. **middleware.ts** (CREATE - ROUTE PROTECTION)
```typescript
import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const session = await auth();

  // Public routes
  const publicRoutes = ['/', '/login', '/register', '/nurse-register', '/mobile-only', '/forgot-password'];
  
  if (publicRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Protected routes - require authentication
  if (!session) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Role-based routing
  if (request.nextUrl.pathname.startsWith('/dashboard') && session.user?.role !== 'PATIENT') {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  if (request.nextUrl.pathname.startsWith('/nurse') && session.user?.role !== 'NURSE') {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
```

### Success Criteria

- [ ] NextAuth.js configured with credentials provider
- [ ] Registration endpoint accepts email, password, name, phone, role
- [ ] Password validation and hashing working (min 8 chars, bcryptjs)
- [ ] Login endpoint verifies credentials against database
- [ ] Session created and accessible via `useAuth()` hook
- [ ] Middleware protects routes based on authentication
- [ ] Role-based access control working (/dashboard for PATIENT, /nurse for NURSE)
- [ ] Login page works with real credentials
- [ ] Register page creates users in database
- [ ] Session persists across page reloads
- [ ] Logout clears session
- [ ] No sensitive data exposed in client-side session
- [ ] Password requirements enforced (8+ chars)
- [ ] Duplicate email/phone prevention working

---

## Phase 4: API Routes & Frontend Integration

### Objectives
1. Create API endpoints for all CRUD operations
2. Update components to fetch from API instead of hardcoded data
3. Implement React Query or SWR for data fetching
4. Create data loading states and error handling
5. Integrate real booking system
6. Integrate Midtrans payment system

### Timeline
**Duration:** 7-10 days  
**Start Date:** Day 13 (after Phase 3)  
**Completion Target:** Day 22

### API Routes to Create

#### **1. Users API** (`/api/users/`)

**GET /api/users/me** - Get current user profile
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth/session';
import { prisma } from '@/lib/db/client';

export async function GET(req: NextRequest) {
  const session = await requireAuth();
  
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      patientProfile: true,
      nurseProfile: {
        include: {
          specializations: true,
          serviceTypes: true,
        },
      },
    },
  });

  return NextResponse.json(user);
}
```

**PUT /api/users/me** - Update user profile
```typescript
// Implementation for updating user/profile data
```

**GET /api/users/[id]** - Get public user profile
```typescript
// Implementation for fetching user details
```

#### **2. Nurses API** (`/api/nurses/`)

**GET /api/nurses** - List all nurses with filters
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/client';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const serviceType = searchParams.get('serviceType');
  const area = searchParams.get('area');
  const minRating = searchParams.get('minRating');

  const nurses = await prisma.nurseProfile.findMany({
    where: {
      ...(serviceType && {
        serviceTypes: {
          some: { serviceType: serviceType as any },
        },
      }),
      ...(area && {
        serviceArea: { contains: area, mode: 'insensitive' },
      }),
      ...(minRating && {
        rating: { gte: parseFloat(minRating) },
      }),
    },
    include: {
      user: {
        select: { name: true, email: true },
      },
      specializations: true,
      serviceTypes: true,
      reviews: {
        orderBy: { createdAt: 'desc' },
        take: 5,
      },
    },
    orderBy: { rating: 'desc' },
  });

  return NextResponse.json(nurses);
}
```

**GET /api/nurses/[id]** - Get nurse details
```typescript
// Implementation for fetching single nurse
```

**POST /api/nurses/[id]/availability** - Update nurse availability
```typescript
// Implementation for setting nurse schedule
```

#### **3. Patients API** (`/api/patients/`)

**GET /api/patients/me** - Get current patient's patients
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth, requireRole } from '@/lib/auth/session';
import { prisma } from '@/lib/db/client';

export async function GET(req: NextRequest) {
  const session = await requireRole('PATIENT');

  const patients = await prisma.patientProfile.findMany({
    where: { userId: session.user.id },
    include: {
      bookings: {
        orderBy: { createdAt: 'desc' },
      },
    },
  });

  return NextResponse.json(patients);
}
```

**POST /api/patients** - Create new patient
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireRole } from '@/lib/auth/session';
import { prisma } from '@/lib/db/client';
import { patientProfileSchema } from '@/lib/utils/validators';

export async function POST(req: NextRequest) {
  const session = await requireRole('PATIENT');

  const data = patientProfileSchema.parse(await req.json());

  const patient = await prisma.patientProfile.create({
    data: {
      ...data,
      userId: session.user.id,
    },
  });

  return NextResponse.json(patient, { status: 201 });
}
```

**PUT /api/patients/[id]** - Update patient profile
```typescript
// Implementation for updating patient
```

#### **4. Bookings API** (`/api/bookings/`)

**GET /api/bookings** - List bookings
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth/session';
import { prisma } from '@/lib/db/client';

export async function GET(req: NextRequest) {
  const session = await requireAuth();
  const { searchParams } = new URL(req.url);
  const status = searchParams.get('status');

  const bookings = await prisma.booking.findMany({
    where: {
      OR: [
        { patient: { userId: session.user.id } },
        { nurse: { userId: session.user.id } },
      ],
      ...(status && { status }),
    },
    include: {
      patient: {
        include: { user: true },
      },
      nurse: {
        include: { user: true },
      },
      service: true,
      payment: true,
      sessions: true,
    },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(bookings);
}
```

**POST /api/bookings** - Create new booking
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireRole } from '@/lib/auth/session';
import { prisma } from '@/lib/db/client';

export async function POST(req: NextRequest) {
  const session = await requireRole('PATIENT');

  const { patientId, nurseId, serviceId, requestedDate, requestedTime, notes } = await req.json();

  // Validate patient belongs to current user
  const patient = await prisma.patientProfile.findUnique({
    where: { id: patientId },
  });

  if (patient?.userId !== session.user.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  const service = await prisma.service.findUnique({
    where: { id: serviceId },
  });

  if (!service) {
    return NextResponse.json({ error: 'Service not found' }, { status: 404 });
  }

  const booking = await prisma.booking.create({
    data: {
      invoiceNumber: `INV-${Date.now()}`,
      patientId,
      nurseId,
      serviceId,
      userId: session.user.id,
      requestedDate: new Date(requestedDate),
      requestedTime,
      notes,
      basePrice: service.basePrice,
      totalPrice: service.basePrice,
      status: 'WAITING_PAYMENT',
    },
  });

  return NextResponse.json(booking, { status: 201 });
}
```

**GET /api/bookings/[id]** - Get booking details
```typescript
// Implementation for fetching single booking
```

**PUT /api/bookings/[id]** - Update booking status
```typescript
// Implementation for updating booking (confirm, cancel, complete)
```

#### **5. Payments API** (`/api/payments/`)

**POST /api/payments/create** - Create payment token
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth/session';
import { prisma } from '@/lib/db/client';
import MidtransClient from 'midtrans-client';

const snap = new MidtransClient.Snap({
  isProduction: process.env.NODE_ENV === 'production',
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY,
});

export async function POST(req: NextRequest) {
  const session = await requireAuth();
  const { bookingId } = await req.json();

  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: {
      patient: {
        include: { user: true },
      },
      service: true,
    },
  });

  if (!booking) {
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
  }

  // Create payment
  let payment = await prisma.payment.findUnique({
    where: { bookingId },
  });

  if (!payment) {
    payment = await prisma.payment.create({
      data: {
        bookingId,
        amount: booking.totalPrice,
        method: 'BANK_TRANSFER',
        status: 'PENDING',
      },
    });
  }

  // Create Midtrans transaction
  const parameter = {
    transaction_details: {
      order_id: booking.invoiceNumber,
      gross_amount: booking.totalPrice,
    },
    customer_details: {
      first_name: booking.patient.user.name,
      email: booking.patient.user.email,
      phone: booking.patient.user.phone,
    },
  };

  try {
    const transaction = await snap.createTransaction(parameter);
    
    // Save Midtrans order ID
    await prisma.payment.update({
      where: { id: payment.id },
      data: {
        midtransOrderId: transaction.order_id,
        midtransSnapshot: JSON.stringify(transaction),
      },
    });

    return NextResponse.json({
      token: transaction.token,
      redirectUrl: transaction.redirect_url,
    });
  } catch (error) {
    console.error('Midtrans error:', error);
    return NextResponse.json({ error: 'Payment gateway error' }, { status: 500 });
  }
}
```

**POST /api/payments/webhook** - Handle Midtrans webhook
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/client';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Verify signature
  const signature = crypto
    .createHash('sha512')
    .update(`${body.order_id}${body.status_code}${process.env.MIDTRANS_SERVER_KEY}`)
    .digest('hex');

  if (signature !== body.signature_key) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  // Find booking by order ID
  const booking = await prisma.booking.findFirst({
    where: { invoiceNumber: body.order_id },
  });

  if (!booking) {
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
  }

  // Update payment status based on transaction status
  let paymentStatus = 'PENDING';
  let bookingStatus = 'WAITING_PAYMENT';

  if (body.transaction_status === 'capture' || body.transaction_status === 'settlement') {
    paymentStatus = 'PAID';
    bookingStatus = 'CONFIRMED';
  } else if (body.transaction_status === 'pending') {
    paymentStatus = 'PENDING';
  } else if (
    body.transaction_status === 'deny' ||
    body.transaction_status === 'expire' ||
    body.transaction_status === 'cancel'
  ) {
    paymentStatus = 'FAILED';
    bookingStatus = 'CANCELLED';
  }

  // Update payment
  await prisma.payment.updateMany({
    where: { bookingId: booking.id },
    data: {
      status: paymentStatus,
      ...(paymentStatus === 'PAID' && { paidAt: new Date() }),
    },
  });

  // Update booking
  await prisma.booking.update({
    where: { id: booking.id },
    data: {
      status: bookingStatus,
      paymentStatus,
    },
  });

  return NextResponse.json({ ok: true });
}
```

#### **6. Sessions API** (`/api/sessions/`)

**GET /api/sessions/[id]** - Get session details with vitals
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth/session';
import { prisma } from '@/lib/db/client';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await requireAuth();

  const monitoringSession = await prisma.monitoringSession.findUnique({
    where: { id: params.id },
    include: {
      vitals: {
        orderBy: { recordedAt: 'desc' },
      },
      activities: {
        orderBy: { recordedAt: 'desc' },
      },
      report: true,
      booking: {
        include: {
          patient: true,
          nurse: true,
        },
      },
    },
  });

  if (!monitoringSession) {
    return NextResponse.json({ error: 'Session not found' }, { status: 404 });
  }

  return NextResponse.json(monitoringSession);
}
```

**POST /api/sessions/[id]/vitals** - Record vital signs
```typescript
// Implementation for recording blood pressure, temperature, etc.
```

**POST /api/sessions/[id]/activities** - Record activities
```typescript
// Implementation for logging activities during session
```

### Components to Update

#### **1. dashboard/nurses/page.tsx** - Use Real Data
```typescript
'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

export default function NurseSearchPage() {
  const { isAuthenticated } = useAuth();
  const [nurses, setNurses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchNurses = async () => {
      try {
        const res = await fetch('/api/nurses');
        const data = await res.json();
        setNurses(data);
      } catch (error) {
        console.error('Failed to fetch nurses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNurses();
  }, [isAuthenticated]);

  if (loading) return <div>Loading...</div>;

  return (
    // Component JSX using real nurses data
  );
}
```

#### **2. dashboard/patients/page.tsx** - Show Real Patients
```typescript
// Similar pattern - fetch from /api/patients/me
```

#### **3. dashboard/bookings/page.tsx** - Show Real Bookings
```typescript
// Fetch from /api/bookings with status filtering
```

#### **4. dashboard/page.tsx** - Show Active Sessions
```typescript
// Fetch active sessions from /api/sessions
```

#### **5. Payment Integration**
- Update `/app/dashboard/payment/[bookingId]/page.tsx` to:
  - Call `/api/payments/create` to get Midtrans token
  - Show Snap payment modal
  - Handle payment success/failure

### Data Fetching Pattern (Using SWR)

**hooks/useApi.ts**
```typescript
'use client';

import useSWR from 'swr';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};

export function useApi<T>(url: string | null) {
  const { data, error, isLoading, mutate } = useSWR<T>(url, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate, // For manual cache updates
  };
}
```

### Success Criteria

- [ ] All nurse data fetched from database (not hardcoded)
- [ ] All patient data persisted and retrieved from database
- [ ] All bookings created and retrieved from database
- [ ] Payment creation working with Midtrans
- [ ] Payment webhook handling correct status updates
- [ ] Session vitals being recorded in database
- [ ] Real-time dashboard showing active sessions
- [ ] Nurse search with filters working
- [ ] Patient profile management working
- [ ] Booking creation working end-to-end
- [ ] API error handling and validation
- [ ] Loading states on all pages
- [ ] No hardcoded data remaining in components

---

## Phase 5: Testing & Deployment

### Objectives
1. Write unit tests for API routes
2. Write integration tests for key flows
3. Write E2E tests for critical user journeys
4. Optimize database queries (add indexes)
5. Set up error tracking (Sentry optional)
6. Prepare production environment
7. Deploy to production

### Timeline
**Duration:** 4-5 days  
**Start Date:** Day 23 (after Phase 4)  
**Completion Target:** Day 27

### Testing Scope

#### **Unit Tests - API Routes**

**tests/api/auth.test.ts**
```typescript
import { POST } from '@/app/api/auth/register/route';
import { NextRequest } from 'next/server';

describe('POST /api/auth/register', () => {
  it('should register a new user', async () => {
    const req = new NextRequest(new URL('http://localhost:3000/api/auth/register'), {
      method: 'POST',
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'TestPassword123',
        name: 'Test User',
        phone: '081234567890',
        role: 'PATIENT',
      }),
    });

    const response = await POST(req);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.success).toBe(true);
  });

  it('should reject duplicate emails', async () => {
    // Test implementation
  });

  it('should validate password strength', async () => {
    // Test implementation
  });
});
```

#### **Integration Tests - User Flows**

**tests/integration/booking.test.ts**
```typescript
// Test complete booking flow:
// 1. User login
// 2. Browse nurses
// 3. Create booking
// 4. Make payment
// 5. Verify booking status
```

#### **E2E Tests - Critical Paths**

**e2e/patient-booking.spec.ts** (Playwright)
```typescript
import { test, expect } from '@playwright/test';

test.describe('Patient Booking Flow', () => {
  test('should complete booking from start to finish', async ({ page }) => {
    // 1. Go to login
    await page.goto('/login');
    
    // 2. Login as patient
    await page.fill('input[type="email"]', 'budi@example.com');
    await page.fill('input[type="password"]', 'budi123');
    await page.click('button[type="submit"]');
    
    // 3. Wait for dashboard
    await expect(page).toHaveURL('/dashboard');
    
    // 4. Click "Cari Perawat"
    await page.click('text=Cari Perawat');
    
    // 5. Select nurse
    await page.click('button:has-text("Ners Rina Suryani")');
    
    // 6. Create booking
    await page.fill('input[placeholder="Tanggal"]', '2026-04-15');
    await page.click('button:has-text("Pesan Sekarang")');
    
    // 7. Make payment
    await page.waitForURL('/dashboard/payment/**');
    // Note: Midtrans testing requires separate test account
    
    // 8. Verify booking created
    await page.goto('/dashboard/bookings');
    await expect(page.locator('text=Ners Rina Suryani')).toBeVisible();
  });
});
```

### Database Optimization

#### Performance Indexes
```prisma
// Already included in schema.prisma:
model User {
  @@index([email])
  @@index([role])
}

model Booking {
  @@index([patientId])
  @@index([nurseId])
  @@index([status])
}

model NurseProfile {
  @@index([serviceArea])
  @@index([rating])
}
```

#### Query Optimization Tips
1. Use `include` selectively
2. Add pagination to list endpoints
3. Cache frequently accessed data
4. Use database-level filtering instead of application-level

### Error Tracking Setup (Optional)

**sentry.client.config.ts**
```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: [
    new Sentry.Replay(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  environment: process.env.NODE_ENV,
});
```

### Deployment Checklist

#### Pre-Deployment
- [ ] All tests passing
- [ ] No TypeScript errors: `npm run build`
- [ ] Environment variables set in production
- [ ] Database migrations applied
- [ ] Seed data loaded
- [ ] Payment webhook URL configured in Midtrans
- [ ] Email sending configured (if applicable)
- [ ] File upload storage configured
- [ ] CORS settings configured

#### Deployment Steps (Vercel)
```bash
# 1. Push to GitHub
git add .
git commit -m "Ready for production"
git push origin main

# 2. Deploy via Vercel CLI or Dashboard
vercel deploy --prod

# 3. Run migrations on production
npx prisma migrate deploy

# 4. Seed production data (if needed)
npm run db:seed
```

#### Post-Deployment
- [ ] Test login with real credentials
- [ ] Verify API endpoints responding
- [ ] Check payment webhook working
- [ ] Monitor error tracking (Sentry)
- [ ] Set up monitoring/alerts
- [ ] Create backup strategy

### Production Environment Variables

```env
# Database
DATABASE_URL="postgresql://user:pass@prod.supabase.co/postgres"

# NextAuth
NEXTAUTH_SECRET="[very-long-secure-secret]"
NEXTAUTH_URL="https://paring.com"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://prod.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="[prod-key]"
SUPABASE_SERVICE_KEY="[prod-service-key]"

# Midtrans Production
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY="[prod-client-key]"
MIDTRANS_SERVER_KEY="[prod-server-key]"
MIDTRANS_MERCHANT_ID="[prod-merchant-id]"

# Error Tracking
NEXT_PUBLIC_SENTRY_DSN="https://[id]@sentry.io/[project]"

# Optional Services
RESEND_API_KEY="re_[prod-key]"
```

### Success Criteria

- [ ] All unit tests passing (>80% coverage)
- [ ] Integration tests passing
- [ ] E2E tests passing for critical flows
- [ ] No Console errors or warnings
- [ ] Database queries optimized
- [ ] Build succeeds without warnings
- [ ] All environment variables configured
- [ ] Payment webhook tested and working
- [ ] Email confirmations working
- [ ] File uploads working
- [ ] Monitoring/alerts set up
- [ ] Backups configured

---

## Implementation Checklist

### Pre-Implementation Checklist

- [ ] Read all Prisma schema documentation
- [ ] Create Supabase account and project
- [ ] Verify Node.js version (16+) and npm (8+)
- [ ] Install required tools:
  - [ ] Docker (for local PostgreSQL - optional)
  - [ ] Prisma CLI (`npm install -g prisma`)
  - [ ] Postman or similar (for API testing)
- [ ] Create GitHub repository for version control
- [ ] Set up Vercel account for deployment
- [ ] Generate NextAuth secret (`openssl rand -base64 32`)
- [ ] Create Midtrans account for payments

### Phase 1 Daily Checklist

**Day 1-2:**
- [ ] Install all npm dependencies
- [ ] Create `/lib`, `/types`, `/app/api` folders
- [ ] Update `tsconfig.json` with path aliases
- [ ] Create `.env.local` example file
- [ ] Verify npm run build succeeds

**Day 3:**
- [ ] Create `lib/db/client.ts` Prisma wrapper
- [ ] Create `lib/auth.ts` NextAuth config
- [ ] Create folder structure for routes
- [ ] Test database connection with Supabase
- [ ] Generate Prisma client without errors

### Phase 2 Daily Checklist

**Day 4-5:**
- [ ] Supabase project created
- [ ] Database URL in .env.local
- [ ] `npx prisma migrate dev` succeeds
- [ ] Create migration file: migration.sql
- [ ] Verify all 15 models in database

**Day 6-7:**
- [ ] Create `prisma/seed.ts` file
- [ ] Test seed script locally
- [ ] All 5 nurses in database
- [ ] Sample patient and booking created
- [ ] Prisma Studio showing data

**Day 8:**
- [ ] Verify all relationships working
- [ ] No orphaned records
- [ ] Indexes created successfully
- [ ] Full backup of database

### Phase 3 Daily Checklist

**Day 9-10:**
- [ ] NextAuth dependencies installed
- [ ] `lib/auth.ts` created and configured
- [ ] `app/api/auth/[...nextauth]/route.ts` created
- [ ] `/api/auth/register` endpoint working
- [ ] Test registration with new user

**Day 11-12:**
- [ ] Login page working with real credentials
- [ ] Session persisting across reloads
- [ ] Middleware protecting routes
- [ ] Role-based redirects working
- [ ] Logout functionality tested

### Phase 4 Daily Checklist

**Day 13-15:**
- [ ] `/api/nurses` GET endpoint created
- [ ] `/api/patients` CRUD endpoints created
- [ ] `/api/bookings` POST endpoint working
- [ ] Database queries optimized

**Day 16-18:**
- [ ] Dashboard fetching real nurses data
- [ ] Patient management pages updated
- [ ] Booking creation end-to-end working
- [ ] Loading and error states added

**Day 19-22:**
- [ ] `/api/payments/create` working
- [ ] Midtrans token generation verified
- [ ] Payment webhook handler created
- [ ] `/api/sessions` endpoints created
- [ ] Vitals recording working
- [ ] All hardcoded data removed

### Phase 5 Daily Checklist

**Day 23-24:**
- [ ] Unit tests written for auth
- [ ] Unit tests for API routes
- [ ] All tests passing locally
- [ ] Coverage report generated

**Day 25-26:**
- [ ] E2E tests written for critical flows
- [ ] Database indexes verified
- [ ] Build optimization completed
- [ ] Production env vars prepared

**Day 27:**
- [ ] Final testing on staging
- [ ] Deployment to production
- [ ] Smoke tests on production
- [ ] Monitoring alerts configured

### Rollback Procedures

#### Database Rollback
```bash
# Rollback to previous migration
npx prisma migrate resolve --rolled-back <migration_name>
npx prisma migrate deploy

# Restore from backup
# (Supabase provides automatic backups)
```

#### Code Rollback
```bash
# Revert last commit
git revert HEAD

# Deploy previous version
vercel rollback
```

#### Payment System Rollback
```bash
# If Midtrans integration breaks:
# 1. Disable payment in code
# 2. Add manual payment verification
# 3. Contact Midtrans support
```

---

## Appendix

### A. Database ER Diagram (ASCII)

```
┌────────────────────────────────────────────────────────────────────────────┐
│                         PARING DATABASE SCHEMA                             │
└────────────────────────────────────────────────────────────────────────────┘

                              ┌──────────────┐
                              │    User      │
                              │──────────────│
                              │ id (PK)      │
                              │ email        │
                              │ password     │
                              │ name         │
                              │ phone        │
                              │ role         │
                              │ status       │
                              └──┬───────┬──┘
                    ┌─────────────┘       └──────────────┐
                    │                                     │
                1:1 │                               1:1   │
                    ▼                                     ▼
        ┌────────────────────┐          ┌────────────────────────┐
        │  PatientProfile    │          │   NurseProfile         │
        ├────────────────────┤          ├────────────────────────┤
        │ id                 │          │ id                     │
        │ userId (FK)        │          │ userId (FK)            │
        │ fullName           │          │ yearsExperience        │
        │ age                │          │ biography              │
        │ gender             │          │ rating                 │
        │ address            │          │ strVerified            │
        │ emergencyName      │          │ serviceArea            │
        │ emergencyPhone     │          │ availability           │
        └────────┬───────────┘          └────────────┬───────────┘
                 │                                    │
            1:N  │                              1:N   │
                 ▼                                    ▼
        ┌────────────────────┐          ┌────────────────────────┐
        │     Booking        │          │ NurseSpecialization    │
        ├────────────────────┤          ├────────────────────────┤
        │ id                 │          │ id                     │
        │ patientId (FK)     │          │ nurseId (FK)           │
        │ nurseId (FK)       │          │ specialization         │
        │ serviceId (FK)     │          └────────────────────────┘
        │ requestedDate      │
        │ status             │          ┌────────────────────────┐
        │ paymentStatus      │          │ NurseServiceType       │
        │ totalPrice         │          ├────────────────────────┤
        └────────┬───────────┘          │ id                     │
                 │                       │ nurseId (FK)           │
            1:1  │                       │ serviceType            │
                 ▼                       └────────────────────────┘
        ┌────────────────────┐
        │     Payment        │          ┌────────────────────────┐
        ├────────────────────┤          │ NurseDocument          │
        │ id                 │          ├────────────────────────┤
        │ bookingId (FK)     │          │ id                     │
        │ amount             │          │ nurseId (FK)           │
        │ method             │          │ documentType           │
        │ midtransOrderId    │          │ fileUrl                │
        │ status             │          │ verificationStatus     │
        │ paidAt             │          └────────────────────────┘
        └────────────────────┘

        ┌────────────────────┐          ┌────────────────────────┐
        │ MonitoringSession  │          │      Service           │
        ├────────────────────┤          ├────────────────────────┤
        │ id                 │          │ id                     │
        │ bookingId (FK)     │          │ name                   │
        │ patientId (FK)     │          │ type                   │
        │ nurseId (FK)       │          │ basePrice              │
        │ startTime          │          │ description            │
        │ endTime            │          └────────────────────────┘
        │ status             │
        └────────┬───────────┘
                 │
            1:N  │
    ┌────────────┴──────────┬─────────────────┐
    ▼                       ▼                 ▼
┌──────────────┐     ┌──────────────┐  ┌─────────────────┐
│ VitalRecord  │     │ ActivityLog  │  │ SessionReport   │
├──────────────┤     ├──────────────┤  ├─────────────────┤
│ id           │     │ id           │  │ id              │
│ sessionId    │     │ sessionId    │  │ sessionId (FK)  │
│ bloodPres    │     │ activityType │  │ summary         │
│ temperature  │     │ mood         │  │ recommendations │
│ recordedAt   │     │ recordedAt   │  └─────────────────┘
└──────────────┘     └──────────────┘

        ┌──────────────────┐          ┌──────────────────────┐
        │  Consultation    │          │   Message            │
        ├──────────────────┤          ├──────────────────────┤
        │ id               │          │ id                   │
        │ userId (FK)      │          │ consultationId (FK)  │
        │ recipientId (FK) │          │ senderId             │
        │ isActive         │          │ content              │
        └──────────────────┘          │ isRead               │
                                      │ readAt               │
                                      └──────────────────────┘
```

### B. API Endpoint Reference

#### **Authentication Endpoints**

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Register new user | None |
| POST | `/api/auth/signin` | Login (NextAuth handles) | None |
| POST | `/api/auth/signout` | Logout | Session |
| GET | `/api/auth/session` | Get current session | Session |

#### **User Endpoints**

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/users/me` | Get current user profile | Required |
| PUT | `/api/users/me` | Update current user | Required |
| GET | `/api/users/[id]` | Get public user profile | None |

#### **Nurse Endpoints**

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/nurses` | List all nurses (with filters) | None |
| GET | `/api/nurses/[id]` | Get nurse details | None |
| PUT | `/api/nurses/[id]` | Update nurse profile | Nurse |
| POST | `/api/nurses/[id]/availability` | Set availability | Nurse |
| GET | `/api/nurses/[id]/reviews` | Get nurse reviews | None |

#### **Patient Endpoints**

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/patients` | Get patients under current account | Patient |
| POST | `/api/patients` | Create new patient | Patient |
| GET | `/api/patients/[id]` | Get patient details | Patient |
| PUT | `/api/patients/[id]` | Update patient | Patient |
| DELETE | `/api/patients/[id]` | Delete patient | Patient |

#### **Booking Endpoints**

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/bookings` | List bookings | Required |
| POST | `/api/bookings` | Create booking | Patient |
| GET | `/api/bookings/[id]` | Get booking details | Required |
| PUT | `/api/bookings/[id]` | Update booking | Patient/Nurse |
| DELETE | `/api/bookings/[id]` | Cancel booking | Patient |

#### **Payment Endpoints**

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/payments/create` | Create payment token | Patient |
| POST | `/api/payments/webhook` | Midtrans webhook | Midtrans |
| GET | `/api/payments/[id]` | Get payment status | Required |

#### **Session Endpoints**

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/sessions` | List sessions | Required |
| GET | `/api/sessions/[id]` | Get session details | Required |
| POST | `/api/sessions/[id]/vitals` | Record vitals | Nurse |
| POST | `/api/sessions/[id]/activities` | Record activities | Nurse |
| POST | `/api/sessions/[id]/complete` | Mark session complete | Nurse |

### C. Environment Variables Reference

```env
# ===== CORE CONFIG =====
NODE_ENV=development|production|test
NEXT_PUBLIC_APP_URL=http://localhost:3000

# ===== DATABASE =====
# Get from Supabase > Project Settings > Database
DATABASE_URL=postgresql://user:password@host:port/dbname
SHADOW_DATABASE_URL=postgresql://... # Optional, for Prisma migrations

# ===== AUTHENTICATION =====
# Generate with: openssl rand -base64 32
NEXTAUTH_SECRET=your-secret-key-min-32-chars
NEXTAUTH_URL=http://localhost:3000 # Change to https://yourdomain.com in production

# ===== SUPABASE =====
# Get from Supabase > Project Settings > API
NEXT_PUBLIC_SUPABASE_URL=https://project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ... (public anon key)
SUPABASE_SERVICE_KEY=eyJ... (service role secret)

# ===== PAYMENT GATEWAY (Midtrans) =====
# Get from Midtrans Dashboard
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=VT-client-xxx (public)
MIDTRANS_SERVER_KEY=VT-server-xxx (secret)
MIDTRANS_MERCHANT_ID=M123456 (merchant ID)
MIDTRANS_WEBHOOK_KEY=webhook-key (for webhook verification)

# ===== EMAIL SERVICE (Optional) =====
# Using Resend (alternative: SendGrid, AWS SES)
RESEND_API_KEY=re_xxxxx
RESEND_FROM_EMAIL=noreply@paring.com

# ===== FILE STORAGE (Supabase) =====
# Usually same Supabase project
NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET=documents
SUPABASE_STORAGE_BUCKET=documents

# ===== ERROR TRACKING (Optional) =====
NEXT_PUBLIC_SENTRY_DSN=https://key@sentry.io/project
SENTRY_AUTH_TOKEN=sntrys_...

# ===== LOGGING =====
LOG_LEVEL=debug|info|warn|error

# ===== THIRD-PARTY (Optional) =====
GOOGLE_CLIENT_ID=... # If adding Google OAuth
GOOGLE_CLIENT_SECRET=...
```

### D. Dependencies & Versions

```json
{
  "dependencies": {
    "@prisma/client": "^5.7.0",
    "@supabase/supabase-js": "^2.38.0",
    "bcryptjs": "^2.4.3",
    "framer-motion": "^12.38.0",
    "lucide-react": "^0.577.0",
    "motion": "^12.38.0",
    "next": "16.2.1",
    "next-auth": "^5.0.0",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "recharts": "^3.8.0",
    "swr": "^2.2.0",
    "zod": "^3.22.0",
    "zustand": "^4.4.0"
  },
  "devDependencies": {
    "@playwright/test": "^1.40.0",
    "@tailwindcss/postcss": "^4",
    "@types/bcryptjs": "^2.4.6",
    "@types/jest": "^29.5.0",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@types/next-auth": "^4.3.10",
    "eslint": "^9",
    "eslint-config-next": "16.2.1",
    "jest": "^29.7.0",
    "prisma": "^5.7.0",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### E. Quick Reference Commands

```bash
# ===== DATABASE =====
npx prisma migrate dev --name "description"  # Create migration
npx prisma migrate deploy                    # Apply migrations
npx prisma db push                           # Push schema to DB
npx prisma db seed                           # Run seed script
npx prisma studio                            # Visual DB editor
npx prisma generate                          # Generate Prisma client
npx prisma db reset                          # Reset DB (dev only)

# ===== DEVELOPMENT =====
npm run dev                                  # Start dev server
npm run build                                # Build for production
npm run lint                                 # Run linter
npm run type-check                           # Check TypeScript

# ===== TESTING =====
npm test                                     # Run unit tests
npm run test:e2e                            # Run E2E tests
npm run test:coverage                       # Test coverage report

# ===== DEPLOYMENT =====
npm run build && npm start                   # Local production build
vercel deploy                                # Deploy to Vercel
vercel deploy --prod                         # Deploy to production
```

---

## Summary

This 5-phase implementation plan provides a complete roadmap for transforming PARING from a static prototype to a fully dynamic, production-ready platform. With clear objectives, detailed tasks, success criteria, and comprehensive appendices, the team can execute systematically over ~25 days.

**Key Success Factors:**
1. Follow phases sequentially (don't skip)
2. Complete all success criteria before moving forward
3. Commit code frequently with clear messages
4. Test each feature thoroughly before integration
5. Document any deviations from plan
6. Maintain regular communication with stakeholders

**Next Steps:**
1. Review this document with the team
2. Set up development environment (Phase 1)
3. Create Supabase project
4. Begin Phase 1 implementation
5. Track progress against daily checklists

Good luck with the implementation! 🚀

