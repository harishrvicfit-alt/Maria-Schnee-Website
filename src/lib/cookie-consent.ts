export const COOKIE_CHOICE_KEY = "maria-schnee-cookie-choice";
export const COOKIE_CHOICE_CHANGED_EVENT = "maria-schnee-cookie-choice-changed";

export type CookieChoice = "all" | "necessary";

export function getStoredCookieChoice(): CookieChoice | null {
  const value = localStorage.getItem(COOKIE_CHOICE_KEY);
  return value === "all" || value === "necessary" ? value : null;
}

export function saveCookieChoice(value: CookieChoice) {
  localStorage.setItem(COOKIE_CHOICE_KEY, value);
  window.dispatchEvent(
    new CustomEvent<CookieChoice>(COOKIE_CHOICE_CHANGED_EVENT, {
      detail: value,
    }),
  );
}
