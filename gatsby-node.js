/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const CircularDependencyPlugin = require('circular-dependency-plugin');

// You can delete this file if you're not using it
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions;

    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    // console.log(page.path);
    if (page.path.match(/^\/app/)) {
        page.matchPath = "/app/*";

        // Update the page.
        createPage(page)
    }
};

exports.onCreateWebpackConfig = ({stage, getConfig, actions}) => {
    actions.setWebpackConfig({
        resolve: {
            modules: ["src", "node_modules"]
        },
        // plugins: [
        //     new CircularDependencyPlugin({
        //         exclude: /(\.cache)|(node_modules)/,
        //         failOnError: false,
        //     })
        // ]
    })
};
