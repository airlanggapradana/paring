import { z } from 'zod';

export const createCarelogSchema = z.object({
  appointmentId: z.uuid({ message: 'Invalid appointment ID' }),
  patientId: z.uuid({ message: 'Invalid patient ID' }),
  nurseId: z.uuid({ message: 'Invalid nurse ID' }),
  systolic: z.number().int().positive().optional(),
  diastolic: z.number().int().positive().optional(),
  bloodSugar: z.number().positive().optional(),
  cholesterol: z.number().positive().optional(),
  uricAcid: z.number().positive().optional(),
  woundCondition: z.string().optional(),
  moodScore: z.number().int().min(1).max(5).optional(),
  clinicalNotes: z.string().optional(),
});

export type CreateCarelogDto = z.infer<typeof createCarelogSchema>;
