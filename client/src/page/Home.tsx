import { Counter, FormUsers, ShowUsers } from "../components";

function Home() {
    return (
        <section className="flex flex-col justify-center items-center w-full h-screen ">
            <FormUsers />
            <Counter />
            <ShowUsers />
        </section>
    )
}
export default Home;