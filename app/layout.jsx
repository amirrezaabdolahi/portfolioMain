import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransion from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: {
    template: "Amire Abdollhai | %s",
    default: "Amire Abdollhai",
  },
  description:
    "Hi this is my portfolio everything to know me is in this web . so why you'r looking my meta data ha!!!!",
  icons: {
    icon: "/favicon.ico", // or "/favicon.png"
  },
  openGraph: {
    title: "Amireza Abdolahi | Frontend Developer",
    description: "Check out my portfolio projects",
    url: "https://amirrezaabdollahi.vercel.app/",
    siteName: "Amireza Abdolahi Portfolio",
    images: [
      {
        url: "https://amirrezaabdollahi.vercel.app/assets/profile.jpg", // place preview.png in public/ folder
        width: 800,
        height: 600,
        alt: "AmirrezaAbdollahi profile image"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "googlebb73bf99f0322451",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="googlebb73bf99f0322451" />
      <body className={JetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransion>{children}</PageTransion>
      </body>
    </html>
  );
}
