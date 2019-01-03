export default function({ route, redirect, store }) {
  const currentPath = route.path;
  if (currentPath === "/logout") {
    store.dispatch("auth/logout");
    return redirect("/");
  }
  store.dispatch("change", currentPath);
}
