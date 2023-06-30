const isProd = process.ENV_NODE === 'production'
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})

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
  }, // Caminho para o arquivo do Service Worker
};

module.exports = nextConfig;