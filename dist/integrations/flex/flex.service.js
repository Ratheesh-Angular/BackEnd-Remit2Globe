"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFlexBanks = exports.getFlexCountries = exports.postFlexData = exports.getFlexData = exports.generateFlexMD5 = void 0;
exports.normalizeMsisdn = normalizeMsisdn;
exports.getFlexStkCallbackUrl = getFlexStkCallbackUrl;
exports.initiateStkPush = initiateStkPush;
const flex_client_1 = require("./flex.client");
const flex_config_1 = require("./flex.config");
const flex_utils_1 = require("./flex.utils");
// 🔹 Optional: MD5 (only if required by specific APIs)
const generateFlexMD5 = () => {
    const timestamp = (0, flex_utils_1.generateTimestamp)();
    const md5 = (0, flex_utils_1.generateMD5)(flex_config_1.flexConfig.userCode, timestamp, flex_config_1.flexConfig.rawPassword);
    return { timestamp, md5 };
};
exports.generateFlexMD5 = generateFlexMD5;
// 🔹 Example: Generic GET call
const getFlexData = async () => {
    return await flex_client_1.flexClient.request("GET", "/some-endpoint");
};
exports.getFlexData = getFlexData;
// 🔹 Example: Generic POST call
const postFlexData = async (payload) => {
    return await flex_client_1.flexClient.request("POST", "/some-endpoint", payload);
};
exports.postFlexData = postFlexData;
// ✅ Get Countries
const getFlexCountries = async () => {
    const timestamp = (0, flex_utils_1.generateTimestamp)();
    const md5 = (0, flex_utils_1.generateMD5)(flex_config_1.flexConfig.userCode, timestamp, flex_config_1.flexConfig.rawPassword);
    const token = await flex_client_1.flexClient.getAccessToken();
    console.log({
        userId: flex_config_1.flexConfig.userCode,
        timestamp,
        md5,
        token,
    }, "flexConfig");
    const response = await fetch(`${flex_config_1.flexConfig.baseURL}/countries`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "x-userId": flex_config_1.flexConfig.userCode,
            "x-password": md5,
            "x-timestamp": timestamp,
            Accept: "application/json",
        },
    });
    const data = await response.json();
    return data;
};
exports.getFlexCountries = getFlexCountries;
// ✅ Get Banks by Country
const getFlexBanks = async (couCode) => {
    const timestamp = (0, flex_utils_1.generateTimestamp)();
    const md5 = (0, flex_utils_1.generateMD5)(flex_config_1.flexConfig.userCode, timestamp, flex_config_1.flexConfig.rawPassword);
    const token = await flex_client_1.flexClient.getAccessToken();
    const response = await fetch(`${flex_config_1.flexConfig.baseURL}/banks`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "x-userId": flex_config_1.flexConfig.userCode,
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
exports.getFlexBanks = getFlexBanks;
async function flexProtectedJsonHeaders() {
    const timestamp = (0, flex_utils_1.generateTimestamp)();
    const md5 = (0, flex_utils_1.generateMD5)(flex_config_1.flexConfig.userCode, timestamp, flex_config_1.flexConfig.rawPassword);
    const token = await flex_client_1.flexClient.getAccessToken();
    return {
        Authorization: `Bearer ${token}`,
        "x-userId": flex_config_1.flexConfig.userCode,
        "x-password": md5,
        "x-timestamp": timestamp,
        Accept: "application/json",
        "Content-Type": "application/json",
    };
}
/** Digits only — Flex expects MSISDN without spaces or `+`. */
function normalizeMsisdn(raw) {
    return raw.replace(/\D/g, "");
}
/** Public HTTPS URL Flex will POST payment results to. */
function getFlexStkCallbackUrl() {
    const url = flex_config_1.flexConfig.stkCallbackUrl?.trim();
    if (!url) {
        throw new Error("Set FLEX_STK_CALLBACK_URL or PUBLIC_API_BASE_URL (HTTPS) so Flex can POST STK results in production.");
    }
    return url;
}
/**
 * POST /stkPush — triggers M-Pesa-style STK on the payer phone (sandbox: Flex testbed).
 */
async function initiateStkPush(payload) {
    const base = flex_config_1.flexConfig.baseURL.replace(/\/$/, "");
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
    let body;
    try {
        body = text ? JSON.parse(text) : null;
    }
    catch {
        body = text;
    }
    if (!res.ok) {
        const msg = typeof body === "object" &&
            body !== null &&
            "message" in body &&
            body.message != null
            ? String(body.message)
            : text || res.statusText;
        throw new Error(`Flex STK failed (${res.status}): ${msg}`);
    }
    return body;
}
