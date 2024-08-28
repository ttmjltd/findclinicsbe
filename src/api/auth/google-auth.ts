import { OAuth2Client } from "google-auth-library";
import { Context } from "koa";
import dotenv from "dotenv";

dotenv.config();

const oAuth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI ||
    "http://localhost:1337/api/connect/google/callback"
);

interface KoaRequestBody {
  code: string;
}

const googleAuth = async (ctx: Context) => {
  try {
    const { code } = ctx.request.body as KoaRequestBody;
    const { tokens } = await oAuth2Client.getToken(code);
    ctx.body = tokens;
  } catch (err) {
    console.error(err);
    ctx.throw(400, "Google authentication failed");
  }
};

export default googleAuth;
