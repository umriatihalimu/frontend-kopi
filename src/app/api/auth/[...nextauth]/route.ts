import { baseurl } from "@/lib/variabel";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

// lihat di doc nextauth
export const authOptions: NextAuthOptions = {
  // provider untuk username dan Password saja
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "abc@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;
        const { email, password } = credentials;

        const res = await fetch(baseurl + "/auth/login", {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.status == 401) {
          console.log(res.statusText);
          return null;
        }
        const user = await res.json();
        return user;
      },
    }),
  ],

  // callbacks untuk menentukan langkah apa yang dilakukan jika sudah signin signout dll
  callbacks: {
    async jwt({ token, user }) {
      console.log({ token, user });
      if (user) return { ...token, ...user };

      return token;
    },

    async session({ token, session }) {
      session.user = token.user;
      session.backendToken = token.backendToken;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
