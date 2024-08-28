import googleAuth from "./google-auth";
import twitterAuth from "./twitter-auth";

export default [
  {
    method: "POST",
    path: "/connect/google/callback",
    handler: googleAuth,
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: "GET",
    path: "/connect/twitter/callback",
    handler: twitterAuth,
    config: {
      policies: [],
      middlewares: [],
    },
  },
];
