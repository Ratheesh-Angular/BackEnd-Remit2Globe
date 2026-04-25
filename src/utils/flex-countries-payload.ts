export type FlexCountryRow = { couCode?: string; couName?: string };

export function extractCountryRows(flexJson: unknown): FlexCountryRow[] {
  if (!flexJson || typeof flexJson !== "object") return [];
  const d = flexJson as Record<string, unknown>;
  const inner = d.data;
  if (inner && typeof inner === "object" && "data" in inner) {
    const arr = (inner as { data?: unknown }).data;
    if (Array.isArray(arr)) return arr as FlexCountryRow[];
  }
  if (Array.isArray((d as { data?: unknown }).data)) {
    return (d as { data: FlexCountryRow[] }).data;
  }
  return [];
}

export function setCountryRowsInPayload(
  flexJson: unknown,
  newRows: FlexCountryRow[],
): unknown {
  if (!flexJson || typeof flexJson !== "object") return flexJson;
  const d = flexJson as Record<string, unknown>;
  if (d.data && typeof d.data === "object" && "data" in (d.data as object)) {
    const inner = d.data as Record<string, unknown>;
    return {
      ...d,
      data: { ...inner, data: newRows },
    };
  }
  if (Array.isArray((d as { data?: unknown }).data)) {
    return { ...d, data: newRows };
  }
  return flexJson;
}
