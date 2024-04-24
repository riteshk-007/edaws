import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/utils/Db.config";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize: async (credentials) => {
        const user = await prisma.admin.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          return null;
        }
        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) {
          return null;
        }
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/admin-login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
