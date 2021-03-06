const siteMetadata = {
    title: `Arcanis`,
    description: `aaaaaa`,
    author: `Arcanis`,
    siteUrl: `https://pokus.arcanis.cz`,
};

const build = [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-no-sourcemaps',
    {
        resolve: `gatsby-plugin-sass`,
        options: {
            implementation: require("sass"),
        },
    },
];

const features = [
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-catch-links`,
    {
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
            google: {
                families: ['Open Sans'],
            },
        },
    },
];

const graphql = [
    // {
    //     resolve: `gatsby-source-filesystem`,
    //     options: {
    //         name: `images`,
    //         path: `${__dirname}/src/images`,
    //     },
    // },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: "data",
            path: `${__dirname}/data`,
        },
    },
    {
        resolve: `gatsby-transformer-yaml-plus`,
        options: {
            enableRemark: true,
        },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
];

module.exports = {
    siteMetadata,
    plugins: [
        ...build,
        ...features,
        ...graphql,
        // {
        //     resolve: 'gatsby-plugin-webpack-bundle-analyzer',
        //     options: {
        //         production: true,
        //     },
        // },
    ],
};
