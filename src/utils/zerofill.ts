export const zerofill = (str: number, width: number) =>
  String(str).padStart(width, '0');
