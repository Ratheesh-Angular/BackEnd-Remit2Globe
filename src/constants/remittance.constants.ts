/** ISO 3166-1 alpha-2: African countries where we offer USD as alternate pay currency + mobile pay-in. */
export const AFRICAN_SENDER_MOBILE_PAYIN_ISO2 = new Set([
  "KE",
  "TZ",
  "UG",
  "RW",
  "GH",
  "NG",
  "ZA",
  "ZM",
  "ZW",
  "SN",
  "CI",
  "CM",
  "ET",
]);

export const COUNTRY_META: Record<
  string,
  { name: string; currency: string; african: boolean }
> = {
  US: { name: "United States", currency: "USD", african: false },
  GB: { name: "United Kingdom", currency: "GBP", african: false },
  IN: { name: "India", currency: "INR", african: false },
  KE: { name: "Kenya", currency: "KES", african: true },
  TZ: { name: "Tanzania", currency: "TZS", african: true },
  UG: { name: "Uganda", currency: "UGX", african: true },
  RW: { name: "Rwanda", currency: "RWF", african: true },
  GH: { name: "Ghana", currency: "GHS", african: true },
  NG: { name: "Nigeria", currency: "NGN", african: true },
  ZA: { name: "South Africa", currency: "ZAR", african: true },
  AE: { name: "United Arab Emirates", currency: "AED", african: false },
  SA: { name: "Saudi Arabia", currency: "SAR", african: false },
  PK: { name: "Pakistan", currency: "PKR", african: false },
  BD: { name: "Bangladesh", currency: "BDT", african: false },
  PH: { name: "Philippines", currency: "PHP", african: false },
};

/**
 * Dev-only FX table. Convention for `USD_XXX`: units of XXX per 1 USD.
 * Used when no admin `FxRate` row exists; also enables triangulation for any pair with USD legs.
 */
export const SANDBOX_FX_FALLBACK: Record<string, number> = {
  USD_INR: 83.0,
  USD_KES: 129.0,
  USD_TZS: 2580,
  USD_UGX: 3850,
  USD_GBP: 0.79,
  USD_EUR: 0.92,
  USD_NGN: 1550,
  USD_GHS: 15.2,
  USD_ZAR: 18.5,
  USD_PKR: 278.0,
  USD_BDT: 110.0,
  USD_PHP: 56.0,
  USD_AED: 3.67,
  USD_SAR: 3.75,
  USD_RWF: 1380,
  GBP_INR: 105.0,
  EUR_INR: 90.0,
  TZS_INR: 0.032,
  UGX_INR: 0.022,
  /** Explicit dev corridors */
  INR_KES: 1.553,
  KES_INR: 0.643,
  INR_USD: 0.01205,
  KES_USD: 0.00775,
};

/** When quoting from sandbox / triangulation (no admin row): fee % of gross receive in destination currency. */
export const SANDBOX_DEV_FEE_PERCENT = 0.75;

/** Fixed fee in receive currency (dev); increase for testing fixed component. */
export const SANDBOX_DEV_FEE_FIXED = 0;

/**
 * Indicative rate: units of `to` per one unit of `from`.
 * 1) Direct `FROM_TO` in SANDBOX_FX_FALLBACK
 * 2) Else via USD: (USD_TO) / (USD_FROM) where USD_X = units of X per $1
 */
export function resolveSandboxFallbackRate(
  fromCurrency: string,
  toCurrency: string,
): number | null {
  const from = fromCurrency.toUpperCase();
  const to = toCurrency.toUpperCase();
  if (from === to) return 1;

  const directKey = `${from}_${to}` as keyof typeof SANDBOX_FX_FALLBACK;
  const direct = SANDBOX_FX_FALLBACK[directKey];
  if (direct != null) return direct;

  const usdFromKey = `USD_${from}` as keyof typeof SANDBOX_FX_FALLBACK;
  const usdToKey = `USD_${to}` as keyof typeof SANDBOX_FX_FALLBACK;
  const usdFrom = from === "USD" ? 1 : SANDBOX_FX_FALLBACK[usdFromKey];
  const usdTo = to === "USD" ? 1 : SANDBOX_FX_FALLBACK[usdToKey];

  if (usdFrom == null || usdTo == null) return null;
  if (from === "USD") return usdTo;
  if (to === "USD") return 1 / usdFrom;
  return usdTo / usdFrom;
}

export const SOURCE_OF_INCOME_OPTIONS = [
  { value: "SALARY", label: "Salary / wages" },
  { value: "BUSINESS", label: "Business income" },
  { value: "SAVINGS", label: "Savings / investments" },
  { value: "FAMILY", label: "Family support received" },
  { value: "OTHER", label: "Other (declared lawful)" },
];

export const TRANSFER_PURPOSE_OPTIONS = [
  { value: "FAMILY_SUPPORT", label: "Family support" },
  { value: "EDUCATION", label: "Education" },
  { value: "MEDICAL", label: "Medical expenses" },
  { value: "GIFT", label: "Gift" },
  { value: "SAVINGS", label: "Savings / investment" },
  { value: "BUSINESS", label: "Business payment" },
  { value: "OTHER", label: "Other" },
];

export const RELATIONSHIP_OPTIONS = [
  { value: "FAMILY", label: "Family" },
  { value: "FRIEND", label: "Friend" },
  { value: "SELF", label: "Self" },
  { value: "BUSINESS", label: "Business partner" },
  { value: "OTHER", label: "Other" },
];
