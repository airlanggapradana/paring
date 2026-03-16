import { z } from 'zod';
import * as dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  DATABASE_URL: z.url(),
  JWT_SECRET: z.string().min(1),
  IS_PRODUCTION: z.preprocess(
    (val) => (typeof val === 'string' ? val.toLowerCase() === 'true' : val),
    z.boolean(),
  ).default(false),
});

export type Env = z.infer<typeof envSchema>;

export const env = envSchema.parse(process.env);
