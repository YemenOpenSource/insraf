import prisma from "lib/prisma";
import bcrypt from "bcryptjs";
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";

const options = {
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials, req) {
        const { email, password } = credentials;
        // Add logic here to look up the user from the credentials supplied
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) throw new Error("الحساب غير موجود !");
        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) throw new Error("غلط في الايميا او كلمة المرور");
        
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ]
}

export default (req, res) => NextAuth(req, res, options)