import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // Check _prisma_migrations table
    const migrations = await prisma.$queryRaw`
      SELECT * FROM "_prisma_migrations" 
      ORDER BY "started_at" DESC;
    `;
    
    console.log("📋 Prisma Migrations Status:");
    console.log(migrations);
    
    // Count all tables
    const tables = await prisma.$queryRaw`
      SELECT COUNT(*) as table_count
      FROM information_schema.tables 
      WHERE table_schema = 'public';
    `;
    
    console.log("\n📊 Table Count:", tables);
    
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
