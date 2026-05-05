/**
 * Map internal errors (e.g. Prisma / DB drift) to a safe client-facing message.
 */
export function toPublicApiErrorMessage(
  error: unknown,
  fallback = "Something went wrong. Please try again.",
): string {
  if (!(error instanceof Error) || !error.message?.trim()) {
    return fallback;
  }
  const msg = error.message;
  const m = msg.toLowerCase();
  if (
    m.includes("prisma") ||
    m.includes("invalid `prisma") ||
    (m.includes("column") && m.includes("does not exist")) ||
    m.includes("does not exist in the current database")
  ) {
    return fallback;
  }
  return msg;
}
