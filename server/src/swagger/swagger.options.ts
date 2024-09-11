export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Register Date with No Paid Incluid",
            version: "1.0.0",
            description: "DeathTime Example"
        },
        servers: [{ url: "http://localhost:3000/api" }]
    },
    apis:["./src/routes/*.ts"]
}