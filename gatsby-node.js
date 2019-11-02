const CircularDependencyPlugin = require("circular-dependency-plugin");
const GitRevisionPlugin = require('git-revision-webpack-plugin');

exports.onCreateWebpackConfig = ({actions, plugins, stage}) => {
    const gitRevisionPlugin = new GitRevisionPlugin();

    if (stage.startsWith("develop")) {
        actions.setWebpackConfig({
            resolve: {
                alias: {
                    "react-dom": "@hot-loader/react-dom",
                },
            },
        });
    }

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
                'BUILD.HASH': JSON.stringify(gitRevisionPlugin.commithash()),
            }),
        ],
        resolve: {
            modules: ["src", "node_modules"],
        },
    });
};
