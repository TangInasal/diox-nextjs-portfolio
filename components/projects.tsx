import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const items = [
  {
    name: "Note Taking App",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "ClerkAuth",
      "PostgreSQL",
    ],
    preview: "/projects/note-taking-app.jpg",
    github: "https://github.com/Briuwu/note-taking-app",
    website: "https://briuwu-note-taking.vercel.app/",
  },
  {
    name: "Space Tourism Website",
    technologies: ["React", "TypeScript", "Framer Motion", "SCSS"],
    preview: "/projects/space-tourism.jpg",
    github: "https://github.com/Briuwu/react-ts_space-website",
    website: "https://briuwu-space-tourism.netlify.app/",
  },
  {
    name: "Ctrl + Alt + Learn Game",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "PostgreSQL",
      "WebSockets",
    ],
    preview: "/projects/cal-game.png",
    github: "https://github.com/Briuwu/cal-v2",
    website: "https://calgame.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <Carousel>
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.name}>
            <div className="relative mb-2 h-[250px]">
              <Image
                src={item.preview}
                alt={item.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <p className="text-wrap text-center font-bold md:text-lg">
              {item.name}
            </p>
            <ul className="mt-2 hidden flex-wrap justify-center gap-2 md:flex">
              {item.technologies.map((tech) => (
                <li key={tech} className="w-fit rounded-lg bg-grey p-1 text-xs">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <Button asChild variant="default">
                <Link href={item.website} target="_blank">
                  Live
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={item.github} target="_blank">
                  Github
                </Link>
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 bg-black text-white" />
      <CarouselNext className="right-0 bg-black text-white" />
    </Carousel>
  );
};
