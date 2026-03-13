import { z } from 'zod';

export const CreateNurseSchema = z.object({
  userId: z.uuid({ message: 'userId harus berupa UUID yang valid' }),
  specialization: z.string().min(1, { message: 'Specialization wajib diisi' }),
  experienceYears: z
    .number()
    .int()
    .min(0, { message: 'Pengalaman harus angka positif' }),
});

export type CreateNurseDto = z.infer<typeof CreateNurseSchema>;
