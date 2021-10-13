export const required = (errorMessage: string) => (value: any) => {
  if (value === null || value === undefined) return errorMessage;

  if (!value.trim()) return errorMessage;

  if (Boolean(value) && value === false) return errorMessage;

  return undefined;
};
