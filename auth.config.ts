import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ token, user, session }) {
      console.log("jwt callback", { token, user, session });
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
      console.log("session callback", { session, token, user });

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
      console.log("authorized callback", auth?.user?.jabatan);
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      const isAdminDashboard = nextUrl.pathname.startsWith("/dashboard-admin");

      if (isLoggedIn) {
        const userJabatan = auth?.user?.jabatan;

        if (userJabatan === "Admin" && !isAdminDashboard) {
          return Response.redirect(new URL("/dashboard-admin", nextUrl));
        } else if (userJabatan == null && !isOnDashboard) {
          return Response.redirect(new URL("/dashboard", nextUrl));
        } else if (nextUrl.pathname === "/") {
          return true; // Allow access to the root route if logged in
        }
      }

      if (isOnDashboard || isAdminDashboard) {
        if (isLoggedIn) return true;
        return Response.redirect(new URL("/login", nextUrl)); // Redirect unauthenticated users to login page
      }

      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
