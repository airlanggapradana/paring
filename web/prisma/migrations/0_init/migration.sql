-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('PATIENT', 'NURSE', 'ADMIN');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'SUSPENDED', 'PENDING_VERIFICATION');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('NON_MEDIS', 'VISIT_CARE', 'LIVE_OUT_CARE', 'LIVE_IN_CARE');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('STR', 'KTP', 'CERTIFICATION');

-- CreateEnum
CREATE TYPE "DocumentStatus" AS ENUM ('PENDING', 'VERIFIED', 'REJECTED');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('WAITING_PAYMENT', 'CONFIRMED', 'ACTIVE', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('UNPAID', 'PENDING', 'PAID', 'FAILED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('BANK_TRANSFER', 'CREDIT_CARD', 'E_WALLET');

-- CreateEnum
CREATE TYPE "SessionStatus" AS ENUM ('SCHEDULED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

-- CreateTable "User"
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable "PatientProfile"
CREATE TABLE "PatientProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL,
    "weight" DOUBLE PRECISION,
    "height" DOUBLE PRECISION,
    "address" TEXT NOT NULL,
    "bloodPressureNormal" TEXT,
    "bloodSugarAverage" DOUBLE PRECISION,
    "hasDiabetes" BOOLEAN NOT NULL DEFAULT false,
    "isBedridden" BOOLEAN NOT NULL DEFAULT false,
    "drugAllergies" TEXT,
    "notes" TEXT,
    "aiConsentGiven" BOOLEAN NOT NULL DEFAULT false,
    "emergencyName" TEXT NOT NULL,
    "emergencyPhone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "PatientProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable "NurseProfile"
CREATE TABLE "NurseProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "yearsExperience" INTEGER NOT NULL,
    "biography" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "serviceArea" TEXT NOT NULL,
    "strNumber" TEXT,
    "strExpiry" TIMESTAMP(3),
    "strVerified" BOOLEAN NOT NULL DEFAULT false,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "totalReviews" INTEGER NOT NULL DEFAULT 0,
    "completedSessions" INTEGER NOT NULL DEFAULT 0,
    "visitCarePricing" DOUBLE PRECISION NOT NULL DEFAULT 150000,
    "liveOutPricing" DOUBLE PRECISION NOT NULL DEFAULT 250000,
    "liveInPricing" DOUBLE PRECISION NOT NULL DEFAULT 3500000,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "NurseProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable "NurseSpecialization"
CREATE TABLE "NurseSpecialization" (
    "id" TEXT NOT NULL,
    "nurseId" TEXT NOT NULL,
    "specialization" TEXT NOT NULL,
    CONSTRAINT "NurseSpecialization_pkey" PRIMARY KEY ("id")
);

-- CreateTable "NurseServiceType"
CREATE TABLE "NurseServiceType" (
    "id" TEXT NOT NULL,
    "nurseId" TEXT NOT NULL,
    "serviceType" "ServiceType" NOT NULL,
    CONSTRAINT "NurseServiceType_pkey" PRIMARY KEY ("id")
);

-- CreateTable "NurseDocument"
CREATE TABLE "NurseDocument" (
    "id" TEXT NOT NULL,
    "nurseId" TEXT NOT NULL,
    "documentType" "DocumentType" NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "verificationStatus" "DocumentStatus" NOT NULL DEFAULT 'PENDING',
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "verifiedAt" TIMESTAMP(3),
    CONSTRAINT "NurseDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable "Service"
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ServiceType" NOT NULL,
    "description" TEXT NOT NULL,
    "basePrice" DOUBLE PRECISION NOT NULL,
    "maxDurationHours" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable "Booking"
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "invoiceNumber" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "nurseId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "requestedDate" TIMESTAMP(3) NOT NULL,
    "requestedTime" TEXT NOT NULL,
    "duration" INTEGER,
    "notes" TEXT,
    "basePrice" DOUBLE PRECISION NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "status" "BookingStatus" NOT NULL DEFAULT 'WAITING_PAYMENT',
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'UNPAID',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),
    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable "Payment"
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "method" "PaymentMethod" NOT NULL,
    "midtransOrderId" TEXT,
    "midtransSnapshot" TEXT,
    "status" "PaymentStatus" NOT NULL DEFAULT 'UNPAID',
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable "MonitoringSession"
CREATE TABLE "MonitoringSession" (
    "id" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "nurseId" TEXT NOT NULL,
    "serviceType" "ServiceType" NOT NULL,
    "departureTime" TIMESTAMP(3),
    "arrivalTime" TIMESTAMP(3),
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3),
    "status" "SessionStatus" NOT NULL DEFAULT 'SCHEDULED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "MonitoringSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable "VitalRecord"
CREATE TABLE "VitalRecord" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "bloodPressureSys" INTEGER,
    "bloodPressureDias" INTEGER,
    "bloodSugar" DOUBLE PRECISION,
    "temperature" DOUBLE PRECISION,
    "heartRate" INTEGER,
    "notes" TEXT,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "VitalRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable "ActivityLog"
CREATE TABLE "ActivityLog" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "emotionalState" TEXT,
    "activityType" TEXT NOT NULL,
    "activityDuration" INTEGER,
    "appetite" TEXT,
    "mood" TEXT,
    "notes" TEXT,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ActivityLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable "SessionReport"
CREATE TABLE "SessionReport" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "observations" TEXT,
    "recommendations" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "SessionReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable "Consultation"
CREATE TABLE "Consultation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "nurseId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Consultation_pkey" PRIMARY KEY ("id")
);

-- CreateTable "Message"
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "consultationId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "readAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable "AiRecommendation"
CREATE TABLE "AiRecommendation" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "recommendedNurseIds" TEXT[],
    "matchScore" DOUBLE PRECISION NOT NULL,
    "reasoning" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "AiRecommendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable "NurseReview"
CREATE TABLE "NurseReview" (
    "id" TEXT NOT NULL,
    "nurseId" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "review" TEXT,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "NurseReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable "EmergencyLog"
CREATE TABLE "EmergencyLog" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "nurseId" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "location" TEXT,
    "status" TEXT NOT NULL,
    "notificationsSent" TEXT[],
    "responseTime" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "EmergencyLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "PatientProfile_userId_key" ON "PatientProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "NurseProfile_userId_key" ON "NurseProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "NurseProfile_strNumber_key" ON "NurseProfile"("strNumber");

-- CreateIndex
CREATE INDEX "NurseProfile_serviceArea_idx" ON "NurseProfile"("serviceArea");

-- CreateIndex
CREATE INDEX "NurseProfile_rating_idx" ON "NurseProfile"("rating");

-- CreateIndex
CREATE UNIQUE INDEX "NurseSpecialization_nurseId_specialization_key" ON "NurseSpecialization"("nurseId", "specialization");

-- CreateIndex
CREATE UNIQUE INDEX "NurseServiceType_nurseId_serviceType_key" ON "NurseServiceType"("nurseId", "serviceType");

-- CreateIndex
CREATE UNIQUE INDEX "NurseDocument_nurseId_documentType_key" ON "NurseDocument"("nurseId", "documentType");

-- CreateIndex
CREATE UNIQUE INDEX "Service_name_key" ON "Service"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_invoiceNumber_key" ON "Booking"("invoiceNumber");

-- CreateIndex
CREATE INDEX "Booking_patientId_idx" ON "Booking"("patientId");

-- CreateIndex
CREATE INDEX "Booking_nurseId_idx" ON "Booking"("nurseId");

-- CreateIndex
CREATE INDEX "Booking_status_idx" ON "Booking"("status");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_bookingId_key" ON "Payment"("bookingId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_midtransOrderId_key" ON "Payment"("midtransOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "SessionReport_sessionId_key" ON "SessionReport"("sessionId");

-- AddForeignKey
ALTER TABLE "PatientProfile" ADD CONSTRAINT "PatientProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NurseProfile" ADD CONSTRAINT "NurseProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NurseSpecialization" ADD CONSTRAINT "NurseSpecialization_nurseId_fkey" FOREIGN KEY ("nurseId") REFERENCES "NurseProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NurseServiceType" ADD CONSTRAINT "NurseServiceType_nurseId_fkey" FOREIGN KEY ("nurseId") REFERENCES "NurseProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NurseDocument" ADD CONSTRAINT "NurseDocument_nurseId_fkey" FOREIGN KEY ("nurseId") REFERENCES "NurseProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "PatientProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_nurseId_fkey" FOREIGN KEY ("nurseId") REFERENCES "NurseProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonitoringSession" ADD CONSTRAINT "MonitoringSession_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonitoringSession" ADD CONSTRAINT "MonitoringSession_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "PatientProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonitoringSession" ADD CONSTRAINT "MonitoringSession_nurseId_fkey" FOREIGN KEY ("nurseId") REFERENCES "NurseProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VitalRecord" ADD CONSTRAINT "VitalRecord_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "MonitoringSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityLog" ADD CONSTRAINT "ActivityLog_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "MonitoringSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SessionReport" ADD CONSTRAINT "SessionReport_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "MonitoringSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_nurseId_fkey" FOREIGN KEY ("nurseId") REFERENCES "NurseProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_consultationId_fkey" FOREIGN KEY ("consultationId") REFERENCES "Consultation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NurseReview" ADD CONSTRAINT "NurseReview_nurseId_fkey" FOREIGN KEY ("nurseId") REFERENCES "NurseProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
