export function isErrnoException(
  error: unknown
): error is NodeJS.ErrnoException {
  if ("code" in (error as any)) return true;
  else return false;
}
