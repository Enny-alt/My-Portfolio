import { RiFileCopyLine, RiCheckLine } from "@remixicon/react";
import { useState } from "react";

const Hero = () => {

   const [copied, setCopied] = useState(false);
  const email = "davidyvng13@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
    
    
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className=" text-2xl sm:text-5xl sm:leading-16 text-center text-wrap sm:text-balance text-white font-extrabold">
        I Create Seamless Frontend Solutions
        For <span className="font-playfair italic text-colorfull"> Prospective Startups</span>
      </h1>
      <p className="mt-4 sm:mt-7 text-sm sm:text-xl text-center">Hello, I am Enny_Alt. A Frontend Web Developer</p>
      <button onClick={handleCopy} className="mt-3 text-sm flex gap-2 cursor-pointer">
        {copied ? (
          <>
            <RiCheckLine size={20} /> Copied!
          </>
        ) : (
          <>
            <RiFileCopyLine size={20} /> {email}
          </>
        )}
      </button>
     
    </div>
  );
};

export default Hero;
