import Link from "next/link";

const items = [
  {
    name: "Github",
    icon: (
      <picture>
        <source media="(prefers-color-scheme: dark)" srcSet="https://cdn.simpleicons.org/github/white" />
        <img alt="GitHub" title="GitHub" height="48" width="48" src="https://cdn.simpleicons.org/github" />
      </picture>
    ),
    href: "https://github.com/TangInasal",
  },
  {
    name: "Facebook",
    icon: (
      <picture>
        <source media="(prefers-color-scheme: dark)" srcSet="https://cdn.simpleicons.org/facebook/white" />
        <img alt="Facebook" title="Facebook" height="48" width="48" src="https://cdn.simpleicons.org/facebook" />
      </picture>
    ),
    href: "https://www.facebook.com/Diox.IIH1/",
  },
  {
    name: "LinkedIn",
    icon: (
      <picture>
        <source 
          media="(prefers-color-scheme: dark)" 
          srcSet="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg" // White LinkedIn logo for dark mode
        />
        <img 
          alt="LinkedIn" 
          title="LinkedIn" 
          height="48" 
          width="48" 
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" // Default LinkedIn logo
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/linkedin-square-white.svg"; // Reliable white logo fallback
          }} 
        />
      </picture>
    ),
    href: "https://www.linkedin.com/in/jr-diox/",        
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
            className="block rounded-full bg-grey p-2 hover:cursor-pointer hover:bg-white"
          >
            {item.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};
