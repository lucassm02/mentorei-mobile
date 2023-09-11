import AsyncStorage from "@react-native-async-storage/async-storage";

const allowedTypes = [
  "string",
  "number",
  "bigint",
  "boolean",
  "undefined",
  "object",
];

type Payload = { type: string; value: string };

const convertValueToString = (value: unknown, valueType: string): string => {
  if (valueType === "string") return value as string;

  if (valueType === "object") {
    return JSON.stringify(value);
  }

  return String(value);
};

const convertValueToOriginalType = (value: string, originalType: string) => {
  if (originalType === "string") return value;
  if (originalType === "undefined") return undefined;

  const handlers = {
    number: Number,
    bigint: BigInt,
    boolean: Boolean,
  };

  if (originalType === "object") {
    return JSON.parse(value);
  }

  const handler = handlers[originalType as keyof typeof handlers];

  return handler(value);
};

export const setItem = async (key: string, value: unknown) => {
  const valueType = typeof value;

  if (!allowedTypes.includes(valueType))
    throw new Error("Value type not allowed");

  const valueToString = convertValueToString(value, valueType);
  const payload = JSON.stringify({ type: valueType, value: valueToString });

  await AsyncStorage.setItem(key, payload);
  await AsyncStorage.setItem(key, payload);
};

export const getItem = async <T>(key: string): Promise<T | undefined> => {
  const payloadToString = await AsyncStorage.getItem(key);

  if (!payloadToString) {
    return undefined;
  }

  const { type, value }: Payload = JSON.parse(payloadToString);
  return convertValueToOriginalType(value, type);
};

export const removeItem = async (key: string): Promise<void> => {
  await AsyncStorage.removeItem(key);
};
