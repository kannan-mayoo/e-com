export const COUPON_CODES = {
  BFRIDAY: "BFRIDAY",
  XMAS2021: "XMAS2025",
  NY2022: "NY2026",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
