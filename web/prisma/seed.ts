import { PrismaClient, UserRole, Gender, ServiceType, DocumentType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Create sample admin user
  const admin = await prisma.user.create({
    data: {
      email: "admin@paring.com",
      password: "hashed-password-here", // Will be hashed in actual implementation
      name: "Admin PARING",
      phone: "+62812345678",
      role: UserRole.ADMIN,
    },
  });
  console.log("✓ Admin user created:", admin.id);

  // Create sample patient users
  const patient1 = await prisma.user.create({
    data: {
      email: "patient1@paring.com",
      password: "hashed-password",
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

  // Create sample nurse users
  const nurse1 = await prisma.user.create({
    data: {
      email: "nurse1@paring.com",
      password: "hashed-password",
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

  // Add nurse specializations
  await prisma.nurseSpecialization.create({
    data: {
      nurseId: nurseProfile1.id,
      specialization: "Perawatan Luka",
    },
  });

  // Add nurse service types
  await prisma.nurseServiceType.create({
    data: {
      nurseId: nurseProfile1.id,
      serviceType: ServiceType.VISIT_CARE,
    },
  });

  // Create services
  const service1 = await prisma.service.create({
    data: {
      name: "Visit Care Service",
      type: ServiceType.VISIT_CARE,
      description: "Kunjungan perawat ke rumah pasien",
      basePrice: 150000,
      maxDurationHours: 2,
    },
  });
  console.log("✓ Service created:", service1.id);

  console.log("✅ Database seed completed successfully!");
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
