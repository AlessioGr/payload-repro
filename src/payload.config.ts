import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';


import Users from './collections/Users';
import Pages from "./collections/Pages";
import Media from "./collections/Media";

import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';

const adapter = s3Adapter({
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
    endpoint: process.env.S3_ENDPOINT,
    region: 'auto',
  },
  bucket: process.env.S3_BUCKET,
})

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  plugins: [
    cloudStorage({
      collections: {
        'media': {
          adapter: adapter, // see docs for the adapter you want to use
        },
      },
    }),
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
