import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-lg">Sonftware Developer</span>
            <h1 className="h2 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent ">Amir Abdolahi</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant, user-focused digital experiences and
              am proficient in a wide range of programming languages and modern
              web technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 uppercase"
              >
                <span>Download CV</span>
                <FiDownload />
              </Button>
              <div>
                <Socials
                  containerStyle="flex items-center gap-6"
                  iconStyle="flex items-center justify-center w-9 h-9 border border-accent rounded-full text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="mb-6 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
