const port = process.env.PORT?.trim() || "5000";

function resolveStkCallbackUrl(): string {
  const direct = process.env.FLEX_STK_CALLBACK_URL?.trim();
  if (direct) return direct;

  const base = [
    process.env.PUBLIC_API_BASE_URL,
    process.env.API_PUBLIC_URL,
    process.env.BACKEND_URL,
    process.env.API_URL,
  ]
    .map((s) => s?.trim())
    .find(Boolean);
  if (base) {
    const b = base.replace(/\/$/, "");
    return `${b}/api/flex/stk-callback`;
  }

  // Local dev: Flex still receives this URL on the request; use ngrok/HTTPS in prod for real callbacks.
  if (process.env.NODE_ENV !== "production") {
    return `http://localhost:${port}/api/flex/stk-callback`;
  }

  return "";
}

export const flexConfig = {
  baseURL: process.env.FLEX_BASE_URL!,
  clientId: process.env.FLEX_CLIENT_ID!,
  clientSecret: process.env.FLEX_CLIENT_SECRET!,
  userCode: process.env.FLEX_USER_CODE!,
  rawPassword: process.env.FLEX_RAW_PASSWORD!,
  stkCallbackUrl: resolveStkCallbackUrl(),
};
