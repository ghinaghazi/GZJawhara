// Resolve a public asset path against the app's base URL so it works both
// locally (base "/") and on GitHub Pages (base "/GZJawhara/").
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
