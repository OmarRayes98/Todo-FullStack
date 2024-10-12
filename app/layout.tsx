import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider} from "@clerk/nextjs";
import Nav from "@/components/Nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Full Stack Todo App with Next.js",
  description: "Create a full stack todo application with Next.js, TypeScript, Prisma, and MongoDB",
  keywords: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Server Actions", "Server Components"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider appearance={{
    layout: {
      unsafe_disableDevelopmentModeWarnings: true,
    },
  }} >
        <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                    >
                      <Nav/>
        {children}
        </ThemeProvider>
        </ClerkProvider>

      </body>
    </html>
  );
}
