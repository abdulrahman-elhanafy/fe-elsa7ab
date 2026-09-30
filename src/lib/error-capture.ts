let lastError: unknown = null;

export function captureServerFnError(error: unknown) {
  lastError = error;
  console.error("Server function error:", error);
}

export function consumeLastCapturedError() {
  const error = lastError;
  lastError = null;
  return error;
}
