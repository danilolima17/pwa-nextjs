const withPWA = require('next-pwa')({
  dest: 'public'
});

module.exports = withPWA({
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
});
