/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'res.cloudinary.com',
    ],
  },
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};
export default config;
