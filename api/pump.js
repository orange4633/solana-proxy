export default async function handler(request, response) {
  try {
    const res = await fetch("https://client-api.pump.fun/tokens/trending");
    const data = await res.json();
    return response.status(200).json(data);
  } catch (err) {
    return response.status(500).json({ error: "Proxy failed", detail: err.message });
  }
}
