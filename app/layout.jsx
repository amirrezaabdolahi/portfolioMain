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
    metadataBase: new URL("https://amirrezaabdollahi.vercel.app"),

    title: {
        default: "Amireza Abdolahi | Frontend Developer",
        template: "%s | Amireza Abdolahi",
    },

    description:
        "Frontend developer specializing in React, Next.js, and modern web technologies. View my projects, skills, and experience.",

    keywords: [
        "Frontend Developer",
        "React Developer",
        "Next.js",
        "JavaScript",
        "Web Developer Portfolio",
    ],

    icons: {
        icon: "/favicon.ico",
    },

    openGraph: {
        title: "Amireza Abdolahi | Frontend Developer",
        description:
            "Portfolio of Amireza Abdolahi — React & Next.js frontend developer.",
        url: "/",
        siteName: "Amireza Abdolahi Portfolio",
        images: [
            {
                url: "/assets/profile.jpg",
                width: 1200,
                height: 630,
                alt: "Amireza Abdolahi Frontend Developer Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Amireza Abdolahi | Frontend Developer",
        description:
            "Frontend developer building modern web apps with React and Next.js.",
        images: ["/assets/profile.jpg"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <meta
                name="google-site-verification"
                content="gCuxTd8cF-uuWnQinS7zVuozhF0jsHD45i-GHal3tr8"
            />
            <body className={JetBrainsMono.variable}>
                <Header />
                <StairTransition />
                <PageTransion>{children}</PageTransion>
            </body>
        </html>
    );
}
