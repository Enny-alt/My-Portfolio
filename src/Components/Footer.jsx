import { RiCopyrightLine } from "@remixicon/react";
import React from "react";

const Footer = () => {
  const year = new Date();

  return (
    <div className="text-center text-sm my-8">
      <p>Made with 💖 by Enny_Alt. © CopyRight {year.getFullYear()}</p>
    </div>
  );
};

export default Footer;
