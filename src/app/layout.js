import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alaa Ashraf Ramadan — Frontend Developer & UI/UX Designer",
  description:
    "Frontend Developer and UI/UX Designer building responsive web and mobile experiences with React.js and Next.js.",
  keywords: ["Frontend Developer", "React.js", "MERN Stack", "JavaScript", "Next.js", "Cairo"],
  authors: [{ name: "Alaa Ashraf" }],
  openGraph: {
    title: "Alaa Ashraf — Frontend Developer",
    description: "React.js & MERN Stack Developer. Available for work.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
