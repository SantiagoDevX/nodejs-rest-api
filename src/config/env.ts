import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  DATABASE_HOST: z.string({
    error: "'DATABASE_HOST' es obligatoria",
  }),
  DATABASE_USER: z.string({
    error: "'DATABASE_USER' es obligatoria",
  }),
  DATABASE_PASSWORD: z.string({
    error: "'DATABASE_PASSWORD' es obligatoria",
  }),
  DATABASE_NAME: z.string({
    error: "'DATABASE_NAME' es obligatoria",
  }),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.log("Error de Configuracion del entorno\n");
  parsedEnv.error.issues.forEach((issue) => {
    console.log(`- ${issue.message}`);
  });

  process.exit(1);
}

export const env = parsedEnv.data;
