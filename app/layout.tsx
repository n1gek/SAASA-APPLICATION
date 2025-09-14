import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


import { clerkMiddleware } from "@clerk/nextjs/server";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
       <html lang="en">
      <body
        className={ `antialiased`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
   
  );
}
