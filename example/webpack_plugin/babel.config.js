const config = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    browsers: ["last 2 versions", "safari >= 7"],
                },
            },
        ],
    ],
    plugins: [
        [
            "@babel/plugin-transform-runtime",
            {
                corejs: 3,
            },
        ],
    ],
};
module.exports = config;
