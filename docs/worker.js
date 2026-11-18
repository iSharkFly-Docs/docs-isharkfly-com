const BACKEND_ORIGIN = "http://test.stonex.sharkdat.com:9191";
const API_PREFIX = "/prod-api";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (!url.pathname.startsWith(API_PREFIX)) {
      return new Response("Not Found", { status: 404 });
    }

    const forwardPath = url.pathname.slice(API_PREFIX.length) || "/";
    const targetUrl = new URL(forwardPath, BACKEND_ORIGIN);
    targetUrl.search = url.search;

    const headers = new Headers(request.headers);
    headers.delete("host");
    headers.delete("origin");
    headers.delete("referer");

    headers.set("X-Forwarded-Host", url.host);
    headers.set("X-Forwarded-Proto", url.protocol.replace(":", ""));
    headers.set("X-Forwarded-Prefix", API_PREFIX);

    try {
      return await fetch(targetUrl.toString(), {
        method: request.method,
        headers,
        body: request.method === "GET" || request.method === "HEAD"
          ? undefined
          : request.body,
        redirect: "manual"
      });
    } catch (err) {
      return new Response(`Worker fetch failed: ${err.message}`, {
        status: 502
      });
    }
  }
};
