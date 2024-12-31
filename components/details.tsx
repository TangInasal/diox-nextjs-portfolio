export const Details = () => {
  return (
    <>
      <h1 className="relative mx-auto w-fit text-xl font-bold lg:text-3xl">
        Hi there! I&apos;m Diox{" "}
        <svg
          width="131"
          height="23"
          viewBox="0 0 131 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -right-5"
        >
          <path
            d="M3 7.60211C16.0028 5.19607 54.5875 1.1058 104.904 3.99305"
            stroke="#181C14"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M31.1834 14.651C40.4247 11.9286 68.0805 6.01574 104.773 4.14367"
            stroke="#181C14"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M31.4893 14.6014C43.9904 13.285 80.8591 12.2742 128.324 18.7615"
            stroke="#181C14"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </h1>
      <p className="font-bold bg-grey italic">
        Security Researcher & CTF Player
        <br />
        <span className="font-normal bg-grey not-italic text-slate-300">
          Specializes on 
          Penetration Testing (VAPT), and
          Security Operations (SOC).
          
        </span>
      </p>
      <p className="bg-grey">-  &ldquo;Lorem ipsum dolor sit amet.&rdquo; </p>
    </>
  );
};
