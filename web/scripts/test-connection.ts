import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    console.log("🔄 Testing database connection...");
    
    // Simple query to test connection
    const result = await prisma.$queryRaw`SELECT NOW()`;
    console.log("✅ Database connection successful!");
    console.log("Current time:", result);
    
    // Check if tables exist
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `;
    
    console.log("\n📊 Existing tables:");
    console.log(tables);
    
  } catch (error) {
    console.error("❌ Connection error:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
