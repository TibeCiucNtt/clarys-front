/**
 * Formats a JavaScript Date object or ISO string into a readable format.
 * @param date - The Date object or ISO string to format.
 * @param locale - The locale string (default: "en-US").
 * @param options - Intl.DateTimeFormat options for custom formatting.
 * @returns A formatted date string.
 */
export function formatDate(
    date: Date | string,
    locale: string = "en-US",
    options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  ): string {
    const dateObject = typeof date === "string" ? new Date(date) : date;
    return new Intl.DateTimeFormat(locale, options).format(dateObject);
  }
  
  /**
   * Formats a JavaScript Date object into a time string (e.g., "3:45 PM").
   * @param date - The Date object or ISO string to format.
   * @param locale - The locale string (default: "en-US").
   * @returns A formatted time string.
   */
  export function formatTime(date: Date | string, locale: string = "en-US"): string {
    const dateObject = typeof date === "string" ? new Date(date) : date;
    return dateObject.toLocaleTimeString(locale, {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  