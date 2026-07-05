const json = (data, init = {}) =>
  Response.json(data, {
    ...init,
    headers: {
      "cache-control": "no-store",
      ...init.headers,
    },
  });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return json({
        ok: true,
        service: "jingchi-official-worker",
        time: new Date().toISOString(),
      });
    }

    if (url.pathname.startsWith("/api/")) {
      return json(
        {
          ok: false,
          error: "Not found",
        },
        { status: 404 },
      );
    }

    return env.ASSETS.fetch(request);
  },
};
