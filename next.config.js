/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

// module.exports = (phase, { defaultConfig }) => {
//   /**
//    * @type {import('next').NextConfig}
//    */
//   const nextConfig = {
//     /* config options here */
//     experimental: {
//       appDir: false,
//     },
//   };
//   return nextConfig;
// };
