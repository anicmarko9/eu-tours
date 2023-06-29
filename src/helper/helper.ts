export const getEmailUsername = (email: string): string => {
  const atIndex: number = email.indexOf("@");
  if (atIndex !== -1) {
    return email.slice(0, atIndex);
  }
  return email;
};

export const slugifyString = (str: string): string => {
  return str
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace whitespace with dash
    .replace(/[^a-z0-9-]/g, "") // Remove non-alphanumeric characters and additional dashes
    .replace(/-{2,}/g, "-") // Replace multiple dashes with a single dash
    .replace(/^-|-$/g, ""); // Remove leading and trailing dashes
};
