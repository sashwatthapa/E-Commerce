import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6  lg:max-w-7xl lg:px-8">
        <Image
          width={1420}
          height={100}
          alt="Banner Img"
          src="https://icms-image.slatic.net/images/ims-web/e803273e-8acd-4def-ac50-bfecd83770e4.jpg"
        />
      </div>
    </section>
  );
};

export default Banner;
