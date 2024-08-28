import { Context } from "koa";
import axios from "axios";

const twitterAuth = async (ctx: Context) => {
  const { code } = ctx.query;
  const code_verifier = localStorage.getItem("pkce_code_verifier");

  if (!code || !code_verifier) {
    ctx.throw(400, "Code or code_verifier is missing");
  }

  const twitterTokenUrl = "https://api.twitter.com/2/oauth2/token";
  const clientId = process.env.TWITTER_CLIENT_ID || "";
  const clientSecret = process.env.TWITTER_CLIENT_SECRET || "";
  const redirectUri = process.env.TWITTER_REDIRECT_URI || "";

  try {
    const response = await axios.post(
      twitterTokenUrl,
      new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        code_verifier,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token, refresh_token } = response.data;

    ctx.send({
      access_token,
      refresh_token,
    });
  } catch (error) {
    console.error("Error exchanging Twitter authorization code:", error);
    ctx.throw(500, "Failed to exchange authorization code");
  }
};

export default twitterAuth;
