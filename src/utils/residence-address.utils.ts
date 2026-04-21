import type { Prisma } from "../generated/prisma";

export type ResidenceAddressPayload = {
  line1: string;
  line2: string | null;
  city: string;
  state: string;
  postalCode: string | null;
};

/** Map API `residenceAddress` + legacy `residentialAddress` into DB fields. */
export function parseResidenceForDb(data: {
  residenceAddress?: unknown;
  residentialAddress?: string | null;
}): {
  residenceAddress: Prisma.InputJsonValue | null;
  residentialAddress: string | null;
} {
  const r = data.residenceAddress;
  if (!r || typeof r !== "object" || Array.isArray(r)) {
    return {
      residenceAddress: null,
      residentialAddress: data.residentialAddress ?? null,
    };
  }
  const o = r as Record<string, unknown>;
  const line1 = String(o.line1 ?? "").trim();
  const line2Raw = String(o.line2 ?? "").trim();
  const city = String(o.city ?? "").trim();
  const state = String(o.state ?? "").trim();
  const postalRaw = String(o.postalCode ?? "").trim();

  const normalized: ResidenceAddressPayload = {
    line1,
    line2: line2Raw || null,
    city,
    state,
    postalCode: postalRaw || null,
  };

  const legacy = [line1, line2Raw || null, city, state, postalRaw || null]
    .filter((x) => x != null && String(x).trim() !== "")
    .join(", ");

  if (!line1 && !city && !state && !line2Raw && !postalRaw) {
    return {
      residenceAddress: null,
      residentialAddress: data.residentialAddress ?? null,
    };
  }

  return {
    residenceAddress:
      normalized as unknown as Prisma.InputJsonValue,
    residentialAddress: legacy || null,
  };
}
