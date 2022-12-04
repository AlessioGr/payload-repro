import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';


import Users from './collections/Users';
import Pages from "./collections/Pages";
import Media from "./collections/Media";



export default buildConfig({
  serverURL: process.env.SERVER_URL,
  plugins: [
  ],
  admin: {
    user: Users.slug,
    avatar: 'gravatar',
  },
  collections: [
    Pages,
    Media,
    Users,
    // Add Collections here
    // Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  localization: {
    locales: ['de-DE', 'en-US'],
    defaultLocale: 'de-DE',
    fallback: true,
  },
  i18n: {
    fallbackLng: 'de',
    debug: false,
  },
});
