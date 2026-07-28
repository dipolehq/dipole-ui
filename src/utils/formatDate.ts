import { APP } from '@constants/index';

/**
 * Pure, side-effect-free date formatter. Utilities here must be deterministic
 * and free of app/domain state so they're trivially testable and reusable.
 */
export function formatDate(
  date: Date | string | number,
  locale: string = APP.DEFAULT_LOCALE,
): string {
  const parsed = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error('formatDate: received an invalid date');
  }
  return new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(parsed);
}
