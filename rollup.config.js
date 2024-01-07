import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import sass from "rollup-plugin-sass";
import json from "@rollup/plugin-json";

export default {
    input: "src/index.js",
    output: {
        dir: "dist/bundle.js",
        format: "cjs",
    },
    plugins: [
        nodeResolve({
            extensions: [".js", ".jsx"],
        }),
        babel({
            babelHelpers: "bundled",
            presets: ["@babel/preset-react"],
            extensions: [".js", ".jsx"],
        }),
        resolve(),
        commonjs(),
        sass({
            insert: true,
        }),
        json(),
    ],
};
