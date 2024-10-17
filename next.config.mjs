/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // すべてのホスト名を許可する
        },
      ],
    },
  };
  
  export default nextConfig;
  