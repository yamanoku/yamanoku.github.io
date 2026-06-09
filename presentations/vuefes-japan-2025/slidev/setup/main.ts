import type { AppContext } from "@slidev/types";

export default function setup({ router }: AppContext) {
  const base = import.meta.env.BASE_URL;
  if (base === "/") return;

  const originalPush = router.push.bind(router);
  const originalReplace = router.replace.bind(router);

  function stripBase(to: Parameters<typeof router.push>[0]) {
    if (
      typeof to === "object" &&
      "path" in to &&
      typeof to.path === "string" &&
      to.path.startsWith(base)
    ) {
      return { ...to, path: `/${to.path.slice(base.length)}` };
    }
    return to;
  }

  router.push = (to) => originalPush(stripBase(to));
  router.replace = (to) => originalReplace(stripBase(to));
}
