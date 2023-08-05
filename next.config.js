/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "https://rxresu.me/mdazlaan1996/resume-mdazlaanzubair",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
