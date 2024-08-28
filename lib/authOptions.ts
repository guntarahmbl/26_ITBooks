import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { z } from "zod";

const prisma = new PrismaClient();
const emailSchema = z.string().email({ message: 'Invalid email format' }) .refine((email) => email.endsWith('@mahasiswa.itb.ac.id'), { message: 'Email must end with @mahasiswa.itb.ac.id',});

export const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        EmailProvider({
            server: {
              host: process.env.SMTP_HOST,
              port: Number(process.env.SMTP_PORT),
              auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
              }
            },
            from: process.env.EMAIL_FROM
          }),
    ],
    pages: {
      signIn : "/"
    },
    callbacks: {
      async signIn({ user }) {
        try {
          await emailSchema.parseAsync(user.email);
          return true;
        } catch (error) {
          return false
        }
      },
    },
      // pages: {
    //   signIn: "api/auth/signin", // Use the custom sign-in page path
    // }
}