import { Request, Response } from "express";
import {
  readAllowlist,
  writeAllowlist,
} from "../services/flex-country-allowlist.service";
import { extractCountryRows } from "../utils/flex-countries-payload";
import { getStaticFlexCountriesPayload } from "../utils/static-country-catalog";

export const getAdminFlexCountriesController = async (
  _req: Request,
  res: Response,
) => {
  try {
    const data = getStaticFlexCountriesPayload();
    res.json({ success: true, data });
  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error("Admin flex countries error:", err?.message ?? error);
    res.status(500).json({
      success: false,
      error: err?.message ?? "Failed to load countries",
    });
  }
};

export const getCountryAllowlistController = async (
  _req: Request,
  res: Response,
) => {
  try {
    const couCodes = await readAllowlist();
    res.json({ success: true, data: { couCodes } });
  } catch (error: unknown) {
    const err = error as { message?: string };
    res.status(500).json({
      success: false,
      error: err?.message ?? "Failed to read allowlist",
    });
  }
};

export const putCountryAllowlistController = async (
  req: Request,
  res: Response,
) => {
  try {
    const body = req.body as { couCodes?: unknown };
    const raw = body?.couCodes;
    if (!Array.isArray(raw)) {
      return res.status(400).json({
        success: false,
        error: "Body must include couCodes: string[]",
      });
    }
    const flex = getStaticFlexCountriesPayload();
    const validCodes = new Set(
      extractCountryRows(flex)
        .map((r) => String(r.couCode ?? "").trim().toUpperCase())
        .filter(Boolean),
    );
    const requested = raw.map((c) => String(c).trim().toUpperCase());
    const unknown = requested.filter((c) => c && !validCodes.has(c));
    if (unknown.length) {
      return res.status(400).json({
        success: false,
        error: `Unknown couCode(s): ${unknown.slice(0, 10).join(", ")}${unknown.length > 10 ? "…" : ""}`,
      });
    }
    await writeAllowlist(requested);
    res.json({ success: true, data: { couCodes: requested } });
  } catch (error: unknown) {
    const err = error as { message?: string };
    res.status(500).json({
      success: false,
      error: err?.message ?? "Failed to save allowlist",
    });
  }
};
