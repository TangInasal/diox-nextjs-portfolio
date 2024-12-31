import Image from "next/image";

export const AboutMe = () => {
  return (
    <Image
      src={"/images/portfolio (1).png"}
      alt=""
      fill
      className="rounded-lg object-cover"
    />
  );
};
