import dotenv from "dotenv";

dotenv.config();

type EnvValues = {
  PORT?: number;
  DATABASE_URL?: string;
};

type ConfigValues = Required<EnvValues>;

const envValues: EnvValues = {
  PORT: process.env.PORT ? parseInt(process.env.PORT) : undefined,
  DATABASE_URL: process.env.DATABASE_URL,
};

export default getConfigValues(envValues);

function getConfigValues(envValues: EnvValues): ConfigValues {
  Object.entries(envValues).map(([key, value]) => {
    if (value === undefined) {
      throw new Error(`Missing key: ${key} in .env file`);
    }
  });

  return envValues as ConfigValues;
}
