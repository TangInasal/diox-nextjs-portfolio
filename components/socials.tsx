import githubIcon from "@/public/icons/Github.png";
import facebookIcon from "@/public/icons/Facebook.png";
import linkedInIcon from "@/public/icons/LinkedIn.png";
import instagramIcon from "@/public/icons/Instagram.png";
import Link from "next/link";
import Image from "next/image";

const items = [
  {
    name: "Github",
    icon: githubIcon,
    href: "https://github.com/Briuwu",
  },
  {
    name: "Facebook",
    icon: facebookIcon,
    href: "https://www.facebook.com/brian.millonte/",
  },
  {
    name: "LinkedIn",
    icon: linkedInIcon,
    href: "https://www.linkedin.com/in/brian-laurence-m-677389229/",
  },
  {
    name: "Instagram",
    icon: instagramIcon,
    href: "https://www.instagram.com/_briuwu/",
  },
];

export const Socials = () => {
  return (
    <ul className="flex items-center justify-around">
      {items.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            target="_blank"
            className="block rounded-full bg-yellow p-2 hover:cursor-pointer hover:bg-white"
          >
            <Image src={item.icon} alt={item.name} className="w-6" />
          </Link>
        </li>
      ))}
    </ul>
  );
};
