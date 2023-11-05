/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};
export default config;
