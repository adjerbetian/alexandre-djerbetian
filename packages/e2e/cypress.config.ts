import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        // integrationFolder: "features",
        baseUrl: "http://localhost:8080",
        projectId: "iwigtu",
        supportFile: false,
        specPattern: "features/*.ts",
    },
});
