const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Custom-Header',
            value: 'Example-Value',
          },
        ],
      },
    ];
  },
  sw: '/sw.js', // Caminho para o arquivo do Service Worker
};

module.exports = nextConfig;
