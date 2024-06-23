import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      name: string;
      email: string;
      jabatan: string | null;
    };
  }

  interface User {
    /** The user's name. */
    name: string;
    /** The user's email. */
    email: string;
    /** The user's image. */
    image: string;
    /** The user's id. */
    id: string;
    /** The user's jabatan. */
    jabatan: string | null;
  }
}

// import { Session } from "next-auth";
// import { JWT } from "next-auth/jwt";

// /** Example on how to extend the built-in session types */
// declare module "next-auth" {
//   interface Session {
//     /** This is an example. You can find me in types/next-auth.d.ts */
//     user: {
//       id: string;
//       jabatan: string;
//       // ...other properties
//     };
//   }
// }

// /** Example on how to extend the built-in types for JWT */
// declare module "next-auth/jwt" {
//   interface JWT {
//     /** This is an example. You can find me in types/next-auth.d.ts */
//     user: {
//       id: string;
//       jabatan: string;
//       // ...other properties
//     };
//   }
// }
