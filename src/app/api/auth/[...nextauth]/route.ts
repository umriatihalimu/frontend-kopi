import { baseurl } from "@/lib/variabel";
import axios from "axios";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshTokens(token: JWT) {
  try {
    const res = await axios.post(baseurl + "/auth/refresh", null, {
      headers: {
        authorization: `Refresh ${token.backendToken.refreshToken}`,
      },
    });
    console.log("token direfresh");

    const refreshResponse = res.data;
    const backendToken = refreshResponse.backendToken;

    return {
      ...token,
      backendToken: backendToken,
    };
  } catch (error) {
    console.error("Gagal melakukan permintaan refresh token:", error);
    throw error;
  }
}

// lihat di doc nextauth
export const authOptions: NextAuthOptions = {
  // provider untuk username dan Password saja
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "abc@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) return null;
        const { username, password } = credentials;

        const res = await fetch(baseurl + "/auth/login", {
          method: "POST",
          body: JSON.stringify({
            username,
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
      // console.log({ token, user });
      if (user) return { ...token, ...user };

      // jika waktunya sudah expire
      if (new Date().getTime() < token.backendToken.expiresIn) {
        return token;
      }
      return await refreshTokens(token);
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
