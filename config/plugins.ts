module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "7d",
      },
      providers: {
        google: {
          enabled: true,
          clientId: env("GOOGLE_CLIENT_ID"),
          clientSecret: env("GOOGLE_CLIENT_SECRET"),
          redirectUri: env("GOOGLE_REDIRECT_URI"),
          scope: ["email"],
          responseType: "code",
          grantType: "authorization_code",
        },
        facebook: {
          enabled: true,
          clientId: env("FACEBOOK_CLIENT_ID"),
          clientSecret: env("FACEBOOK_CLIENT_SECRET"),
          redirectUri: env("FACEBOOK_REDIRECT_URI"),
        },
        twitter: {
          enabled: true,
          clientId: env("TWITTER_CLIENT_ID"),
          clientSecret: env("TWITTER_CLIENT_SECRET"),
          redirectUri: env("TWITTER_REDIRECT_URI"),
          responseType: "code",
          grantType: "authorization_code",
          codeChallengeMethod: "S256",
        },
      },
    },
  },
});
