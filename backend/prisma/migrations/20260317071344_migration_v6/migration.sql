-- DropForeignKey
ALTER TABLE "CareLog" DROP CONSTRAINT "CareLog_nurseId_fkey";

-- AddForeignKey
ALTER TABLE "CareLog" ADD CONSTRAINT "CareLog_nurseId_fkey" FOREIGN KEY ("nurseId") REFERENCES "NurseProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
