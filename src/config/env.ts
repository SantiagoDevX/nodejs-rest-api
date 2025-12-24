import "dotenv/config";

function getEnvVariable(
  key: string,
  defaultValue?: string | number
): string | number {
  const value = process.env[key];
  if (value === undefined || value === "") {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${key} is not set.`);
  }
  return value;
}

export const config = {
  app: {
    port: getEnvVariable("PORT", 3000),
  },
};
