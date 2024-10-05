import Image from "next/image";
import React from "react";

const Logo = ({ width }) => {
  return (
    <div>
      <Image
        src={"/images/Secure-Your-Mark-Ry.png"}
        alt="Secure Your Mark"
        width={width}
        height={100}
        className={`object-contain `}
      />
    </div>
  );
};

export default Logo;
