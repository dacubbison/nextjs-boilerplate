interface Window {
  gtag?: (
    event: string,
    action: string,
    options?: Record<string, unknown>
  ) => void;
}