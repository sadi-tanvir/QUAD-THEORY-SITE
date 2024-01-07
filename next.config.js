/** @type {import('next').NextConfig} */
module.exports = {
    // ... other configurations
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: `https://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10`, // Adjust the destination URL as needed
        },
      ];
    },
  };