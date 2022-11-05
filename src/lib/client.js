import { createClient } from 'microcms-js-sdk';

export const microcms = createClient({
  serviceDomain: 'yamatoweb',
  apiKey: process.env.MICROCMS_API_KEY,
});
