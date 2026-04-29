import rawList from "./countryList.json";
import type { FlexCountryRow } from "./flex-countries-payload";

function normalizeRows(): FlexCountryRow[] {
  const seen = new Set<string>();
  const rows: FlexCountryRow[] = [];
  for (const r of rawList as { couCode?: string; couName?: string }[]) {
    const couCode = String(r.couCode ?? "").trim().toUpperCase();
    const couName = String(r.couName ?? "").trim();
    if (!couCode || !couName || seen.has(couCode)) continue;
    seen.add(couCode);
    rows.push({ couCode, couName });
  }
  rows.sort((a, b) =>
    String(a.couName ?? "").localeCompare(String(b.couName ?? "")),
  );
  return rows;
}

/**
 * Bundled country catalog in the same nested shape Flex returned, so
 * `extractCountryRows` / `setCountryRowsInPayload` and admin `parseFlexRows` keep working.
 */
export function getStaticFlexCountriesPayload(): {
  data: { data: FlexCountryRow[] };
} {
  return { data: { data: normalizeRows() } };
}
