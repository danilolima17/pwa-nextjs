const withPWA = require('next-pwa')({
  dest: 'public',
  sw: 'sw.js'
});

module.exports = withPWA({
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Accept-Language',
            value: 'pt-BR',
          },
        ],
      },
    ];
  },
});