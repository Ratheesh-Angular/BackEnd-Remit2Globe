import crypto from "crypto";

// yyyyMMddHHmmss
// export const generateTimestamp = (): string => {
//   const now = new Date();
//   const pad = (n: number) => n.toString().padStart(2, "0");

//   return (
//     now.getFullYear().toString() +
//     pad(now.getMonth() + 1) +
//     pad(now.getDate()) +
//     pad(now.getHours()) +
//     pad(now.getMinutes()) +
//     pad(now.getSeconds())
//   );
// };

// yyyyMMddHHmmss (UTC)
export const generateTimestamp = (): string => {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    now.getUTCFullYear().toString() +
    pad(now.getUTCMonth() + 1) +
    pad(now.getUTCDate()) +
    pad(now.getUTCHours()) +
    pad(now.getUTCMinutes()) +
    pad(now.getUTCSeconds())
  );
};

export const generateMD5 = (
  userCode: string,
  timestamp: string,
  rawPassword: string,
): string => {
  const raw = `${userCode}${rawPassword}${timestamp}`;
  return crypto.createHash("md5").update(raw).digest("hex");
};
