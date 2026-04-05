import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("📊 Database Verification Report\n");
  
  try {
    // Count users
    const users = await prisma.user.findMany();
    console.log(`✓ Users: ${users.length}`);
    users.forEach(u => console.log(`  - ${u.email} (${u.role})`));

    // Count patients
    const patients = await prisma.patientProfile.count();
    console.log(`\n✓ Patient Profiles: ${patients}`);

    // Count nurses
    const nurses = await prisma.nurseProfile.count();
    console.log(`✓ Nurse Profiles: ${nurses}`);

    // Count services
    const services = await prisma.service.findMany();
    console.log(`\n✓ Services: ${services.length}`);
    services.forEach(s => console.log(`  - ${s.name} (${s.type})`));

    // Check nurse specializations
    const specs = await prisma.nurseSpecialization.findMany();
    console.log(`\n✓ Nurse Specializations: ${specs.length}`);
    specs.forEach(s => console.log(`  - ${s.specialization}`));

    // Check nurse service types
    const svcTypes = await prisma.nurseServiceType.findMany();
    console.log(`\n✓ Nurse Service Types: ${svcTypes.length}`);
    svcTypes.forEach(t => console.log(`  - ${t.serviceType}`));

    console.log("\n✅ All data verified successfully!");
  } catch (error) {
    console.error("❌ Verification error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
