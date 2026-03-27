export function formatDate(date: Date, monthFormat: 'short' | 'long' = 'long'): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: monthFormat,
    day: 'numeric',
  });
}
