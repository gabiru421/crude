import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "CRUD NODE JS",
            version: "1.0.0",
            description: "Documentação da API de CRUD NODE JS",
        },
        servers: [
            {
                url: "http://localhost:3000/api",
                description: "Optional server description, e.g. Main (production) server",
            },
        ],
    },
    apis: ["./routes/*.js"],
}

export const swaggerSpec = swaggerJSDoc(options);
//http://localhost:3000/docs/