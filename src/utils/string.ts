export const removeWhiteSpace = (string: string) =>
  string ? string.replace(/(\r\n|\n|\r)/gm, ' ').replace(/\s+/g, ' ') : '';
