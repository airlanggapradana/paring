import { z } from 'zod';
import { CreateNurseSchema } from './create-nurse.dto';

export const UpdateNurseSchema = CreateNurseSchema.omit({ userId: true }).partial();

export type UpdateNurseDto = z.infer<typeof UpdateNurseSchema>;
