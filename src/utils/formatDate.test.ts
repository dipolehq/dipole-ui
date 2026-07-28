import { describe, expect, it } from 'vitest';

import { formatDate } from '@utils/formatDate';

describe('formatDate', () => {
  it('formats an ISO string into a medium-style date', () => {
    expect(formatDate('2026-07-15T00:00:00Z', 'en-US')).toBe('Jul 15, 2026');
  });

  it('throws on an invalid date', () => {
    expect(() => formatDate('not-a-date')).toThrow(/invalid date/i);
  });
});
