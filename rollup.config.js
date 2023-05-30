import ts from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import { defineConfig } from "rollup";

export default defineConfig([
    {
        input: "./packages/core/src/index.ts",
        output: [
            { file: "./packages/core/lib/index.es.js", format: "es" },
            { file: "./packages/core/lib/index.cjs.js", format: "cjs" },
        ],
        plugins: [ts(), terser()],
        external: ["sass", "less", "cheerio"],
    },
    {
        input: "./packages/vite-plugin/src/index.ts",
        output: [
            { file: "./packages/vite-plugin/lib/index.es.js", format: "es" },
            { file: "./packages/vite-plugin/lib/index.cjs.js", format: "cjs" },
            {
                file: "./packages/vite-plugin/lib/index.js",
                format: "umd",
                name: "style_ease_vite_plugin",
            },
        ],
        plugins: [ts(), terser()],
        external: ["@styleease/core"],
    },
    {
        input: "./packages/webpack-plugin/src/index.ts",
        output: [
            { file: "./packages/webpack-plugin/lib/index.es.js", format: "es" },
            {
                file: "./packages/webpack-plugin/lib/index.cjs.js",
                format: "cjs",
            },
            {
                file: "./packages/webpack-plugin/lib/index.js",
                format: "umd",
                name: "StyleEaseWebapckPlugin",
            },
        ],
        plugins: [ts(), terser()],
        external: ["@styleease/core"],
    },
]);
