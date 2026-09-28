/**
 * Formats phone input as the visitor types.
 *
 * North American numbers (with or without a leading `1` or `+1`) become
 * `(760) 274-0004`, and punctuation only appears once the digit after it
 * exists, so backspacing never gets stuck on a `)` or `-`. Numbers that start
 * with another `+` country code are left in the visitor's own grouping.
 */
export function formatPhone(value: string): string {
  if (isInternational(value)) return value.replace(/[^\d+\s().-]/g, "");

  const digits = nationalDigits(value);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

/** True when the value is empty or has a plausible number of digits. */
export function isCompletePhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 0) return true;
  if (isInternational(value)) return digits.length >= 8 && digits.length <= 15;
  return nationalDigits(value).length === 10;
}

function isInternational(value: string): boolean {
  const trimmed = value.trimStart();
  return trimmed.startsWith("+") && !/^\+\s*1/.test(trimmed);
}

// North American digits without the country code, capped at ten. Area codes
// never start with 1, so a leading 1 is always the country code.
function nationalDigits(value: string): string {
  return value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);
}
