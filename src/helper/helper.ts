export const getEmailUsername = (email: string): string => {
  const atIndex: number = email.indexOf("@");
  if (atIndex !== -1) {
    return email.slice(0, atIndex);
  }
  return email;
};
