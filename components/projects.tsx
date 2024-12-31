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
    name: "Certified AppSec Practitioner (CAP)",
    technologies: [
      "Web/Application Security",
      "Encryption",
      "OWASP",
      "Authentication",
      "API",
      "Header Security Policy ",
    ],
    preview: "/projects/cap_diox.png",
    github: "https://github.com/",
    website: "https://secops.group/product/certified-application-security-practitioner/",
  },
  {
    name: "Google Cybersecurity Proffessional",
    technologies: ["Cybersecurity", "Terminologies", "Compliance"],
    preview: "/projects/DiocaGCPC.png",
    github: "https://github.com/",
    website: "https://www.coursera.org/account/accomplishments/professional-cert/V4NN5763BX8U",
  },
  {
    name: "Certified Red Team Analyst (WIP)",
    technologies: [
      "Red Teaming",
      "Command and Control (C2)",
      "Active Directory exploitation",
      "Network Penetration Testing",
      "External and Interal Penetration Testing",
    ],
    preview: "/projects/wip.jpg",
    github: "https://github.com/",
    website: "https://cyberwarfare.live/product/red-team-analyst-crta/",
  },
];

export const Projects = () => {
  return (
    <Carousel>
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.name}>
            <div className="relative mb-2 h-[380px]">
              <Image
                src={item.preview}
                alt={item.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <p className="text-wrap text-center bg-grey font-bold md:text-lg">
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
                  {/* Live
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={item.github} target="_blank"> */}
                  Certification Details
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
