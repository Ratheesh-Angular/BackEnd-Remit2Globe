import { flexClient } from "./flex.client";
import { flexConfig } from "./flex.config";
import type { FlexStkPushRequest } from "./flex.types";
import { generateTimestamp, generateMD5 } from "./flex.utils";

// 🔹 Optional: MD5 (only if required by specific APIs)
export const generateFlexMD5 = () => {
  const timestamp = generateTimestamp();

  const md5 = generateMD5(
    flexConfig.userCode,
    timestamp,
    flexConfig.rawPassword,
  );

  return { timestamp, md5 };
};

// 🔹 Example: Generic GET call
export const getFlexData = async () => {
  return await flexClient.request("GET", "/some-endpoint");
};

// 🔹 Example: Generic POST call
export const postFlexData = async (payload: any) => {
  return await flexClient.request("POST", "/some-endpoint", payload);
};

// ✅ Get Banks by Country
export const getFlexBanks = async (couCode: string) => {
  const timestamp = generateTimestamp();

  const md5 = generateMD5(
    flexConfig.userCode,
    timestamp,
    flexConfig.rawPassword,
  );

  const token = await flexClient.getAccessToken();

  const response = await fetch(`${flexConfig.baseURL}/banks`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "x-userId": flexConfig.userCode,
      "x-password": md5,
      "x-timestamp": timestamp,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      couCode, // ✅ important
    }),
  });

  const data = await response.json();
  return data;
};

async function flexProtectedJsonHeaders(): Promise<Record<string, string>> {
  const timestamp = generateTimestamp();
  const md5 = generateMD5(
    flexConfig.userCode,
    timestamp,
    flexConfig.rawPassword,
  );
  const token = await flexClient.getAccessToken();
  return {
    Authorization: `Bearer ${token}`,
    "x-userId": flexConfig.userCode,
    "x-password": md5,
    "x-timestamp": timestamp,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
}

/** Digits only — Flex expects MSISDN without spaces or `+`. */
export function normalizeMsisdn(raw: string): string {
  return raw.replace(/\D/g, "");
}

/** Public HTTPS URL Flex will POST payment results to. */
export function getFlexStkCallbackUrl(): string {
  const url = flexConfig.stkCallbackUrl?.trim();
  if (!url) {
    throw new Error(
      "Set FLEX_STK_CALLBACK_URL or PUBLIC_API_BASE_URL (HTTPS) so Flex can POST STK results in production.",
    );
  }
  return url;
}

/**
 * POST /stkPush — triggers M-Pesa-style STK on the payer phone (sandbox: Flex testbed).
 */
export async function initiateStkPush(
  payload: FlexStkPushRequest,
): Promise<unknown> {
  const base = flexConfig.baseURL.replace(/\/$/, "");
  const headers = await flexProtectedJsonHeaders();
  const res = await fetch(`${base}/stkPush`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      transactionReference: payload.transactionReference,
      msisdn: payload.msisdn,
      collectionAmount: payload.collectionAmount,
      paymentDesc: payload.paymentDesc,
      callbackUrl: payload.callbackUrl,
    }),
  });

  const text = await res.text();
  let body: unknown;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }

  if (!res.ok) {
    const msg =
      typeof body === "object" &&
      body !== null &&
      "message" in body &&
      (body as { message?: unknown }).message != null
        ? String((body as { message: unknown }).message)
        : text || res.statusText;
    throw new Error(`Flex STK failed (${res.status}): ${msg}`);
  }

  return body;
}
