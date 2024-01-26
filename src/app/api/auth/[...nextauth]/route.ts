import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";

const clientId = process.env.GOOGLE_ID;
const clientSecret = process.env.GOOGLE_SECRET;

if (!clientId || !clientSecret) {
    throw new Error("Missing enviroment variables");
}

const authOptions: AuthOptions = {
    providers: [
        Google({
            clientId,
            clientSecret,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
