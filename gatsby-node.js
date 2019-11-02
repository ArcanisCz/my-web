/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const CircularDependencyPlugin = require("circular-dependency-plugin");

exports.onCreateWebpackConfig = ({actions, plugins}) => {
    actions.setWebpackConfig({
        plugins: [
            new CircularDependencyPlugin({
                exclude: /node_modules/,
                onDetected({paths, compilation}) {
                    const pathString = paths.join(' -> ');
                    // some false positives in gatsby cache. Cannot use "exclude" option, because it starts in our files, when including gatsby package.
                    if (!pathString.includes(".cache")) {
                        compilation.errors.push(new Error(pathString));
                    }
                },
                failOnError: true,
            }),
            plugins.define({
                "process.env.AXA_SITE": JSON.stringify(process.env.AXA_SITE),
                'BUILD.DATE': new Date().getTime(),
            }),
        ],
        resolve: {
            modules: ["src", "node_modules"],
        },
    });
};
