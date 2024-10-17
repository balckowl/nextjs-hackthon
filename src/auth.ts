import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth, { type Session, type User } from "next-auth"
import GitHub from "next-auth/providers/github"
import { db } from "./db";

export const { handlers, signIn, signOut, auth } = NextAuth({
    basePath: "/api/auth",
    callbacks: {
        async session({ session, user }: { session: Session, user: User }) {
            if (session?.user) {
                session.user.id = user.id;
            }
            return session;
        }
    },
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET
        })
    ],
    adapter: DrizzleAdapter(db),
})
