// Components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import DownloadCvBtn from "@/components/DownloadCvBtn";

export const metadata = {
  title: "Home",
  description:
    "Amireza Abdolahi is a frontend developer specializing in React, Next.js, TypeScript, and modern web development. Explore projects, technical skills, and professional experience.",

  keywords: [
    "Amireza Abdolahi",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer Portfolio",
    "امیررضا عبدالهی",
    "برنامه نویس فرانت اند",
    "برنامه نویس ری اکت",
  ],

  openGraph: {
    title: "Amireza Abdolahi | Frontend Developer",
    description:
      "Explore Amireza Abdolahi's portfolio, featuring React, Next.js, TypeScript projects, technical skills, and modern web development.",
    url: "/",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Amireza Abdolahi — Frontend Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Amireza Abdolahi | Frontend Developer",
    description:
      "Explore my projects, skills, and experience in React, Next.js, and modern web development.",
    images: ["/assets/profile.jpg"],
  },

  alternates: {
    canonical: "/",
  },
};

// Person structured data
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Amireza Abdolahi",
  alternateName: ["Amir Abdolahi", "امیررضا عبدالهی"],
  url: "https://amirrezaabdollahi.vercel.app",
  image: "https://amirrezaabdollahi.vercel.app/assets/profile.jpg",
  jobTitle: "Frontend Developer",
  description:
    "Frontend developer specializing in React, Next.js, TypeScript, and modern web development.",
  knowsAbout: [
    "Frontend Development",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Redux Toolkit",
    "Web Development",
  ],
  sameAs: [
    "https://github.com/amirrezaabdolahi",
    "https://www.linkedin.com/in/amireza-abdolahi-283710349?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "https://instagram.com/maybe_im_amirreza?vrfl=YXRha3JrODBnMW8z",
  ],
};

export default function Home() {
  return (
    <section className="h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="container mx-auto h-full">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left">
            <span className="text-lg">Software Developer</span>

            <h1 className="h2 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Amir Abdolahi</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant, user-focused digital experiences and
              am proficient in a wide range of programming languages and modern
              web technologies.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <DownloadCvBtn />

              <div>
                <Socials
                  containerStyle="flex items-center gap-6"
                  iconStyle="flex items-center justify-center w-9 h-9 border border-accent rounded-full text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="mb-6 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
