import { PrismaClient, UserRole, Gender, ServiceType, DocumentType } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

async function main() {
  console.log("🌱 Starting database seed...");

  try {
    // Clear existing data
    console.log("🧹 Clearing existing data...");
    await prisma.message.deleteMany();
    await prisma.consultation.deleteMany();
    await prisma.nurseReview.deleteMany();
    await prisma.sessionReport.deleteMany();
    await prisma.activityLog.deleteMany();
    await prisma.vitalRecord.deleteMany();
    await prisma.monitoringSession.deleteMany();
    await prisma.payment.deleteMany();
    await prisma.booking.deleteMany();
    await prisma.nurseDocument.deleteMany();
    await prisma.nurseServiceType.deleteMany();
    await prisma.nurseSpecialization.deleteMany();
    await prisma.aiRecommendation.deleteMany();
    await prisma.emergencyLog.deleteMany();
    await prisma.service.deleteMany();
    await prisma.patientProfile.deleteMany();
    await prisma.nurseProfile.deleteMany();
    await prisma.user.deleteMany();

    // Create sample admin user
    const adminPassword = await hashPassword("Admin@123");
    const admin = await prisma.user.create({
      data: {
        email: "admin@paring.com",
        password: adminPassword,
        name: "Admin PARING",
        phone: "+62812345678",
        role: UserRole.ADMIN,
      },
    });
    console.log("✓ Admin user created:", admin.id);
    console.log("  Email: admin@paring.com | Password: Admin@123");

    // Create sample patient users
    const patient1Password = await hashPassword("Patient@123");
    const patient1 = await prisma.user.create({
      data: {
        email: "patient1@paring.com",
        password: patient1Password,
        name: "Ibu Siti",
        phone: "+62812345679",
        role: UserRole.PATIENT,
      },
    });

    const patientProfile1 = await prisma.patientProfile.create({
      data: {
        userId: patient1.id,
        fullName: "Ibu Siti Nurhaliza",
        age: 65,
        gender: Gender.FEMALE,
        weight: 65,
        height: 155,
        address: "Jakarta, Indonesia",
        bloodPressureNormal: "120/80",
        hasDiabetes: true,
        isBedridden: false,
        emergencyName: "Andi Siti",
        emergencyPhone: "+62812345680",
      },
    });
    console.log("✓ Patient profile created:", patientProfile1.id);
    console.log("  Email: patient1@paring.com | Password: Patient@123");

    // Create sample nurse users
    const nurse1Password = await hashPassword("Nurse@123");
    const nurse1 = await prisma.user.create({
      data: {
        email: "nurse1@paring.com",
        password: nurse1Password,
        name: "Suster Rina",
        phone: "+62812345681",
        role: UserRole.NURSE,
      },
    });

    const nurseProfile1 = await prisma.nurseProfile.create({
      data: {
        userId: nurse1.id,
        yearsExperience: 8,
        biography: "Perawat berpengalaman dengan sertifikasi internasional",
        availability: "Senin-Jumat",
        serviceArea: "Jakarta Selatan",
        strNumber: "STR001",
        strExpiry: new Date("2025-12-31"),
        strVerified: true,
        visitCarePricing: 150000,
        liveOutPricing: 250000,
        liveInPricing: 3500000,
      },
    });
    console.log("✓ Nurse profile created:", nurseProfile1.id);
    console.log("  Email: nurse1@paring.com | Password: Nurse@123");

    // Add nurse specializations
    await prisma.nurseSpecialization.create({
      data: {
        nurseId: nurseProfile1.id,
        specialization: "Perawatan Luka",
      },
    });

    await prisma.nurseSpecialization.create({
      data: {
        nurseId: nurseProfile1.id,
        specialization: "Perawatan Hipertensi",
      },
    });

    // Add nurse service types
    await prisma.nurseServiceType.create({
      data: {
        nurseId: nurseProfile1.id,
        serviceType: ServiceType.VISIT_CARE,
      },
    });

    await prisma.nurseServiceType.create({
      data: {
        nurseId: nurseProfile1.id,
        serviceType: ServiceType.LIVE_OUT_CARE,
      },
    });

    // Create services
    const service1 = await prisma.service.create({
      data: {
        name: "Visit Care Service",
        type: ServiceType.VISIT_CARE,
        description: "Kunjungan perawat ke rumah pasien untuk pemeriksaan rutin",
        basePrice: 150000,
        maxDurationHours: 2,
      },
    });

    const service2 = await prisma.service.create({
      data: {
        name: "Live Out Care",
        type: ServiceType.LIVE_OUT_CARE,
        description: "Perawatan seharian tanpa tinggal di rumah pasien",
        basePrice: 250000,
        maxDurationHours: 8,
      },
    });

    const service3 = await prisma.service.create({
      data: {
        name: "Live In Care",
        type: ServiceType.LIVE_IN_CARE,
        description: "Perawatan 24 jam dengan tinggal di rumah pasien",
        basePrice: 3500000,
        maxDurationHours: null,
      },
    });

    console.log("✓ Services created successfully");

    console.log("\n✅ Database seed completed successfully!");
    console.log("\n📊 Seeded Data Summary:");
    console.log("  - 1 Admin user");
    console.log("  - 1 Patient with profile");
    console.log("  - 1 Nurse with profile, specializations, and service types");
    console.log("  - 3 Services");
  } catch (error) {
    console.error("❌ Seed error:", error);
    throw error;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seed error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
