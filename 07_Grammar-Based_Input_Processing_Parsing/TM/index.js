function parseRobots(text) {
  const lines = text.split('\n');

  const result = {
    agents: {},
    Sitemap: []
  };

  let currentAgents = [];

  for (let line of lines) {
    line = line.trim();

    // Skip baris kosong & komentar
    if (!line || line.startsWith('#')) continue;

    const [rawKey, ...rest] = line.split(':');
    if (!rawKey) continue;

    const key = rawKey.trim().toLowerCase();
    const value = rest.join(':').trim();

    switch (key) {
      case 'user-agent': {
        const agent = value.toLowerCase();

        currentAgents = [agent];

        if (!result.agents[agent]) {
          result.agents[agent] = {
            Allow: [],
            Disallow: []
          };
        }
        break;
      }

      case 'allow': {
        if (!value) break;

        for (const agent of currentAgents) {
          result.agents[agent].Allow.push(value);
        }
        break;
      }

      case 'disallow': {
        if (!value) break;

        for (const agent of currentAgents) {
          result.agents[agent].Disallow.push(value);
        }
        break;
      }

      case 'sitemap': {
        if (value) {
          result.Sitemap.push(value);
        }
        break;
      }
    }
  }

  return result;
}

module.exports = parseRobots;