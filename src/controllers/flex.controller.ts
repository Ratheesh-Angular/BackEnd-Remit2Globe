import { Request, Response } from "express";
import { flexClient } from "../integrations/flex/flex.client";
import {
  generateFlexMD5,
  getFlexBanks,
} from "../integrations/flex/flex.service";
import {
  filterCountriesByAllowlist,
  readAllowlist,
} from "../services/flex-country-allowlist.service";
import {
  extractCountryRows,
  setCountryRowsInPayload,
} from "../utils/flex-countries-payload";
import { getStaticFlexCountriesPayload } from "../utils/static-country-catalog";
// ✅ Test Token
export const getFlexTokenController = async (req: Request, res: Response) => {
  try {
    const data = await flexClient.getRawToken();

    res.json({
      success: true,
      data,
    });
  } catch (error: any) {
    console.error("Token Error:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      error: error.response?.data || error.message,
    });
  }
};

// ✅ Test MD5
export const getFlexMD5Controller = async (req: Request, res: Response) => {
  try {
    const data = generateFlexMD5();

    res.json({
      success: true,
      data,
    });
  } catch (error: any) {
    console.error("MD5 Error:", error.message);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// ✅ Generic API tester
export const testFlexProtectedAPI = async (req: Request, res: Response) => {
  try {
    // replace with actual endpoint later
    const data = await flexClient.request("GET", "/");

    res.json({
      success: true,
      data,
    });
  } catch (error: any) {
    console.error("Flex API Error:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      error: error.response?.data || error.message,
    });
  }
};

export const getFlexCountriesController = async (
  _req: Request,
  res: Response,
) => {
  try {
    const data = getStaticFlexCountriesPayload();
    const allowlist = await readAllowlist();
    const rows = extractCountryRows(data);
    const payload =
      allowlist.length > 0 && rows.length > 0
        ? setCountryRowsInPayload(
            data,
            filterCountriesByAllowlist(rows, allowlist),
          )
        : data;

    res.json({
      success: true,
      data: payload,
    });
  } catch (error: any) {
    console.error("Countries Error:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      error: error.response?.data || error.message,
    });
  }
};

export const getFlexBanksController = async (req: Request, res: Response) => {
  try {
    const data = await getFlexBanks(req.params.couCode as string);

    res.json({
      success: true,
      data,
    });
  } catch (error: any) {
    console.error("Banks Error:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      error: error.response?.data || error.message,
    });
  }
};

/** Flex server-to-server callback after STK; extend when payload shape is confirmed. */
export const flexStkCallbackController = async (
  req: Request,
  res: Response,
) => {
  try {
    console.info("[Flex STK callback]", JSON.stringify(req.body ?? {}));
    res.status(200).json({ ok: true });
  } catch (e: unknown) {
    console.error("[Flex STK callback] error", e);
    res.status(200).json({ ok: true });
  }
};
