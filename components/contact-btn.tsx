import Image from "next/image";
import Link from "next/link";

export const ContactBtn = () => {
  return (
    <>
      <Image src={"/images/okarun.jpeg"} alt="" fill className="object-cover" />
      <Link
        href="diox@bugcrowdninja.com"
        className="z-[99] self-end justify-self-center font-bold text-dark-green hover:text-white hover:underline"
      >
        Hire me pls
      </Link>
    </>
  );
};
