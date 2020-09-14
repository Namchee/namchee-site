export default function({ env, redirect, route }) {
  if (env.UNDER_CONSTRUCTION &&
    route.path !== '/under-construction') {
    redirect('/under-construction');
  }
}
