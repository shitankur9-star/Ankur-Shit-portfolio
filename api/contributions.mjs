
export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const username = String(req.query.username || "");

  if (!/^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/.test(username)) {
    return res.status(400).json({ error: "Invalid GitHub username" });
  }

  try {
    const apiUrl =
      `https://github-contributions.vercel.app/api/v1/` +
      `${encodeURIComponent(username)}?y=last`;

    const upstream = await fetch(apiUrl);

    if (!upstream.ok) {
      return res.status(502).json({
        error: "GitHub contribution provider returned an error"
      });
    }

    const data = await upstream.json();

    if (!Array.isArray(data.contributions)) {
      return res.status(502).json({
        error: "Unexpected contribution data"
      });
    }

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );

    return res.status(200).json(data);
  } catch {
    return res.status(502).json({
      error: "Contribution service temporarily unavailable"
    });
  }
}
