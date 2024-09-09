import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <div className="flex-center w-[100%] h-[100vh]">
        <Link
          href={`/trademark-registration`}
          className="text-blue-800 border-b-1"
        >
          Click here to register your trademark.
        </Link>
      </div>
    </main>
  );
};

export default page;
