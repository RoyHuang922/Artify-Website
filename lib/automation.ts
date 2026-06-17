/** True in automated browsers (headless audits, crawlers, link-preview bots).
 *  Used to skip decorative entrance animations so captures see full content. */
export function isAutomated(): boolean {
  return typeof navigator !== 'undefined' && !!navigator.webdriver;
}
