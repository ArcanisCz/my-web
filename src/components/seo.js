import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import {graphql, useStaticQuery} from "gatsby";

function Seo({description, lang, title}) {
    const data = useStaticQuery(detailsQuery);
    const metaDescription = description || data.site.siteMetadata.description;
    return (
        <Helmet
            htmlAttributes={{lang}}
            title={title ? `${title} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title}
            meta={[{
                name: `description`,
                content: metaDescription,
            }, {
                property: `og:title`,
                content: title,
            }, {
                property: `og:description`,
                content: metaDescription,
            }, {
                property: `og:type`,
                content: `website`,
            }, {
                name: `twitter:card`,
                content: `summary`,
            }, {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
            }, {
                name: `twitter:title`,
                content: title,
            }, {
                name: `twitter:description`,
                content: metaDescription,
            }]}
        />
    );
}

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    title: PropTypes.string.isRequired,
};

Seo.defaultProps = {
    lang: `cs`,
};

Seo.defaultProps = {
    description: "",
};

export default Seo;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
