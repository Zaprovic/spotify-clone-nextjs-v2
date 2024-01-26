import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";

const clientIdGoogle = process.env.GOOGLE_ID;
const clientSecretGoogle = process.env.GOOGLE_SECRET;

const clientIdFacebook = process.env.FACEBOOK_ID;
const clientSecretFacebok = process.env.FACEBOOK_SECRET;

if (!clientIdGoogle || !clientSecretGoogle) {
    throw new Error("Missing enviroment variables for Google authentication");
}

if (!clientIdFacebook || !clientSecretFacebok) {
    throw new Error("Missing enviroment variables for Facebook authentication");
}

const authOptions: AuthOptions = {
    providers: [
        Google({
            clientId: clientIdGoogle,
            clientSecret: clientSecretGoogle,
        }),
        Facebook({
            clientId: clientIdFacebook,
            clientSecret: clientSecretFacebok,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
