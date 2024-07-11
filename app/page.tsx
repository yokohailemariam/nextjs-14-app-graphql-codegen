import { CharactersCard } from "@/component/Characters";
import { GetCharactersDocument } from "@/graphql/character/Characters.generated";
import { getClient } from "@/lib/client";

export default async function Home() {
  const { data } = await getClient().query({
    query: GetCharactersDocument,
    variables: { page: 1, name: "rick" },
  });
  return (
    <>
      <p className="text-center font-bold text-2xlx">Characters</p>

      <div className="px-10  py-10 grid grid-cols-4 gap-10">
        <CharactersCard data={data} />
      </div>
    </>
  );
}
