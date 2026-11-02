/** Calendar day for contact-attempt limits (team operates in IST). */
export function contactAttemptDayKey(date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
  }).format(date);
}
