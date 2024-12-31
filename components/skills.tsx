const skills = [
  {
    title: "Languages",
    items: ["JavaScript", 
            "Python", 
            "Bash"],
  },
  {
    title: "Tools",
    items: ["Linux",
    "NMAP",
    "Burp Suite",
    "Metasploit & MobSF", 
    "Nuclei",
    "Ghauri & SQLmap" ,
    "Wazuh & Splunk SEIM",
    "Velociraptor", 
    "Wireshark & Network Miner",
    "Autopsy",
    "FTK Imager", 
    "KAPE",
    "..."],
  },
];

export const Skills = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3">
        {skills.map((skill) => (
          <div key={skill.title}>
            <p className="text-center text-sm font-bold">{skill.title}</p>
            <ul className="mt-2 flex flex-wrap justify-center gap-2 text-xs">
              {skill.items.map((item) => (
                <li key={item} className="rounded-lg bg-grey p-2 text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
