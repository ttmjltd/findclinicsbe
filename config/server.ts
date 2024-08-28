export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('APP_URL', 'http://localhost:1337'),
  app: {
    keys: env.array('APP_KEYS', [
      'ReNykHAPHKr7a9gdHsLYb0RRmYJvd9apM1+G0FKWhXc',
      '0rPJGDnhevSJkW9hXw6WspMs5WZBRl84U8f+ZArGyHk',
      'ptTgBBOqD7iHKjaRF5ViSzsjUVI+NniLEU8fZjY+DMk',
      'fOzTsWZXOG0D7WUSE2anCudlSsm7npkvO0lwYXEMe7c',
    ]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
