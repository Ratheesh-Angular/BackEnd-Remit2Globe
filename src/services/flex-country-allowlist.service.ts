import fs from "fs/promises";
import path from "path";

export type FlexCountryAllowlistFile = {
  couCodes: string[];
};

const FILE_NAME = "flex-country-allowlist.json";

function allowlistPath(): string {
  return path.join(process.cwd(), "data", FILE_NAME);
}

let cache: { couCodes: string[] } | null = null;

export function getCachedAllowlistCodes(): string[] {
  if (!cache) return [];
  return cache.couCodes;
}

export function setCachedAllowlistCodes(couCodes: string[]): void {
  cache = { couCodes };
}

export async function readAllowlist(): Promise<string[]> {
  const p = allowlistPath();
  try {
    const raw = await fs.readFile(p, "utf8");
    const j = JSON.parse(raw) as FlexCountryAllowlistFile;
    const list = Array.isArray(j.couCodes)
      ? j.couCodes.map((c) => String(c).trim().toUpperCase()).filter(Boolean)
      : [];
    cache = { couCodes: list };
    return list;
  } catch {
    cache = { couCodes: [] };
    return [];
  }
}

export async function writeAllowlist(couCodes: string[]): Promise<void> {
  const normalized = Array.from(
    new Set(
      couCodes.map((c) => String(c).trim().toUpperCase()).filter(Boolean),
    ),
  );
  const p = allowlistPath();
  await fs.mkdir(path.dirname(p), { recursive: true });
  const payload: FlexCountryAllowlistFile = { couCodes: normalized };
  await fs.writeFile(p, JSON.stringify(payload, null, 2), "utf8");
  cache = { couCodes: normalized };
}

/** If allowlist is empty, do not filter (all Flex countries are shown). */
export function filterCountriesByAllowlist<T extends { couCode?: string }>(
  rows: T[],
  allowlist: string[],
): T[] {
  if (!allowlist.length) return rows;
  const set = new Set(allowlist.map((c) => c.toUpperCase()));
  return rows.filter((r) => set.has(String(r.couCode ?? "").toUpperCase()));
}
