import { z } from 'zod';
import { createCarelogSchema } from './create-carelog.dto';

export const updateCarelogSchema = createCarelogSchema.partial();

export type UpdateCarelogDto = z.infer<typeof updateCarelogSchema>;
