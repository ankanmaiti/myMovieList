export function convertToURLFriendly(str: string) {
  // Replace all special characters and spaces with hyphens
  let urlFriendlyString = str.replace(/[^a-zA-Z0-9]/g, "-");

  // Remove consecutive hyphens
  urlFriendlyString = urlFriendlyString.replace(/-+/g, "-");

  // TrimStart hyphen
  urlFriendlyString = urlFriendlyString.replace(/^-+/, "");

  // TrimStart hyphen
  urlFriendlyString = urlFriendlyString.replace(/-+$/, "");

  return urlFriendlyString;
}
