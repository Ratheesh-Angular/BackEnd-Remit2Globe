/**
 * Map onboarding/API profile payload to DB fields: structured `residenceAddress` JSON
 * and legacy `residentialAddress` one-liner. Matches frontend `residenceAddress` shape.
 */
function trimString(v: unknown): string {
  if (v == null) return "";
  if (typeof v === "string") return v.trim();
  return String(v).trim();
}

export function parseResidenceForDb(data: {
  country?: unknown;
  residenceAddress?: unknown;
}): {
  residenceAddress: Record<string, string> | null;
  residentialAddress: string | null;
} {
  const nested = data.residenceAddress;

  if (!nested || typeof nested !== "object" || Array.isArray(nested)) {
    return { residenceAddress: null, residentialAddress: null };
  }

  const raw = nested as Record<string, unknown>;
  const line1 = trimString(raw.line1);
  const line2 = trimString(raw.line2);
  const city = trimString(raw.city);
  const state = trimString(raw.state);
  const postalCode = trimString(raw.postalCode);
  const country = trimString(raw.country) || trimString(data.country);

  const hasAny = [line1, line2, city, state, postalCode, country].some(
    (s) => s.length > 0,
  );
  if (!hasAny) {
    return { residenceAddress: null, residentialAddress: null };
  }

  const residenceAddress: Record<string, string> = {};
  if (line1) residenceAddress.line1 = line1;
  if (line2) residenceAddress.line2 = line2;
  if (city) residenceAddress.city = city;
  if (state) residenceAddress.state = state;
  if (postalCode) residenceAddress.postalCode = postalCode;
  if (country) residenceAddress.country = country;

  const lineParts = [line1, line2, city, state, postalCode, country].filter(
    (s) => s.length > 0,
  );
  const residentialAddress = lineParts.length
    ? lineParts.join(", ")
    : null;

  return { residenceAddress, residentialAddress };
}
