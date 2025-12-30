import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import { resolve } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://astro.build/config
export default defineConfig({
    site: 'https://segundo.ai',
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
            },
        },
    },
    server: {
        host: true,
        port: 4321,
    },
});
