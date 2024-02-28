import dotenv from "dotenv";

dotenv.config();

type EnvValues = {
  PORT: number | undefined;
};

type ConfigValues = {
  PORT: number;
};

const envValues = getEnvValues();

export default getConfigValues(envValues);

function getEnvValues(): EnvValues {
  return {
    PORT: process.env.PORT ? parseInt(process.env.PORT) : undefined,
  };
}

function getConfigValues(envValues: EnvValues): ConfigValues {
  Object.entries(envValues).map(([key, value]) => {
    if (value === undefined) {
      throw new Error(`Missing key: ${key} in .env file`);
    }
  });

  return envValues as ConfigValues;
}
