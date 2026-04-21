/** Strong password: used for initial set-password and login validation. */
export function assertStrongPassword(password: string): void {
  if (password.length < 8) {
    throw new Error("PASSWORD_TOO_SHORT");
  }
  if (!/[a-z]/.test(password)) {
    throw new Error("PASSWORD_MISSING_LOWER");
  }
  if (!/[A-Z]/.test(password)) {
    throw new Error("PASSWORD_MISSING_UPPER");
  }
  if (!/\d/.test(password)) {
    throw new Error("PASSWORD_MISSING_DIGIT");
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    throw new Error("PASSWORD_MISSING_SPECIAL");
  }
}
