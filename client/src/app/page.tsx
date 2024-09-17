import { FormUsers, ShowUsers } from "./ui"

export const dynamic = "force-dynamic"

export default async function Home() {
  return (
    <section className=" flex flex-col justify-center items-center w-full h-screen">
      <FormUsers />
      <ShowUsers />
    </section>
  );
}
