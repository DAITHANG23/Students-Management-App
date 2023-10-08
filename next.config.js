/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: false,
  // },
};

module.exports = {
  experimental: {
    appDir: false,
  },
};

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
