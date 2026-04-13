import crypto from "crypto";

// yyyyMMddHHmmss
export const generateTimestamp = (): string => {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    now.getFullYear().toString() +
    pad(now.getMonth() + 1) +
    pad(now.getDate()) +
    pad(now.getHours()) +
    pad(now.getMinutes()) +
    pad(now.getSeconds())
  );
};

export const generateMD5 = (
  userCode: string,
  timestamp: string,
  rawPassword: string,
): string => {
  const raw = `${userCode}${timestamp}${rawPassword}`;
  return crypto.createHash("md5").update(raw).digest("hex");
};
