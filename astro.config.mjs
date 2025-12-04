// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

export default defineConfig({
    site: "https://studyho.com",
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@": new URL("./src", import.meta.url).pathname,
            },
        },
    },
    integrations: [mdx()],
});
