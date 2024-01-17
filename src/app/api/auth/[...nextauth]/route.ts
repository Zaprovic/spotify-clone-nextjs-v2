import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";

// export async function GET(req: Request) {
// 	return NextResponse.json({
// 		message: "Next auth configured",
// 	});
// }

const clientId = process.env.GOOGLE_ID;
const clientSecret = process.env.GOOGLE_SECRET;

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
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: "/login",
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
