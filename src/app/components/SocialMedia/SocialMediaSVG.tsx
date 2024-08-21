"use client";

import Image from "next/image";
import Link from "next/link";

const SocialMediaSVG = ({ name, link }: { name: string; link: string }) => {
  if (name === "email") {
    return (
      <button
        onClick={() =>
          alert(
            `Fique a vontade para entrar em contato comigo via email: ${link}`
          )
        }
      >
        <Image
          src={`/socialmedia/${name}.svg`}
          alt={`${name}-contact`}
          width={30}
          height={30}
          loading="eager"
          className="max-w-10 cursor-pointer"
        />
      </button>
    );
  }

  return (
    <Link href={link} target="_blank">
      <Image
        src={`/socialmedia/${name}.svg`}
        alt={`${name}-contact`}
        width={30}
        height={30}
        loading="eager"
        className="max-w-10 cursor-pointer"
      />
    </Link>
  );
};

export default SocialMediaSVG;
