export default function({ route, store, redirect }) {
  if (!store.state.auth.user) {
    return redirect(`/login?location=${route.path}`);
  }
}
