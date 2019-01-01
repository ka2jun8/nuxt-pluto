export default function({ route, redirect, store }) {
  const currentPath = route.path;
  store.dispatch("change", currentPath);
}
