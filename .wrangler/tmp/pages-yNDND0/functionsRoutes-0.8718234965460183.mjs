import { onRequest as ____path___js_onRequest } from "/Users/christianstander/Documents/Business/iff-remix-cloudflare/functions/[[path]].js"

export const routes = [
    {
      routePath: "/:path*",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [____path___js_onRequest],
    },
  ]