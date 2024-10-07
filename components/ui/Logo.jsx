import Image from "next/image";
import React from "react";

const Logo = ({ width }) => {
  return (
    <div>
      <Image
        src={"/images/Secure-Your-Mark-Ry.png"}
        alt="Secure Your Mark"
        width={85}
        height={56}
      />
    </div>
  );
};

export default Logo;
