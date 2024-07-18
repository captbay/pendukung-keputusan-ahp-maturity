import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ token, user, session }) {
      // console.log("jwt callback", { token, user, session });
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
          jabatan: user.jabatan,
        };
      }
      return token;
    },
    session({ session, token, user }) {
      // console.log("session callback", { session, token, user });

      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          email: token.email,
          jabatan: token.jabatan,
        },
      };
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAdmin = auth?.user?.jabatan === "Admin";

      if (isLoggedIn) {
        if (isAdmin) {
          if (
            nextUrl.pathname !== "/dashboard-admin" &&
            nextUrl.pathname !== "/maturity-question-edit" &&
            nextUrl.pathname !== "/ahp-recap" &&
            nextUrl.pathname !== "/playground"
          ) {
            return Response.redirect(new URL("/dashboard-admin", nextUrl)); // Redirect Admin to /dashboard-admin
          }
        } else {
          if (
            nextUrl.pathname !== "/dashboard" &&
            nextUrl.pathname !== "/ahp" &&
            nextUrl.pathname !== "/maturity"
          ) {
            return Response.redirect(new URL("/dashboard", nextUrl)); // Redirect non-Admin to /dashboard
          }
        }

        return true; // Allow access to the requested route for authenticated users
      }
      if (
        nextUrl.pathname === "/login" ||
        nextUrl.pathname === "/registration"
      ) {
        return true;
      }

      return false; // Deny access for unauthenticated users
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
