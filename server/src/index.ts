import { App } from "./app/main";

async function main() {
    const app = new App(3000)
    await app.listen()
}
main().catch(err => {
    console.log(`Err in server ${err}`)
    process.exit(1)
})