import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";

const clientId = process.env.GITHUB_ID;
const clientSecret = process.env.GITHUB_SECRET;

if (!clientId || !clientSecret) {
	throw new Error("Missing enviroment variables");
}

const authOptions: AuthOptions = {
	providers: [
		Github({
			clientId,
			clientSecret,
		}),
	],
};
const handler = NextAuth(authOptions);
