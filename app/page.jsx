

import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import DownloadCvBtn from "@/components/DownloadCvBtn";

export const metadata = {
  title: "Amireza Abdolahi | Frontend Developer",
  description:
    "Amireza Abdolahi is a frontend developer specializing in React, Next.js, TypeScript, and responsive web applications. Explore his projects, skills, and portfolio.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Amireza Abdolahi | Frontend Developer",
    description:
      "Explore Amireza Abdolahi's frontend development portfolio, featuring React, Next.js, TypeScript projects, and modern web development.",
    url: "/",
    siteName: "Amireza Abdolahi Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Amireza Abdolahi, Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Amireza Abdolahi | Frontend Developer",
    description:
      "Discover my frontend projects, technical skills, and experience with React, Next.js, and TypeScript.",
    images: ["/assets/profile.jpg"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Amireza Abdolahi",
  alternateName: ["Amir Abdolahi", "امیررضا عبدالهی"],
  url: "https://amirrezaabdollahi.vercel.app",
  image:
    "https://amirrezaabdollahi.vercel.app/assets/profile.jpg",
  jobTitle: "Frontend Developer",
  description:
    "Frontend developer specializing in React, Next.js, TypeScript, and responsive web applications.",
  knowsAbout: [
    "Frontend Development",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Redux Toolkit",
    "Responsive Web Design",
    "Web Accessibility",
  ],
  sameAs: [
    "https://github.com/amirrezaabdolahi",
    "https://www.linkedin.com/in/amireza-abdolahi-283710349",
    "https://instagram.com/maybe_im_amirreza",
  ],
};

export default function Home() {
  return (
    <main className="min-h-full">
      {/* Person structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* Hero section */}
      <section
        aria-labelledby="hero-heading"
        className="container mx-auto"
      >
        <div className="flex flex-col-reverse items-center justify-between gap-10 py-8 xl:flex-row xl:py-16">
          <div className="flex-1 text-center xl:text-left">
            <p className="mb-3 text-lg text-accent">
              Frontend Developer
            </p>

            <h1
              id="hero-heading"
              className="h2 mb-6"
            >
              Hello, I&apos;m{" "}
              <span className="text-accent">
                Amireza Abdolahi
              </span>
            </h1>

            <p className="mx-auto mb-9 max-w-[600px] text-white/80 xl:mx-0">
              I build modern, responsive web applications
              using React, Next.js, and TypeScript. I focus
              on creating intuitive user interfaces,
              reusable components, and maintainable code
              that delivers a better user experience.
            </p>

            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <DownloadCvBtn />

              <Socials
                containerStyle="flex items-center gap-6"
                iconStyle="flex items-center justify-center w-9 h-9 border border-accent rounded-full text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
              />
            </div>
          </div>

          <div className="mb-6 shrink-0 xl:mb-0">
            <Photo />
          </div>
        </div>
      </section>

      {/* About section */}
      <section
        aria-labelledby="about-heading"
        className="container mx-auto py-12"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="about-heading"
            className="h3 mb-6 text-center xl:text-left"
          >
            About Me
          </h2>

          <div className="space-y-4 leading-7 text-white/80">
            <p>
              I&apos;m a frontend developer who enjoys
              turning ideas into practical, user-friendly
              digital experiences. I work with modern
              JavaScript technologies to build responsive
              interfaces that work across different screen
              sizes and devices.
            </p>

            <p>
              My technical interests include component-based
              architecture, state management, API integration,
              and writing clean, reusable code. I use tools
              such as React, Next.js, TypeScript, and Redux
              Toolkit to develop organized and maintainable
              frontend applications.
            </p>

            <p>
              I believe good frontend development combines
              thoughtful design, accessibility, performance,
              and reliable functionality. I continuously
              learn new techniques and apply them through
              practical projects.
            </p>

            <p>
              Explore my portfolio to see the projects I&apos;ve
              built, the technologies I use, and how I
              approach frontend development. You can also
              download my resume or connect with me through
              my professional profiles.
            </p>
          </div>
        </div>
      </section>

      {/* Existing statistics component */}
      <section
        aria-label="Professional statistics"
        className="container mx-auto py-8"
      >
        <Stats />
      </section>
    </main>
  );
}
