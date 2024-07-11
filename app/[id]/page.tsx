import { GetSingleCharacterDocument } from "@/graphql/character/Characters.generated";
import { getClient } from "@/lib/client";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { data } = await getClient().query({
    query: GetSingleCharacterDocument,
    variables: { id: params.id },
  });

  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center my-4">
      <Image
        src={data.character?.image ?? ""}
        alt={data.character?.name ?? ""}
        width={500}
        height={500}
        className="rounded-md"
      />
      <h1 className="text-2xl">{data.character?.name}</h1>
      <p className="text-lg">{data.character?.status}</p>
      <p className="text-lg">{data.character?.species}</p>
      <p className="text-lg">{data.character?.gender}</p>
      <p className="text-lg">{data.character?.origin?.name}</p>
      <p className="text-lg">{data.character?.location?.name}</p>

      <p className="text-2xl font-bold">Episodes</p>

      {data.character?.episode?.map((episode) => (
        <p key={episode?.episode} className="text-lg">
          {episode?.episode}
        </p>
      ))}
    </div>
  );
};

export default page;
