"use client";

import { GetCharactersQuery } from "@/graphql/character/Characters.generated";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

interface CharactersCardProps {
  data: GetCharactersQuery;
}

export const CharactersCard = ({ data }: CharactersCardProps) => {
  useGSAP(() => {
    gsap.fromTo(
      "#text",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "back.out(1.7)",
        stagger: 0.3,
      }
    );
    gsap.fromTo(
      "#image",
      { opacity: 0, y: 20, borderRadius: "100%", x: 120 },
      {
        opacity: 1,
        duration: 1,
        borderRadius: "4%",
        y: 0,
        x: 0,
        ease: "back.out(1.7)",
        stagger: 0.3,
      }
    );
  }, []);
  return (
    <>
      {data.characters?.results?.map((chars) => (
        <div key={chars?.id}>
          <Link href={`/${chars?.id}`}>
            <Image
              id="image"
              src={chars?.image ?? ""}
              width={500}
              height={500}
              alt={chars?.name ?? "char"}
              className="size-96 my-7 opacity-0"
            />
            <p id="text" className="py-10 font-bold text-2xl ">
              {chars?.name}
            </p>
          </Link>
        </div>
      ))}
    </>
  );
};
